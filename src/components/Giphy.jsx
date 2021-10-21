import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "z1SvCQFyE00BezeOovuh2exg7afvchI7",
          },
        });
        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    }
    return data.map((el) => {
      return (
        <div key={el.id} className="gifs">
          <img src={el.images.fixed_height.url} alt="" />
        </div>
      );
    });
  };
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get Gifs, please try again in a few minutes
        </div>
      );
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="m-2">
      {renderError()}
      <form action="" className="form-inline justify-content-center m-2">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={handleSearchChange}
          value={search}
        />
        <button type="submit" className="btn btn-primary mx-2">
          Go
        </button>
      </form>
      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "z1SvCQFyE00BezeOovuh2exg7afvchI7",
        },
      });
      console.log(results);
      setData(results.data.data);
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
  return <div>{renderGifs()}</div>;
};

export default Giphy;

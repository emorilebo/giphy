import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "z1SvCQFyE00BezeOovuh2exg7afvchI7",
        },
      });
      console.log(results);
      setData(results.data.data);
    };
    fetchData();
  }, []);

  const renderGifs = () => {
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

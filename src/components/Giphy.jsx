import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = () => {
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "z1SvCQFyE00BezeOovuh2exg7afvchI7",
        },
      });
      console.log(results);
    };
    fetchData();
  });
  return <div>Giphy</div>;
};

export default Giphy;

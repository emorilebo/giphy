import React from "react";

const Paginate = (props) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);
  return <div className="">Paginate</div>;
};

export default Paginate;

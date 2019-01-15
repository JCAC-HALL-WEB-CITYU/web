import picture from "./picture";
import ReactDOM from "react-dom";
export default picture;


import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./picture";

let urls = [
  "./web/images/pic01.jpg",
  "./web/images/pic02.jpg",
  "./web/images/pic02.jpg",
];

ReactDOM.render(<picture imageUrls={urls} />, document.getElementById("mount"));
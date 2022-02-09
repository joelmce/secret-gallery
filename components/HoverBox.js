import React, { Component } from "react";
import hb from "./stylesheets/hoverbox.module.css";

const HoverBox = ({title, child}) => { // title and child not initialised for now. Using dummy text
  return (
    <div className={hb.hoverBox}>
      <span className={hb.hoverBoxTitle}>Test Gallery</span>
      <p className={hb.hoverBoxInfo}>You are viewing the first initialising of the gallery. Experimental phase.</p>
      <div className={hb.hoverBox_more}></div>
    </div>
  );
};

export default HoverBox;

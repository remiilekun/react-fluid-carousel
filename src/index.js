import React from "react";
import Carousel from "./view";

const prevNextStyle = {
  position: "absolute",
  "margin-top": "20px",
  "z-index": "10",
  content: "<",
  width: "40px",
  background: "black",
  border: "black",
  opacity: "0.5",
  top: "0"
};

const noHoverStyle = {
  opacity: "0.8",
  outline: "none",
  cursor: "pointer"
};

const PrevButton = ({ disabled, onClick, basicStyle }) => {
  let style = disabled ? {} : noHoverStyle;
  style = { ...style, ...prevNextStyle };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ ...basicStyle, ...style }}
    />
  );
};

const NextButton = ({ disabled, onClick, basicStyle }) => {
  let style = disabled ? {} : noHoverStyle;
  style = { ...style, ...prevNextStyle };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ ...basicStyle, ...style }}
    />
  );
};

export default ({ children, renderPrev, renderNext }) => (
  <Carousel
    renderPrev={renderPrev || PrevButton}
    renderNext={renderNext || NextButton}
  >
    {children}
  </Carousel>
);
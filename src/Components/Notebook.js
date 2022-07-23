import React, { Component } from "react";
import notebook from "../assets/notebook.png";
const lineStyle = {
  backgroundColor: "DodgerBlue",
  height: "2px",
  marginTop: "10px",
};
const pageStyle = {
  color: "grey",
  border: "3px solid",
  filter:
    "grayscale(15%) sepia(24%) blur(1px) brightness(104%) opacity(76%) contrast(237%)",
};
const notebookStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundImage: `url(${notebook})`,
    backgroundRepeat: 'no-repeat'   
}


const Notebook = () => {
  return (
    <div style={notebookStyle}>
      <page />
      <Page />
    </div>
  );   
};

const Lines = ({ amount }) => {
  return Array(amount).fill(<div style={lineStyle}> </div>);
};

const Page = () => {
  return (
    <div style={pageStyle}>
      <Lines amount={100} />
    </div>
  );
};

export default Notebook;

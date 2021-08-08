import "./Header.css";
import React from "react";

//eslint-disable-next-line
export default props => (
  <header className="header d-none d-sm-flex flex-column">
    {" "}
    {/* d-none: Faz o header sumir para celulares */}
    <h1 className="mt-3">
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p className="lead text-muted">{props.subtitle}</p>
  </header>
);

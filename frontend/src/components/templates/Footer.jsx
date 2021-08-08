import "./Footer.css";
import React from "react";

//eslint-disable-next-line
export default props => (
  <footer className="footer">
    <span>
      Desenvolvido com <i className="fa fa-coffee text danger"></i>
      <strong>
        {" "}
        React <span className="text-danger">js</span>
      </strong>
    </span>
  </footer>
);

import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Md Touhedul Haque &nbsp; {new Date().getFullYear()} , Zürich, Switzerland.</div>
    </div>
  );
};

export default FooterPanel;

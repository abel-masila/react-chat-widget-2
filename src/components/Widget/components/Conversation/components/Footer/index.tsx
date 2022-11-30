import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="chat-bottom ">
      <div className="chat-footer">
        <div className="power">
          Chat By
          <a href="https://www.cass.ai" target="_blank" className="brand">
            {" "}
            cass.ai
          </a>
        </div>
        <span className="spacer">|</span>
        <a href="https://www.cass.ai/terms" target="_blank" className="privacy">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="chat-bottom ">
      <div className="chat-footer">
        <div className="power">
          Chat By
          <span className="brand"> x2ai.com</span>
        </div>
        <span className="spacer">|</span>
        <a
          href="https://www.x2ai.com/privacy"
          target="_blank"
          className="privacy"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footer;

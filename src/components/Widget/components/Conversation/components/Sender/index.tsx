import React, { useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import { GlobalState } from "src/store/types";

const send = require("../../../../../../../assets/send_button.svg") as string;

import "./style.scss";

type Props = {
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
  isLoading?: boolean;
  primaryColor?: string;
};

function Sender({
  sendMessage,
  placeholder,
  disabledInput,
  autofocus,
  onTextInputChange,
  buttonAlt,
  isLoading,
  primaryColor,
}: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef<HTMLSpanElement>(null);
  // @ts-ignore
  useEffect(() => {
    if (showChat && autofocus && !disabledInput) inputRef.current?.focus();
  }, [showChat, disabledInput]);

  const handlerOnChange = (event) => {
    onTextInputChange && onTextInputChange(event);
  };

  const handlerSendMessage = () => {
    const { current } = inputRef;

    if (current?.innerHTML && !isLoading) {
      sendMessage(current.innerText);
      current.innerHTML = "";
    }
  };

  const handlerOnKeyPress = (event) => {
    if (event.charCode === 13 && !event.shiftKey) {
      event.preventDefault();
      handlerSendMessage();
    }
  };

  return (
    <div className="rcw-sender">
      <div className="rcw-new-message">
        <span
          spellCheck
          className="rcw-input"
          role="textbox"
          contentEditable
          ref={inputRef}
          placeholder={placeholder}
          onInput={handlerOnChange}
          onKeyPress={handlerOnKeyPress}
        />
      </div>
      <button
        type="submit"
        className="rcw-tooltip-button rcw-send"
        //className={cn("rcw-send", { "rcw-tooltip": isLoading })}
        title={isLoading ? "Let's wait for the assistant's response." : ""}
        onClick={handlerSendMessage}
        style={{
          backgroundColor: isLoading ? "gray" : primaryColor,
        }}
      >
        <img
          src={send}
          className="rcw-send-icon"
          alt={buttonAlt}
          title={isLoading ? "Let's wait for the assistant's response." : ""}
        />
      </button>
    </div>
  );
}

export default Sender;

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
};

function Sender({
  sendMessage,
  placeholder,
  disabledInput,
  autofocus,
  onTextInputChange,
  buttonAlt,
  isLoading,
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
      <button type="submit" className="rcw-send" onClick={handlerSendMessage}>
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </div>
  );
}

export default Sender;

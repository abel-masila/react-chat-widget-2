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
  disabledControls?: boolean;
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
  disabledControls
}: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef<HTMLSpanElement>(null);
  // @ts-ignore
  useEffect(() => {
    if (showChat && autofocus && !disabledInput) inputRef.current?.focus();
  }, [showChat, disabledInput]);


    // Prevent any input when disabled
  const handleBeforeInput = (event: React.FormEvent<HTMLSpanElement>) => {
    if (disabledControls) {
      event.preventDefault();
      return false;
    }
  };

  // Prevent paste when disabled
  const handlePaste = (event: React.ClipboardEvent<HTMLSpanElement>) => {
    if (disabledControls) {
      event.preventDefault();
      return false;
    }
  };

  // Prevent drop when disabled
  const handleDrop = (event: React.DragEvent<HTMLSpanElement>) => {
    if (disabledControls) {
      event.preventDefault();
      return false;
    }
  };

  // Prevent focus when disabled
  const handleFocus = (event: React.FocusEvent<HTMLSpanElement>) => {
    if (disabledControls) {
      event.target.blur();
    }
  };
  const handlerOnChange = (event) => {
    if (!disabledControls) {
      onTextInputChange && onTextInputChange(event);
    }
  };

  const handlerSendMessage = () => {
    const { current } = inputRef;

    if (current?.innerHTML && !isLoading && !disabledControls) {
      sendMessage(current.innerText);
      current.innerHTML = "";
    }
  };

  const handlerOnKeyPress = (event) => {
    if (!disabledControls && event.charCode === 13 && !event.shiftKey) {
      event.preventDefault();
      handlerSendMessage();
    }
  };

  return (
    <div className="rcw-sender">
      <div className="rcw-new-message">
        <span
          spellCheck
          className={cn("rcw-input", {
            "rcw-input-disabled": disabledControls,
          })}
          role="textbox"
          contentEditable
          ref={inputRef}
          placeholder={placeholder}
          onInput={handlerOnChange}
          onKeyPress={handlerOnKeyPress}
          onBeforeInput={handleBeforeInput}
           onPaste={handlePaste}
          onDrop={handleDrop}
          onFocus={handleFocus}
          style={{
            cursor: disabledControls ? "not-allowed" : "text",
            backgroundColor: disabledControls ? "#f5f5f5" : "white",
            opacity: disabledControls ? 0.7 : 1,
          }}
        />
      </div>
      <button
        type="submit"
        className="rcw-tooltip-button rcw-send"
        //className={cn("rcw-send", { "rcw-tooltip": isLoading })}
        title={isLoading ? "Let's wait for the assistant's response." : ""}
        onClick={handlerSendMessage}
        disabled={isLoading || disabledControls}
        style={{
          backgroundColor: isLoading || disabledControls ? "gray" : primaryColor,
          cursor: isLoading || disabledControls ? "not-allowed" : "pointer",
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

import React from "react";
import cn from "classnames";

import Header from "./components/Header";
import Messages from "./components/Messages";
import Sender from "./components/Sender";
import QuickButtons from "./components/QuickButtons";
import Footer from "./components/Footer";

import { AnyFunction } from "../../../../utils/types";

import "./style.scss";

type Props = {
  title: string;
  subtitle: string;
  senderPlaceHolder: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  className: string;
  sendMessage: AnyFunction;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  showFooter?: boolean;
  isLoading?: boolean;
  primaryColor?: string;
  stickyButtons?: React.ReactNode;
  disabledControls?: boolean;
};

function Conversation({
  title,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  disabledInput,
  autofocus,
  className,
  sendMessage,
  toggleChat,
  profileAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  showFooter = true,
  isLoading = false,
  primaryColor,
  stickyButtons,
  disabledControls
}: Props) {
  return (
    <div
      className={cn("rcw-conversation-container", className)}
      aria-live="polite"
    >
      <Header
        title={title}
        subtitle={subtitle}
        toggleChat={toggleChat}
        showCloseButton={showCloseButton}
        titleAvatar={titleAvatar}
      />
      <Messages profileAvatar={profileAvatar} showTimeStamp={showTimeStamp} />
      <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
      <Sender
        sendMessage={sendMessage}
        placeholder={senderPlaceHolder}
        disabledInput={disabledInput}
        autofocus={autofocus}
        onTextInputChange={onTextInputChange}
        buttonAlt={sendButtonAlt}
        isLoading={isLoading}
        primaryColor={primaryColor}
        disabledControls={disabledControls}
      />
      <div className="rcw-chat-buttons">{stickyButtons}</div>
      {showFooter ? <Footer /> : null}
    </div>
  );
}

export default Conversation;

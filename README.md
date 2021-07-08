# React Chat Widget 2 (fork)

## Features

- Plain text message UI
- Snippet style for links (only as responses for now)
- Fully customizable
- Easy to use

![demonstration](./assets/chat-demonstration.gif)

## Installation

#### npm

```bash
npm install --save react-chat-widget-2
```

#### yarn

```bash
yarn add react-chat-widget-2
```

## Usage

1- Add the Widget component to your root component

```js
import React from "react";
import { Widget } from "react-chat-widget-2-2";

import "react-chat-widget-2-2/lib/styles.css";

function App() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;
```

2- The only required prop you need to use is the `handleNewUserMessage`, which will receive the input from the user.

```js
import React from "react";
import { Widget } from "react-chat-widget-2";

import "react-chat-widget-2/lib/styles.css";

function App() {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget handleNewUserMessage={handleNewUserMessage} />
    </div>
  );
}

export default App;
```

3- Import the methods for you to add messages in the Widget. (See [messages](#messages))

```js
import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget-2";

import "react-chat-widget-2/lib/styles.css";

function App() {
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(response);
  };

  return (
    <div className="App">
      <Widget handleNewUserMessage={handleNewUserMessage} />
    </div>
  );
}

export default App;
```

4- Customize the widget to match your app design! You can add both props to manage the title of the widget and the avatar it will use. Of course, feel free to change the styles the widget will have in the CSS

```js
import React from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget-2';

import 'react-chat-widget-2/lib/styles.css';

import logo from './logo.svg';

function App() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}

export default App;
```

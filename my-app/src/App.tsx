/* eslint-disable @typescript-eslint/ban-types */

import React from 'react';
import './App.css';

interface Heading {
  content: string
}

interface User {
  firstName: string,
  lastName: string,
}

class UserComponent extends React.Component<User, {}> {
  constructor(props: User) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        Hello, {this.props.firstName}  {this.props.lastName}
      </div>
    );
  }
}

function HeadingComponent(props: Heading): JSX.Element {
  return <h1>{props.content}</h1>;
}

function App() {
  return (
    <div className="App">
      <HeadingComponent content="Welcome" />
      <UserComponent firstName="Patrick" lastName="Metz" />
    </div>
  );
}

export default App;

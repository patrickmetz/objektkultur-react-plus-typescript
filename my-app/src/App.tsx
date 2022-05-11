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

class UserChanger extends React.Component<User, {}>{

}

class UserComponent extends React.Component<User, {}> { // second generic type is for state
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

const HeadingComponent: React.FunctionComponent<Heading> = (props) =>
  <span>{props.content}</span>

function App(): JSX.Element {
  return (
    <div className="App">
      <HeadingComponent content="Welcome" />
      <UserComponent firstName="Patrick" lastName="Metz" />
    </div>
  );
}

export default App;

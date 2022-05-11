/* eslint-disable @typescript-eslint/ban-types */

import React from 'react';
import './App.css';

interface Heading {
  content: string
}

interface User {
  name: string
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface FormProps {
  onChange: (event: InputEvent) => void;
}

// first generic type is for props, second one is for state
class App extends React.Component<{}, User> {
  state = {
    name: 'Stranger'
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <HeadingComponent content="Welcome" />
        <UserComponent name={this.state.name} />
        <FormComponent onChange={this.handleChange} />
      </div>
    );
  }

  // need arrow function, to correctly reference "this"
  handleChange = (event: InputEvent) => {
    this.setState({ name: event.currentTarget.value });
  }
}

const UserComponent: React.FunctionComponent<User> = (props) =>
  <h2>Hello, {props.name}</h2>

const HeadingComponent: React.FunctionComponent<Heading> = (props) =>
  <h1>{props.content}</h1>

const FormComponent: React.FunctionComponent<FormProps> = (props) =>
  <div>Name: <input onChange={(event) => { props.onChange(event) }} /></div>;

export default App;

import { Component } from "react";
import "./stylesNew.css";
import { Button } from "@material-ui/core";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      input: "",
      items: [...this.state.items, this.state.input],
    });
  };

  handleReset = () => {
    this.setState({
      input: "",
      items: [],
    });
  };

  handleClear = () => {
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div>
        <h1 className="hello">Hello world!</h1>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
        <button onClick={this.handleReset}>Reset</button>

        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.input} onChange={this.handleInputChange} id="message" />
        <p>Char Remaining: {this.props.maxChars - this.state.input.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
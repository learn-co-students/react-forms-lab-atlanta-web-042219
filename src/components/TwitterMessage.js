import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars,
      input: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
      remainingChars: 140 - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={this.handleInputChange} />
        <strong>{this.state.remainingChars} chars left</strong>
      </div>
    );
  }
}

export default TwitterMessage;

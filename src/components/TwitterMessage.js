import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: '',
                  messageLength: 140};
  }

  handleInputChange = (e) => {
    this.setState({message: e.target.value,
    messageLength: this.props.maxChars - e.target.value.length})


  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInputChange}/>
        <p>{this.state.messageLength}</p>
      </div>
    );
  }
}

export default TwitterMessage;

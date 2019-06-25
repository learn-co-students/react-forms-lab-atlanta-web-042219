import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      counter: 140
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      counter: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={event =>
          this.handleChange(event)}/>
        <p> Characters Remaining: {this.state.counter} </p>
      </div>
    );
  }
}

export default TwitterMessage;

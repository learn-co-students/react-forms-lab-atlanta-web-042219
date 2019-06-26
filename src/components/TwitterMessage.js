import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      remainingChars: 140,
      value: ''
    };
  }

  handleChange = (e) => {
    let charMath = this.state.maxChars - e.target.value.length

    this.setState({
      remainingChars: charMath,
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.value} 
          onChange={this.handleChange}
        />
        <br/>
        <p>Characters Remaining: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;

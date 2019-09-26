import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = (e) => {
    // console.log(this.state.message)
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={e => this.handleMessage(e)} value={this.state.message}/>
        Remaining characters:{this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;

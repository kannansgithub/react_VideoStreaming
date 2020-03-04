import React, { Component } from "react";
import { connect } from "react-redux";

import { createStream } from "../../actions";
import StreamForm from "../streams/StreamForm";
class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div className="ui form">
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />;
      </div>
    );
  }
}
export default connect(null, { createStream })(StreamCreate);

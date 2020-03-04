import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = stream => {
    return stream.userId === this.props.currentUserId ? (
      <div className="right floated content">
        <Link to={`/streams/${stream.id}/edit`} className="ui button primary">
          Edit
        </Link>
        <Link
          to={`/streams/${stream.id}/delete`}
          className="ui button negative"
        >
          Delete
        </Link>
      </div>
    ) : null;
  };
  renderList = () => {
    if (this.props.streams) {
      return this.props.streams.map(stream => {
        return (
          <div className="item" key={stream.id}>
            {this.renderAdmin(stream)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              <Link to={`/streams/${stream.id}/show`}>
                {stream.title}
                <div className="description">{stream.description}</div>
              </Link>
            </div>
          </div>
        );
      });
    }
  };
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);

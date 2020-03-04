import React, { Component } from "react";
import { GOOGLE_CLIENT_ID } from "../../constants";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this.props.signIn();
  };
  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          SignOut
        </button>
      );
    } else {
      return (
        <div>
          <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon" />
            Sign In with Google
          </button>
        </div>
      );
    }
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

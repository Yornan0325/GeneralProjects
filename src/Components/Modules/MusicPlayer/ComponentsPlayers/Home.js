import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Header from "./Header";
const Home = (props) => {
  // const {
  //   REACT_APP_CLIENT_ID,
  //   REACT_APP_AUTHORIZE_URL,
  //   REACT_APP_REDIRECT_URL,
  // } = process.env;
  const REACT_APP_AUTHORIZE_URL ="https://accounts.spotify.com/authorize";
  const REACT_APP_CLIENT_ID ="2be82699fa0f4841a911f0246dce791f";
  const REACT_APP_REDIRECT_URL ="http://localhost:3000/redirect";

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login">
      <Header />
      <Button variant="info" type="submit" onClick={handleLogin}>
        Login to spotify
      </Button>
    </div>
  );
};
export default connect()(Home);

import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { ToastContainer, toast } from "react-toastify";

import CreateNotification from "./components/CreateNotification/CreateNotification";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  componentWillReceiveProps({
    data: {
      newNotification: { label },
    },
  }) {
    toast(label);
  }
  render() {
    return (
      <div className="App">
        <p>
          My realtime notification React App{" "}
          <span role="img" aria-label="">
            🚀
          </span>
        </p>
        <CreateNotification />
        <ToastContainer />
      </div>
    );
  }
}

const subscriptionNotification = gql`
  subscription {
    newNotification {
      label
    }
  }
`;

export default graphql(subscriptionNotification)(App);

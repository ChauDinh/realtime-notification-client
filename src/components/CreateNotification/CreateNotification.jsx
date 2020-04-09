import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const CREATE_NOTIFICATION = gql`
  mutation PushNotificationMutation($label: String) {
    createNotification(label: $label) {
      label
    }
  }
`;

class CreateNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ label: e.target.value });
  }

  _createNotification = async () => {
    const { label } = this.state;
    await this.props.createNotificationMutation({
      variables: {
        label,
      },
    });
    this.setState({ label: "" });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.label}
          onChange={this.handleChange}
          type="text"
          placeholder="text input"
        />
        <button onClick={this._createNotification}>Submit</button>
      </div>
    );
  }
}

export default graphql(CREATE_NOTIFICATION, {
  name: "createNotificationMutation",
})(CreateNotification);

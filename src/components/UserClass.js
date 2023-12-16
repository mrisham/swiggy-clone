import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "DUmmy",
      },
    };

    {
      //   console.log(this.props.name + "child Constructor called");
    }
  }

  async componentDidMount() {
    const data = await fetch("  https://api.github.com/users/akshaymarch7  ");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // console.log(this.props.name + "child Render is called");
    // const { name, location, avatar } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name :{this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.location}</h3>
        <h4>Contact: mrisham_js</h4>
        <h4>{this.state.userInfo.avatar_url}</h4>
      </div>
    );
  }
}
export default UserClass;

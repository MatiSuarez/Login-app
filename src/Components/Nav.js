import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";

export default class Nav extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={this.handleItemClick}
        >
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

import {StyledButtonWrapper,
        Paragraph,
        StyledWrapper, 
        Wrapper,
        Button,
        Input,
        TextArea,
        Span} from "./styles";
import React, { Component } from "react";
import axios from "axios";

class HomePage extends Component {
  state = {
    login: "",
    logged: false,
    data: [],
    token: "",
    messages: [],
    message: "",
    user: ""
  };

  handleChange = e => {
    this.setState({
      login: e.target.value,
      message: e.target.value,
      user: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  }

  loginRequest = () => {
    axios
      .post("http://itsovy.sk:1201/login", {
        login: this.state.login,
        password: "secret"
      })
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data,
          isLoading: false,
          logged: true,
          token: response.data.token
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  logout = () => {
    axios
      .post("http://itsovy.sk:1201/logout", {
        login: this.state.login,
        token: this.state.token
      })
      .then(response => {
        console.log(response);
        this.setState({ data: response.data, isLoading: false, logged: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  sendMessageRequest = () => {
    axios
      .post("http://itsovy.sk:1201/sendmessage", {
        login: this.state.login,
        token: this.state.token,
        user: this.state.user,
        message: this.state.message
      })
      .then(response => {
        console.log(response);
        this.setState({ data: response.data, isLoading: false, logged: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getMessageRequest = () => {
    axios
      .post("http://itsovy.sk:1201/getmessages", {
        login: this.state.login,
        token: this.state.token
      })
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data,
          isLoading: false,
          logged: true,
          messages: response.data.messages
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
      <StyledWrapper>
        <form onSubmit={this.handleSubmit}>
          <Span>Login</Span>
          <Input
            type="text"
            login={this.state.login}
            onChange={this.handleChange}
          />
          <Span>Message</Span>
          <TextArea
            messagesend={this.state.message}
            onChange={this.handleChange}
          />
          <Span>User</Span>
          <Input
            user={this.state.user}
            onChange={this.handleChange}
            type="text"
          />
        <StyledButtonWrapper>
                <Button type="submit" onClick={this.loginRequest}>Login</Button>
                <Button type="submit" onClick={this.logoutRequest}>Logout</Button>
                <Button type="submit" onClick={this.getMessageRequest}>Get Messages</Button>
                <Button type="submit" onClick={this.sendMessageRequest}>Send Message</Button>
        </StyledButtonWrapper>
        </form>
        </StyledWrapper>
        {this.state.messages.map(message=>{
            return <Wrapper><Paragraph key={message.message}>{message.message}</Paragraph></Wrapper>
        })}
      </div>
    );
  }
}

export default HomePage;
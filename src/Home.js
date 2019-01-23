import React, { Component } from "react";
import {StyledButtonWrapper,
        StyledInputWrapper,
        StyledWrapper, 
        Wrapper,
        Button,
        Input,
        TextArea,
        Span} from "./styles";
import axios from "axios"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            logged: false,
            data:[],
            token: '',
            messages: [],
            message: [],
            user: ''
        };
        this.loginRequest = this.loginRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            login: event.target.value,
            message: event.target.value,
            user: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    loginRequest=()=> {
        axios.post('http://itsovy.sk:1201/login', {
            "login": this.state.login,
            "password": "secret"
        })
            .then(response=> {
                console.log(response);
                this.setState({ data: response.data, isLoading: false, logged:true, token: response.data.token });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    logoutRequest=()=>{
            axios.post('http://itsovy.sk:1201/logout', {
                "login": this.state.login,
                "token": this.state.token
            })
                .then(response=> {
                    console.log(response);
                    this.setState({ data: response.data, isLoading: false, logged:false });
                })
                .catch((error) => {
                    console.log(error);
                })
    }

    sendMessageRequest=()=>{
        axios.post('http://itsovy.sk:1201/sendmessage', {
            "login": this.state.login,
            "token":this.state.token,
            "user": this.state.user,
            "message": this.state.message
        })
            .then(response=> {
                console.log(response);
                this.setState({ data: response.data, isLoading: false, logged:true });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getMessageRequest=()=>{
        axios.post('http://itsovy.sk:1201/getmessages', {
            "login": this.state.login,
            "token": this.state.token,

        })
            .then(response=> {
                console.log(response);
                this.setState({ data: response.data, isLoading: false, logged:true, messages: response.data.messages });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <div>
            <StyledWrapper>
                <form onSubmit={this.handleSubmit}>
                      <StyledInputWrapper>
                        <Span>Login<Input type="text" login={this.state.login} onChange={this.handleChange}/></Span>
                        <Span>Message</Span><TextArea messagesend={this.state.message} onChange={this.handleChange}></TextArea>
                        <Span>User<Input user={this.state.user} onChange={this.handleChange} type="text"/></Span>
                      </StyledInputWrapper>
                      <StyledButtonWrapper>
                        <Button type="submit" onClick={this.loginRequest}>Login</Button>
                        <Button type="submit" onClick={this.logoutRequest}>Logout</Button>
                        <Button type="submit" onClick={this.getMessageRequest}>Get Messages</Button>
                        <Button type="submit" onClick={this.sendMessageRequest}>Send Message</Button>
                     </StyledButtonWrapper>
                </form>
                </StyledWrapper>
                {this.state.messages.map(message=>{
                    return <Wrapper><TextArea key={message.message}>{message.message}</TextArea></Wrapper>
                })}
            </div>
        );
    }
}

export default Home;
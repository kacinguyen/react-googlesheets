import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    // Axios post data to url
    axios.post('https://sheet.best/api/sheets/e3572d29-7fa4-4480-919e-eeaa1c1874b7', this.state)
    .then(response => {
      console.log(response);
    })
  }


  render() {
    const { firstname, lastname, email } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>Sign up</Header>
        <p>This form stores data in Google Sheets by posting data to Google Sheets as a REST API</p>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>First name</label>
            <input placeholder='Enter your first name' type="text" name = "firstname" value = {firstname} onChange= {this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <input placeholder='Enter your last name' type="text" name = "lastname" value = {lastname} onChange= {this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Enter your email' type="text" name = "email" value = {email} onChange= {this.changeHandler}/>
          </Form.Field>          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
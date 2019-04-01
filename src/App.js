import React, { Component } from 'react'
import placeholder from './placeholder.png'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card, Button, Form, FormGroup, FormLabel, FormControl, FormText, Row, Col, Nav, Navbar} from 'react-bootstrap/'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <NavList />
        <Route path="/" exact={true} component={Contactlist} />
        <Route path="/addUser" exact={true} component={NewContactForm} />
        <Route path="/users" exact={true} component={Users} />
      </div>
    );
  }
}

const Contacts=[{
        "userId": "rirani",
        "jobTitleName": "Developer",
        "firstName": "Romin",
        "lastName": "Irani",
        "preferredFullName": "Romin Irani",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "408-1234567",
        "emailAddress": "romin.k.irani@gmail.com"
      },
      {
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
      },
      {
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
      }
    ]

class Contactlist extends Component{
  state = {
    contacts: Contacts
  }
  deleteContact(key){
   const newContacts = this.state.contacts
   newContacts.splice(key,1)
    this.setState({contacts: newContacts})
  }

  addContact (contact){
    const newContacts = this.state.contacts
    newContacts.push(contact)
    this.setState({ contacts: newContacts })
  }


 render() 
    {
        const {contacts} = this.state;
  if (this.state.contacts.length) {
    return (<ul className="contactlist">
      {contacts.map(
        (contact, i) => <Contact
          key={i}
          index={i}
          firstName={contact.firstName}
          lastName={contact.lastName}
          name={contact.preferredFullName}
          phoneNumber={contact.phoneNumber}
          email={contact.emailAddress}
          deleteContact={this.deleteContact.bind(this)} />
      )}
    </ul>)
  }
  else {
    return (<h1>No Contacts Found</h1>)
  }
    }
  }

const Contact = ({ name , firstName, lastName, phoneNumber , email , index, deleteContact}) =>
{
    return(
        <Card>
            <Card.Img variant="top" src={placeholder} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
                <span><label>First Name:</label> {firstName}</span>
                <span><label>Last Name:</label> {lastName}</span>
                <span><label>Phone Number:</label> {phoneNumber}</span>
                <span><label>Email:</label> {email}</span>
              <Button variant="primary" value={index} onClick={()=>deleteContact(index)}>Delete</Button>
            </Card.Body>
        </Card>
    );
}

class NewContactForm extends Component{
  state = {
    "userId": null,
    "jobTitleName": null,
    "firstName": null,
    "lastName": null,
    "preferredFullName": null,
    "employeeCode": null,
    "region": null,
    "phoneNumber": null,
    "emailAddress": null
  }

  regions = [{ name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cape Verde', code: 'CV' },
  { name: 'Cayman Islands', code: 'KY' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Gibraltar', code: 'GI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guadeloupe', code: 'GP' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States', code: 'US' },
  { name: 'United States Minor Outlying Islands', code: 'UM' }
  ]

  handleSumbit = (e) => {
    e.preventDefault()
   
    let contactToAdd = {
      "userId": (e.target.elements.fName.value.substring(0, 1) + e.target.elements.lName.value).toLowerCase(),
      "jobTitleName": e.target.elements.jobTitle.value,
      "firstName": e.target.elements.fName.value,
      "lastName": e.target.elements.lName.value,
      "preferredFullName": e.target.elements.fName.value + " " + e.target.elements.lName.value,
      "employeeCode": e.target.elements.eCode.value,
      "region": e.target.elements.region.value,
      "phoneNumber": e.target.elements.phone.value,
      "emailAddress": e.target.elements.email.value
    }
    Contacts.push(contactToAdd)
    e.target.reset();
    alert ("User Added Succesffuly")
  }

  render(){
    return(
      <Form onSubmit={this.handleSumbit}>
        <Form.Group controlId="formBasicEmail">
        <Row>
          <Form.Label>Job Title</Form.Label>
          <Form.Control name="jobTitle" type="text" placeholder="e.g. Software Engineer" />
          <Form.Label>Employee Code</Form.Label>
            <Form.Control name="eCode" type="text" placeholder="E7"/>
          </Row>
          <Row>
          <Form.Label>First Name</Form.Label>
            <Form.Control name="fName" type="text" placeholder="John" />
          <Form.Label>Last Name</Form.Label>
            <Form.Control name="lName" type="text" placeholder="Doe" />
          </Row>
          <Row>
          <Form.Label>Region:</Form.Label>
            <Form.Control name="region" as="select" value={this.regions.code}>
            {this.regions.map((e, key) => {
              return <option key={key} value={e.code}>{e.code}</option>;
            })}
          </Form.Control>
          <Form.Label>Phone Number</Form.Label>
            <Form.Control name="phone" type="number" placeholder="000-000000000" />
          </Row>
          <Row>
          <Form.Label>E mail</Form.Label>
            <Form.Control name="email" type="email" placeholder="example@example.com" />
          </Row>
          <Button variant="success" type="submit">
            Add Contact
        </Button>
        </Form.Group>
      </Form>
    )
  }
}

const User =({firstName, jobTitle, index, printContact})=>
{
  return (
    <Card onClick={()=>printContact(index)}>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Card.Title>{jobTitle}</Card.Title>
        <span>
          <label>First Name:</label> {firstName}
        </span>
      </Card.Body>
    </Card>
  );
}
class Users extends Component {
  state = { Contacts: Contacts, selectedUser: undefined };

  selectUser(index) {
    this.setState({selectedUser: index});
  }

  printContact(index){
    if(this.state.selectedUser === undefined) return;

    return (
      <div id="userDetails">
        <span className="row">
          <label>Job Title:</label> {Contacts[index].jobTitleName}
        </span>
        <span className="row">
          <label>First Name:</label> {Contacts[index].firstName}
        </span>
        <span className="row">
          <label>Last Name:</label> {Contacts[index].lastName}
        </span>
        <span className="row">
          <label>Full Name:</label> {Contacts[index].preferredFullName}
        </span>
        <span className="row">
          <label>Employee Code:</label> {Contacts[index].employeeCode}
        </span>
        <span className="row">
          <label>Region:</label> {Contacts[index].region}
        </span>
        <span className="row">
          <label>Phone Number:</label> {Contacts[index].phoneNumber}
        </span>
        <span className="row">
          <label>E-mail:</label> {Contacts[index].emailAddress}
        </span>
      </div>
    ); 
  }
  render() {
    {
      if (this.state.Contacts.length) {
        return (
          <div>
            <ul className="contactlist">
              {this.state.Contacts.map((user, i) => (
                <User
                  key={i}
                  index={i}
                  firstName={user.firstName}
                  jobTitle={user.jobTitleName}
                  printContact={this.selectUser.bind(this)}
                />
              ))}
            </ul>
            {this.printContact(this.state.selectedUser)}
          </div>
        );
      } else {
        return <h1>No Users Found</h1>;
      }
    }
  }
}

class NavList extends Component{
  render(){
    return(
    <Navbar bg="primary" variant="dark">
      <Nav>
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link"  exact to="/addUser">Add User</NavLink>
        <NavLink className="nav-link"  exact to="/users">Users</NavLink>
      </Nav>
    </Navbar>
      
    )
  }
}

export default App;

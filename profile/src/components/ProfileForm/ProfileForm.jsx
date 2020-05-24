import React from 'react'
import Input from '../input/Input'
import Paraghraph from '../paragraph/Paraghraph'
import {sendPutRequest} from '../../REST'

class ProfileForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      userName: '',
      age: '',
      email: '',
      phone: '',
    }

    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleName(e) {
    const value = e.target.value;
    this.setState({userName: value})
    console.log(this.state);
  }

  handleAge(e) {
    const value = e.target.value;
    this.setState({age:value})
    console.log(this.state);
  }

  handleEmail(e) {
    const value = e.target.value;
    this.setState({email:value})
    console.log(this.state);
  }

  handlePhone(e) {
    const value = e.target.value;
    this.setState({phone:value})
    console.log(this.state);
  }

  handleSubmit() {
    const person = this.state;
    let object = {person}
    let formData = new FormData(document.forms.person);

    formData.forEach(function(value, key){
      object[key] = value;
    });

    console.log(object);
    

    sendPutRequest(object)
  }

  render() {
    
    return (
      <div className="container-profile_form">
        <form className="profile_form" name = 'person' onClick = {this.handleSubmit}>
          <Paraghraph className="userInfo" id="fullName">
            Full Name:
          </Paraghraph>
          <Input 
            type = {'text'}
            className = {'userInfoInput'}
            id = {'fullNameInput'}
            placeholder = {'Enter your full name...'}
            onChange = {this.handleName}
          />
          <Paraghraph className="userInfo" id="age">
            Age:
          </Paraghraph>
          <Input 
            type = {'number'}
            className = {'userInfoInput'}
            id = {'ageInput'}
            placeholder = {'Enter your age...'}
            onChange = {this.handleAge}
          />
          <Paraghraph className="userInfo" id="email">
            Email:
          </Paraghraph>
          <Input 
            type = {'email'}
            className = {'userInfoInput'}
            id = {'emailInput'}
            placeholder = {'Enter your email...'}
            onChange = {this.handleEmail}
          />
          <Paraghraph className="userInfo" id="phone">
            Phone:
          </Paraghraph>
          <Input 
            type = {'tel'}
            className = {'userInfoInput'}
            id = {'phoneInput'}
            placeholder = {'Enter your phone number...'}
            onChange = {this.handlePhone}
          />
    
          <button  type = {'submit'} className = {'registrate_button'} id = {'registrate_button'}> Registrate</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm;
import React from 'react'
import '../ProfileForm/profileForm.css'
import Input from '../input/Input'
import Paraghraph from '../paragraph/Paraghraph'
import {sendPostRequest} from '../../REST'

class ProfileForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputValues : {}
    }
  }

  inputChangeHandler = (e) => {
    const {name, value} = e.target;

    this.setState(prevState => ({
      inputValues : {
      ...prevState.inputValues,
      [name] : value
      }
    }));
  }

  checkFormHandler = (e) => {
    e.preventDefault();
    sendPostRequest(this.state.inputValues);
    return false;
  }

  render() { 
    return (
      <div className="container-profile_form">
        <form className="profile_form" action='' method='post' onSubmit={this.checkFormHandler}>
          <h1 className = 'profile_form-header'>PROVIDE YOUR CREDITIONALS</h1>
          <Paraghraph className="userInfo" id="fullName">
            Full Name:
          </Paraghraph>
          <Input 
            type = {'text'}
            className = {'userInfoInput'}
            name = {'name'}
            id = {'fullNameInput'}
            placeholder = {'Enter your full name...'}
            onChange = {this.inputChangeHandler}
          />
          <Paraghraph className="userInfo" id="age">
            Age:
          </Paraghraph>
          <Input 
            type = {'number'}
            name = {'age'}
            className = {'userInfoInput'}
            id = {'ageInput'}
            placeholder = {'Enter your age...'}
            onChange = {this.inputChangeHandler}
          />
          <Paraghraph className="userInfo" id="email">
            Email:
          </Paraghraph>
          <Input 
            type = {'email'}
            className = {'userInfoInput'}
            name = {'email'}
            id = {'emailInput'}
            placeholder = {'Enter your email...'}
            onChange = {this.inputChangeHandler}
          />
          <Paraghraph className="userInfo" id="phone">
            Phone:
          </Paraghraph>
          <Input 
            type = {'tel'}
            name = {'phone'}
            className = {'userInfoInput'}
            id = {'phoneInput'}
            placeholder = {'Enter your phone number...'}
            onChange = {this.inputChangeHandler}
          />
          <button  type = {'submit'} className = {'registrate_button'} id = {'registrate_button'}> Registrate</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm;
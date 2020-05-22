import React from 'react'
import Input from '../input/Input'
import Paraghraph from '../paragraph/Paraghraph'

class ProfileForm extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container-profile_form">
              <form className="profile_form">
              <Paraghraph className="userInfo" id="fullName">
                Full Name:
              </Paraghraph>
              <Input 
                type = {'text'}
                className = {'userInfoInput'}
                id = {'fullNameInput'}
                placeholder = {'Enter your full name...'}
              />
              <Paraghraph className="userInfo" id="age">
                Age:
              </Paraghraph>
              <Input 
                type = {'number'}
                className = {'userInfoInput'}
                id = {'ageInput'}
                placeholder = {'Enter your age...'}
              />
              <Paraghraph className="userInfo" id="email">
                Email:
              </Paraghraph>
              <Input 
                type = {'text'}
                className = {'userInfoInput'}
                id = {'emailInput'}
                placeholder = {'Enter your email...'}
              />
              <Paraghraph className="userInfo" id="phone">
                Phone:
              </Paraghraph>
              <Input 
                type = {'text'}
                className = {'userInfoInput'}
                id = {'phoneInput'}
                placeholder = {'Enter your phone number...'}
              />
        
              <Input 
                type = {'submit'}
                className = {'registrate_button'}
                id = {'registrate_button'}
                value = {'Registrate'}
              />
              </form>
            </div>
        )
    }
}

export default ProfileForm;
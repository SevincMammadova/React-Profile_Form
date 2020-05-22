import React from 'react';
import Input from '../input/Input'


class WelcomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="welcome_page-container">
            <h1 className="welcomePage-header">Welcome to our Team</h1>
            <Input
            type = {'submit'}
            className = {'submit_button'}
            id = {'submit_button'}
            value = {'Click me'}
            />
            </div>
        )
    } 
}

export default WelcomePage;
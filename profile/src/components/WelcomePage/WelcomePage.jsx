import React from 'react';
import '../WelcomePage/welcomePage.css'
import Input from '../input/Input'
import ProfileForm from '../ProfileForm/ProfileForm';


class WelcomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowModal: false,
        }
    }

    changeModal = isShow => {
        this.setState({isShowModal:isShow})
    }
  
    render() {
        const { changeModal } = this;
        const { isShowModal } = this.state;
        return(
            <>
                { isShowModal ? (<ProfileForm/>) :
                    <div className="welcome_page-container">
                       <h1 className="welcomePage-header">Welcome to our Team</h1>
                        <Input
                        type = {'submit'}
                        className = {'submit_button'}
                        id = {'submit_button'}
                        value = {'Click me'}
                        onClick = {changeModal}
                        />
                    </div>
                }
            </>
        )
    }  
}

export default WelcomePage;
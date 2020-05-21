import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            className,
            action,
        } = this.props;

        return(
            <Form
                className = {className}
                action = {action}
            />
        )
    }
}

export default Form;
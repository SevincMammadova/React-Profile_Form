import React from 'react';


class Input extends React.Component{
   
    render() {
        const {
            type,
            id,
            className,
            placeholder,
            value,
            onClick,
        } = this.props;

        return(
            <input
                type = {type}
                id = {id}
                className = {className}
                placeholder = {placeholder}
                value = {value}
                onClick = {onClick}
            />
        )
    }
}

export default Input;
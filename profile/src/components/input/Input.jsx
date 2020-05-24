import React from 'react';


class Input extends React.Component{
   
    render() {
        const {
            type,
            id,
            name,
            className,
            placeholder,
            value,
            onClick,
            onChange,
        } = this.props;

        return(
            <input
                type = {type}
                id = {id}
                name = {name}
                className = {className}
                placeholder = {placeholder}
                value = {value}
                onClick = {onClick}
                onChange = {onChange}
            />
        )
    }
}

export default Input;
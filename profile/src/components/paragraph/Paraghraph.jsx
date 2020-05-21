import React from 'react';

class Paraghraph extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render () {
        const {
            className,
            id,
            children
        } = this.props

        return (
            <p 
            className = {className}
            id = {id}>
                {children}
            </p>
        )
    }
}
export default Paraghraph;
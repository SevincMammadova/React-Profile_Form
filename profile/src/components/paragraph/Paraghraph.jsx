import React from 'react';
import '../paragraph/paraghraph.css'

class Paraghraph extends React.Component {
    
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
import React from 'react'
const startCase = require('lodash.startcase')

export default class AddOption extends React.Component {
    state = { 
        error: undefined 
    } // We can do this because we have added a plugin in .babelrc file

    handleAddOption = (e) => {
        e.preventDefault()
        let option = e.target.elements.option.value.trim()
        option = startCase(option)
        const error = this.props.handleAddOption(option)
            
        this.setState(() => ({ error }) )

        if(!error) {
            e.target.elements.option.value = ''
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option-form' onSubmit={this.handleAddOption}>
                    <input className='add-option-form__input' autoComplete='off' typr='text' placeholder='Enter option' name='option' />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}

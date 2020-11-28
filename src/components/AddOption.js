import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error : undefined
    }
    handleAddOption = (e) => {
        e.preventDefault()

        const result = e.target.elements.first.value.trim()
        const error = this.props.handleAdd(result)

        this.setState(() => {
            return {
                error : error
            }
        })
        if(!error) {
            e.target.elements.first.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="error-message">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="first" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}
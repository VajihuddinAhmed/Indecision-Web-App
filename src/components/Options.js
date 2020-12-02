import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                onClick={props.handleDeleteOptions} 
                className="button button--link"
                >
                Remove All
                </button>
            </div>
            {props.items.length === 0 && <p className="widget-message">Please add an option to get started!</p>}
            {
                props.items.map((item, i) => {
                    return <Option key={item} optionText={item} count={i + 1} handleDeleteItem={props.handleDeleteItem} />
                })
            }
        </div>
    )
}

export default Options
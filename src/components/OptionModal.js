import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <Modal 
        isOpen={!!props.selectedOption} 
        contentLabel={"Selected Option"} 
        onRequestClose={props.handleClearModal}
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal--title">Selected Option</h3>
            {props.selectedOption && <p className="modal--body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearModal}>OK</button>
        </Modal>
    )
}

export default OptionModal
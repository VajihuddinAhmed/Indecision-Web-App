import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.head}</h1>
                {props.sub && <h2 className="header__subtitle">{props.sub}</h2>}           
            </div>
        </div>
    )
}
Header.defaultProps = {
    head : 'Indecision'
}

export default Header
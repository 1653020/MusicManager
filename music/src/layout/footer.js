import React from 'react'

const Footer = ({ language }) => {

    return (
        <div className="footer">
            <p>{language.footer}</p>
        </div>
    )
}

export default Footer
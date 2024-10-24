
import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button className="ui-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

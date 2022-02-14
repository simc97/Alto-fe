import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const TextInput = ({
    title,
    inputTerm,
    handleOnChange, 
    handleOnSubmit,
    placeholder
}) => {
    const inputRef = useRef();

    return(
        <div className="text-input-container">
            <div className="text-input-header">{title}</div>
            <input
                className="text-input"
                type="text"
                ref={inputRef}
                value={inputTerm}
                onChange={e => handleOnChange()}
                placeholder={placeholder ? placeholder : ''}

            />
        </div>
    )
}

TextInput.propTypes = {
    title: PropTypes.string.isRequired,
    inputTerm: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func, 
    handleOnSubmit:  PropTypes.func
}

export default TextInput;
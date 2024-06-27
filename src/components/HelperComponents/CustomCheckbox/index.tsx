import './CustomCheckbox.css';
import React, { useState } from 'react';

interface CustomCheckboxProps {
    questionText: string
}


const CustomCheckbox: React.FC<CustomCheckboxProps> = ({  questionText}) => {

    return (
        <label className="container"> {questionText}
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
        </label>
    );
};

export default CustomCheckbox;
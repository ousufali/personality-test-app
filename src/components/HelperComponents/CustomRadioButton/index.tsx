import './CustomRadioButton.css';
import React, { useState } from 'react';

interface CustomRadioButtonProps {
    text: string
    onClickCallback: () => void
    isChecked: boolean
}


const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ text, onClickCallback, isChecked }) => {


    return (
        <label
            className="container"
            // onClick={onClickCallback}
        > {text}
            <input type="radio" name="radio" checked={isChecked} onChange={onClickCallback} />
            <span className="checkmark"></span>
        </label>
    );
};

export default CustomRadioButton;
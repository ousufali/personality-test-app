import './CustomCheckbox.css';
import React, { useState } from 'react';

interface CustomCheckboxProps {
    isAnswered: boolean;
}


const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isAnswered }) => {
    const [isChecked, setIsChecked] = useState(true);

    if (isAnswered)
        return (
            <span style={{ color: 'green', fontSize: "32px", fontWeight: "bolder" }}>&#10003; </span>
        )
    else {

        return (
            <span style={{ color: 'lightgrey', fontSize: "32px", fontWeight: "bolder", paddingRight: "5px", paddingLeft: "5px" }}>?</span>
        )

    }


    return (
        <div >
            <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`} >
                <div
                    className='same-person'
                    onClick={() => setIsChecked(!isChecked)}
                >

                    <div className="checkmark" >
                        {isChecked && <span style={{ color: '#e96886' }}>&#10003; </span>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomCheckbox;
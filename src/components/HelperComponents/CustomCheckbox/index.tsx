import './CustomCheckbox.css';
import React, { useState } from 'react';

interface CustomCheckboxProps {
}


const CustomCheckbox: React.FC<CustomCheckboxProps> = ({  }) => {
    const [isChecked, setIsChecked] = useState(true);

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
import './AssessmentDescription.css';
import React from 'react';


interface AssessmentDescriptionProps {
}

const AssessmentDescription: React.FC<AssessmentDescriptionProps> = ({ }) => {

    return (
        <div className='test-section'>


            <div className='response-sheet-section'>
                <span className="heading-name">Response Sheet</span>

                <span className='test-section-question'>You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:</span>

            </div>

            <div className='action-section'>
                <button id='action-button' className='action-button-start'>Start</button>

            </div>
        </div>
    );
};

export default AssessmentDescription;
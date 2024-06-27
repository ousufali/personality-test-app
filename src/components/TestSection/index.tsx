import './TestSection.css';
import React from 'react';

import CustomCheckbox from '../HelperComponents/CustomCheckbox';

interface TestSectionProps {
}

const TestSection: React.FC<TestSectionProps> = ({ }) => {

    return (
        <div className='test-section'>
            {/* <div className='home-content'>
                <h1>Personality Test Application</h1>
                <p>
                    This is a simple personality test application that allows users to take a personality test and see their results.
                </p>
            </div> */}


            {/* <span className='test-section-header'>Response Sheet</span> */}
            <div className='response-sheet-section'>
                <span className="heading-name">Response Sheet</span>

                <span className='test-section-question'>You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:</span>


                <div className='test-section-question-options'>
                    <CustomCheckbox questionText='Don’t dare to interrupt them' />
                    <CustomCheckbox questionText='Think it’s more important to give them some of your time; work can wait' />
                    <CustomCheckbox questionText='Listen, but with only half an ear' />
                    <CustomCheckbox questionText='Interrupt and explain that you are really busy at the moment' />

                </div>
            </div>

            <div className='action-section'>
                <button id='action-button' className='action-button-previous' >Previous</button>
                <button id='action-button' className='action-button-next'     >Next</button>

            </div>
        </div>
    );
};

export default TestSection;
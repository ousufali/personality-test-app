import './TestSection.css';
import React from 'react';

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
            <span className="heading-name">Response Sheet</span>

            <span className='test-section-header'>You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:</span>


            <div className='test-section-question-options'>
                <div className='test-section-question-option'>
                    <input type='radio' name='question-1' value='0' style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        // border: '1px solid red',
                        color: 'red'
                    }} />
                    <span>Don’t dare to interrupt them</span>
                </div>
                <div className='test-section-question-option'>
                    <input type='radio' name='question-1' value='1' />
                    <span>Think it’s more important to give them some of your time; work can wait</span>
                </div>
                <div className='test-section-question-option'>
                    <input type='radio' name='question-1' value='2' />
                    <span>Listen, but with only half an ear</span>
                </div>
                <div className='test-section-question-option'>
                    <input type='radio' name='question-1' value='3' />
                    <span>Interrupt and explain that you are really busy at the moment</span>
                </div>
            </div>
        </div>
    );
};

export default TestSection;
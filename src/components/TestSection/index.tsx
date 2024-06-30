import './TestSection.css';
import React from 'react';

import CustomRadioButton from '../HelperComponents/CustomRadioButton';

import { Question } from '../../utils/models';

interface TestSectionProps {
    updateQuestionAnswer: (selectedQuestion: number, optionIndex: number) => void
    changeSelectedQuestion: (valueChanged: number) => void
    questions: Question[]
    selectedQuestion: number
}

const TestSection: React.FC<TestSectionProps> = ({ selectedQuestion, questions, updateQuestionAnswer, changeSelectedQuestion }) => {
    const selectedOption = questions[selectedQuestion].selectedOption;

    const handleNext = () => {
        console.log('Next');
        changeSelectedQuestion(1);
    }

    const handlePrevious = () => {
        console.log('Previous');
        changeSelectedQuestion(-1);
    }

    return (
        <div className='test-section'>

            <div className='response-sheet-section'>
                <span className="heading-name">Response Sheet</span>

                <span className='test-section-question'>
                    {questions[selectedQuestion].text}
                </span>


                <div className='test-section-question-options'>
                    {
                        questions[selectedQuestion].options?.map((option, index) => (
                            <CustomRadioButton key={index} text={option} isChecked={selectedOption === index} onClickCallback={() => updateQuestionAnswer(selectedQuestion, index)} />
                        ))
                    }
                </div>
            </div>

            <div className='action-section'>
                {
                    selectedQuestion === 0 ?
                        <button id='action-button' className='action-button-next' onClick={handleNext}>Next</button>

                        :
                        selectedQuestion === questions.length - 1 ?
                            <button id='action-button' className='action-button-previous' onClick={handlePrevious} >Previous</button>
                            :
                            <>
                                <button id='action-button' className='action-button-previous' onClick={handlePrevious} >Previous</button>
                                <button id='action-button' className='action-button-next' onClick={handleNext}>Next</button>
                            </>
                }

            </div>
        </div>
    );
};

export default TestSection;
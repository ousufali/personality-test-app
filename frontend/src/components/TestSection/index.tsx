import './TestSection.css';
import React, { useState } from 'react';

import CustomRadioButton from '../HelperComponents/CustomRadioButton';

import { Question } from '../../utils/models';

interface TestSectionProps {
    updateQuestionAnswer: (selectedQuestion: number, optionIndex: number) => Promise<void>
    changeSelectedQuestion: (valueChanged: number) => void
    calculateScore: () => Promise<void>
    questions: Question[]
    selectedQuestion: number
}

const TestSection: React.FC<TestSectionProps> = ({ selectedQuestion, questions, updateQuestionAnswer, changeSelectedQuestion, calculateScore }) => {
    const selectedOption = questions[selectedQuestion].selectedOption;
    const [isAllquestionsAnswered, setIsAllquestionsAnswered] = useState(false)

    const handleNext = () => {
        // console.log('Next');
        changeSelectedQuestion(1);
    }

    const handlePrevious = () => {
        // console.log('Previous');
        changeSelectedQuestion(-1);
    }

    const optionSelectHandler = async (index: number) => {
        // console.log('Option Selected:', index);
        await updateQuestionAnswer(selectedQuestion, index)
        // console.log("isAllquestionsAnswered", questions.every(question => question.isAnswered), "||||")
        setIsAllquestionsAnswered(questions.every(question => question.isAnswered))

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
                            <CustomRadioButton key={index} text={option} isChecked={selectedOption === index} onClickCallback={async () => await optionSelectHandler(index)} />
                        ))
                    }
                </div>
            </div>

            <div className='action-section'>
                {
                    isAllquestionsAnswered ? <button id='action-button' className='action-button-next' onClick={calculateScore}>Submit</button>

                        : selectedQuestion === 0 ?
                            <button id='action-button' className='action-button-next' onClick={handleNext}>Next</button>

                            : selectedQuestion === questions.length - 1 ?
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
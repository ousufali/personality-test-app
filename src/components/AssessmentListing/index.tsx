import './AssessmentListing.css';
import React from 'react';


import { AssessmentListing } from '../../utils/models';
interface AssessmentProps {
    assessments: Array<AssessmentListing>
    selectedTest: number
    setSelectedTest: React.Dispatch<React.SetStateAction<number>>;
}

const Assessment: React.FC<AssessmentProps> = ({ assessments, selectedTest, setSelectedTest }) => {
    
    return (
        <div className="question-list">
            <span className="heading-name">{"Assessments"}</span>

            <div className="question-list-div">

                {
                    assessments.map((item, index) =>
                        <div
                            key={index}
                            className={selectedTest === index ? "assessment-card-selected" : "assessment-card"}
                            onClick={() => setSelectedTest(index)}
                        >
                            <span className="assessment-title">{item.title}</span>
                            <span className='assessment-description'>{item.shortDescription}</span>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Assessment;
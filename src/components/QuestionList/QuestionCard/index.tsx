import "./QuestionCard.css";
import React from "react";

import CustomCheckbox from "../../HelperComponents/CustomCheckbox";

interface QuestionCardProps {
    questionText: string;
    isAnswered: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionText, isAnswered }) => {



    return (
        <div className="question-card-div">
            <CustomCheckbox isAnswered={isAnswered} />
            <span>{questionText}</span>
        </div>
    )
}


export default QuestionCard
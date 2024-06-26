import "./QuestionList.css"
import React, { useState } from "react"

import QuestionCard from "./QuestionCard"

import { Question } from "../../utils/models"



interface QuestionListProps {
    questions: Question[]
    headingName: string
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, headingName }) => {

    return (
        <div className="question-list">
            <span className="heading-name">{headingName}</span>
            
            <div className="question-list-div">
                {
                    questions.map(item => <QuestionCard questionText={item.text} isAnswered={item.isAnswered} />)
                }
            </div>
        </div>
    )
}

export default QuestionList
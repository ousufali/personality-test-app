import "./QuestionList.css"
import React, { useState } from "react"

import { Question } from "../../utils/models"



interface QuestionsListingProps {
    questions: Question[]
    headingName: string
}

const QuestionsListing: React.FC<QuestionsListingProps> = ({ questions, headingName }) => {

    return (
        <div className="question-list">
            <span className="heading-name">{headingName}</span>

            <div className="question-list-div">

                {
                    questions.map((item, index) =>
                        <div
                            key={index}
                            className="question-card"

                        >
                            {
                                item.isAnswered ? <span style={{ color: 'green', fontSize: "32px", fontWeight: "bolder" }}>&#10003; </span>
                                    : <span style={{ color: 'lightgrey', fontSize: "32px", fontWeight: "bolder", paddingRight: "5px", paddingLeft: "6px" }}>?</span>

                            }
                            <span>{item.text}</span>

                        </div>)
                }
            </div>
        </div>
    )
}

export default QuestionsListing
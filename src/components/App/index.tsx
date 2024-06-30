import './App.css'
import React, { useState, useEffect } from 'react'

import AppHeader from '../AppHeader'

import QuestionsListing from '../QuestionsListing'
import Assessments from '../AssessmentListing'

import TestSection from '../TestSection'
import AssessmentDescription from '../AssessmentDescription'

import Results from '../Results'

import { async_sleep } from '../../utils'
import { getAssessments, getAssessmentQuestions } from '../../utils/services'
import { AssessmentListing, Question } from '../../utils/models'


const App: React.FC = () => {
  const [assessments, setAssessments] = useState(Array<AssessmentListing>)
  const [questions, setQuestions] = useState(Array<Question>)

  const [page, setPage] = useState(0)
  const [selectedTest, setSelectedTest] = useState(0)
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  const [score, setScore] = useState(-1)


  console.log("questions: ", questions)


  useEffect(() => {
    const fetchAssessments = async () => {
      const data = await getAssessments()
      setAssessments(data)
    }
    fetchAssessments()

  }, [])



  const startTest = async () => {
    // start test here....
    // console.log("start test ", selectedTest)
    const data = await getAssessmentQuestions({ assessmentNumber: selectedTest })
    console.log("data: ", data)
    if (data) {
      setQuestions(data)
      setPage(1)
      return true
    } else {
      await async_sleep(1500)
      return false
    }
  }

  const updateQuestionAnswer = (selectedQuestion: number, optionIndex: number) => {
    setQuestions(current_state => {
      const newQuestions = [...current_state]
      newQuestions[selectedQuestion].selectedOption = optionIndex
      newQuestions[selectedQuestion].isAnswered = true
      return newQuestions
    })
  }

  const changeSelectedQuestion = (valueChanged: number) => {
    setSelectedQuestion(current_state => current_state + valueChanged)
  }
  const updateSelectedQuestion = (valueChanged: number) => {
    setSelectedQuestion(valueChanged)
  }


  return (
    <div id='App'>

      <div id='Header'>
        <AppHeader />
      </div>

      <div id='Aside'>
        {
          page === 0 ?
            <Assessments assessments={assessments} selectedTest={selectedTest} setSelectedTest={setSelectedTest} />

            : <QuestionsListing questions={questions} headingName='Questions' selectedQuestion={selectedQuestion} updateSelectedQuestion={updateSelectedQuestion} />

        }
      </div>

      <div id='Main'>
        {
          page === 0 ?
            <AssessmentDescription assessment={assessments[selectedTest]} startTestCallback={startTest} />
            : page === 1 ? <TestSection selectedQuestion={selectedQuestion} questions={questions} updateQuestionAnswer={updateQuestionAnswer} changeSelectedQuestion={changeSelectedQuestion} /> :
              <Results score={score} />
        }
      </div>



    </div>
  )
}

export default App

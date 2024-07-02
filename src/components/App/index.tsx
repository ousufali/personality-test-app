import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';


import AppHeader from '../AppHeader'

import QuestionsListing from '../QuestionsListing'
import Assessments from '../AssessmentListing'

import TestSection from '../TestSection'
import AssessmentDescription from '../AssessmentDescription'

import Results from '../Results'
import WithQuestionsValidation from '../HelperComponents/WithQuestionsValidation'

import { async_sleep } from '../../utils'
import { getAssessments, getAssessmentQuestions, getAssessmentScore } from '../../utils/services'
import { AssessmentListing, Question } from '../../utils/models'



const App: React.FC = () => {
  const navigate = useNavigate();
  // console.log("location", location.pathname)
  const [assessments, setAssessments] = useState(Array<AssessmentListing>)
  const [questions, setQuestions] = useState(Array<Question>)

  const [selectedTest, setSelectedTest] = useState(0)
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  const [score, setScore] = useState(-1)

  useEffect(() => {

  }, [selectedTest])

  useEffect(() => {
    const fetchAssessments = async () => {
      const data = await getAssessments()
      setAssessments(data)
    }
    fetchAssessments()

  }, [])

  // console.log(isDataFetched, "isDataFetched: ",)

  const startTest = async () => {
    const data = await getAssessmentQuestions({ assessmentNumber: selectedTest })
    // console.log("data: ", data)
    if (data) {
      setQuestions(data)
      navigate(`/assessment/${selectedTest}`)
      return true
    } else {
      await async_sleep(1500)
      return false
    }
  }

  const updateQuestionAnswer = async (selectedQuestion: number, optionIndex: number) => {
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

  const calculateScore = async () => {
    // console.log("questions: ", questions)

    const request_data = {
      assessmentNumber: selectedTest,
      answerSheet: questions.map((question, index) => ({ questionNumber: index, selectedOption: question.selectedOption }))
    }
    const calculated_score = await getAssessmentScore(request_data)
    console.log("calculated_score: ", calculated_score)
    if (calculated_score) {
      setScore(calculated_score)
      navigate("assessments/results")
    } else {
      console.log("error in calculating score")
    }
    // setScore(score)
  }


  return (

    <div id='App' data-testid='App'>

      <div id='Header' data-testid='Header'>
        <AppHeader />
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div id='Aside' data-testid='Aside'>
              <Assessments assessments={assessments} selectedTest={selectedTest} setSelectedTest={setSelectedTest} />
            </div>
            <div id='Main' data-testid='Main'>
              <AssessmentDescription assessment={assessments[selectedTest]} startTestCallback={startTest} />
            </div>
          </>
        } />

        <Route path="/assessment/:selectedTestId" element={
          <WithQuestionsValidation questions={questions}>
            <>
              <div id='Aside' data-testid='Aside'>
                <QuestionsListing questions={questions} headingName='Questions' selectedQuestion={selectedQuestion} updateSelectedQuestion={updateSelectedQuestion} />
              </div>
              <div id='Main' data-testid='Main'>
                <TestSection selectedQuestion={selectedQuestion} questions={questions} updateQuestionAnswer={updateQuestionAnswer} changeSelectedQuestion={changeSelectedQuestion} calculateScore={calculateScore} />
              </div>
            </>
          </WithQuestionsValidation>
        } />

        <Route path="assessments/results" element={
          <WithQuestionsValidation questions={questions}>
            <>
              <div id='Aside' data-testid='Aside' onClick={() => navigate("/")}>
                <Assessments assessments={assessments} selectedTest={selectedTest} setSelectedTest={setSelectedTest} />
              </div>

              <div id='Main' data-testid='Main'>
                <Results score={score} />
              </div>
            </>
          </WithQuestionsValidation>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </div >

  )
}

export default App

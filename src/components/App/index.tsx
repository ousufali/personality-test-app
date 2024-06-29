import './App.css'
import React, { useState, useEffect } from 'react'

import AppHeader from '../AppHeader'

import QuestionsListing from '../QuestionsListing'
import Assessment from '../AssessmentListing'

import TestSection from '../TestSection'
import AssessmentDescription from '../AssessmentDescription'

import Results from '../Results'

import { getAssessments } from '../../utils/services'


const _questions = [
  {
    text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    isAnswered: true,
    selectedOption: -1,
    options: [
      "Don’t dare to interrupt them",
      "Think it’s more important to give them some of your time; work can wait",
      "Listen, but with only half an ear",
      "Interrupt and explain that you are really busy at the moment"
    ]
  },
]
const App: React.FC = () => {
  const [assessments, setAssessments] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchAssessments = async () => {
      const data = await getAssessments()
      setAssessments(data)
    }
    fetchAssessments()

  }, [])

  return (
    <div id='App'>

      <div id='Header'>
        <AppHeader />
      </div>
      <div id='Aside'>

        {/* <QuestionsListing questions={questions} headingName='Questions' /> */}
        <Assessment />
      </div>
      <div id='Main'>
        {/* <TestSection /> */}
        <AssessmentDescription />
        {/* <Results /> */}
      </div>



    </div>
  )
}

export default App

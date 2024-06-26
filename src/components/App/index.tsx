import './App.css'
import React from 'react'

import AppHeader from '../AppHeader'
import QuestionsListing from '../QuestionsListing'
import TestSection from '../TestSection'

const App: React.FC = () => {

  const questions = [
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
    {
      text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      isAnswered: false,
      selectedOption: -1,
      options: [
        "Look at your watch every two minutes",
        "Bubble with inner anger, but keep quiet",
        "Explain to other equally impatient people in the room that the doctor is always running late",
        "Complain in a loud voice, while tapping your foot impatiently"
      ]

    },
    {
      text: "You are taking part in a guided tour of a museum. You:",
      isAnswered: true,
      selectedOption: -1,
      options: [
        "Are a bit too far towards the back so don’t really hear what the guide is saying",
        "Follow the group without question",
        "Make sure that everyone is able to hear properly",
        "Are right up the front, adding your own comments in a loud voice"
      ]
    },
    {
      text: "During dinner parties at your home, you have a hard time with people who:",
      isAnswered: false,
      selectedOption: -1,
      options: [
        "Ask you to tell a story in front of everyone else",
        "Talk privately between themselves",
        "Hang around you all evening",
        "Always drag the conversation back to themselves"
      ]
    },
    {
      text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
      isAnswered: false,
      selectedOption: -1,
      options: [
        "Don’t dare contradict them",
        "Think that they are obviously right",
        "Defend your own point of view, tooth and nail",
        "Continuously interrupt your colleague"
      ]
    },
    {
      text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      isAnswered: false,
      selectedOption: -1,
      options: [
        "Look at your watch every two minutes",
        "Bubble with inner anger, but keep quiet",
        "Explain to other equally impatient people in the room that the doctor is always running late",
        "Complain in a loud voice, while tapping your foot impatiently"
      ]
    },
    {
      text: "You are taking part in a guided tour of a museum. You:",
      isAnswered: true,
      selectedOption: -1,
      options: [
        "Are a bit too far towards the back so don’t really hear what the guide is saying",
        "Follow the group without question",
        "Make sure that everyone is able to hear properly",
        "Are right up the front, adding your own comments in a loud voice"
      ]
    },
    {
      text: "During dinner parties at your home, you have a hard time with people who:",
      isAnswered: false,
      selectedOption: -1,
      options: [
        "Ask you to tell a story in front of everyone else",
        "Talk privately between themselves",
        "Hang around you all evening",
        "Always drag the conversation back to themselves"
      ]
    },
    {
      text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
      isAnswered: false,
      selectedOption: -1,
      options: [
        "Don’t dare contradict them",
        "Think that they are obviously right",
        "Defend your own point of view, tooth and nail",
        "Continuously interrupt your colleague"
      ]
    }
  ]

  return (
    <div id='App'>

      <div id='AppHeader'>
        <AppHeader />
      </div>
      <div id='QuestionList'>

        <QuestionsListing questions={questions} headingName='Questions' />
      </div>
      <div id='TestSection'>
        <TestSection />
      </div>



    </div>
  )
}

export default App

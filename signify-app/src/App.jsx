import { useState } from 'react'
import './App.css'
import PracticeButton from "./PracticeButton.jsx"
import LearnButton from './LearnButton.jsx'
import TranslateButton from './TranslateButton.jsx'
import SignifyLogo from './assets/logo.png';
import Cam from './Cam.jsx'

function App() {

  return (
    <>
      <img src={SignifyLogo} alt="Logo" />
      <h1>Signify</h1>
      <div className="card text-3xl font-bold underline">
        <Cam></Cam>
        <LearnButton></LearnButton>
        <PracticeButton></PracticeButton>
        <TranslateButton></TranslateButton>
      </div>
    </>
  )
}

export default App

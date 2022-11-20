import { useState } from 'react'
import './index.css'
import questions from './data'
import Question from './Question'

function App() {
  return (
    <section className="container">
      <div className="title">
        <h3>questions and answers about login</h3>
      </div>
      <div className="questions-div">       
        {questions.map((ques)=>{
          return <Question key={ques.id} {...ques}/>
        })}
      </div>

    </section>
  )
}

export default App

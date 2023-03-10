import React from 'react'
import ReactDOM from 'react-dom'
import './Componentes/Header'
import Header from './Componentes/Header'
import Content from './Componentes/Content'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header/>
      <p>
        Hello world again
        {part1} {exercises1}
      </p>
      <p>
        <Content/>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
/* This header and total are for all exercises*/
const Header = ({course}) => <h2>{course}</h2> 
const Total = ({coursesInfo}) => {
  let sum = 0
  coursesInfo.forEach(coursesInfo => 
    {sum = sum + (coursesInfo.exercises)
  });
    return <p>Total number of exercises: {sum}</p>
  }

/* ========================= Excercise 1.1 ================= */
const Content1 = ({coursesInfo}) => {
  const array = coursesInfo.map ((coursesInfo) => <li key={coursesInfo.partNumber}> {coursesInfo.title}, number of exercises: {coursesInfo.exercises} </li>)
  return (
    <>
    <h3>Content for exercise 1.1 and 1.4</h3>
    <ul>
      {array}
    </ul>
    </>
  )
}
/* ========================= Excercise 1.2 ================= */
const Part = ({coursesInfo}) => {
  
 return (
  <>
    <li > The course {coursesInfo.title} has {coursesInfo.exercises} number of excercises</li>
  </>
 )
}

const Content2 = ({coursesInfo}) => {
  
    return (
    <>
    <h3>Content for exercise 1.2</h3>
    <ul>
      <Part coursesInfo={coursesInfo[0]}/>
      <Part coursesInfo={coursesInfo[1]}/>
      <Part coursesInfo={coursesInfo[2]}/>
    </ul>
    </>
  )
}
/* ========================= Excercise 1.3 ================= */
const Part2 = ({name, exercises}) => {
  return (
    <>
      <li > The course {name} has {exercises} number of excercises</li>
    </>
  )
  }
  
  const Content3 = ({part1, part2, part3}) => {
      return (
      <>
      <h3>Content for exercise 1.3</h3>
      <ul>
        <Part2 name={part1.name} exercises={part1.exer}/>
        <Part2 name={part2.name} exercises={part2.exer}/>
        <Part2 name={part3.name} exercises={part3.exer}/>
      </ul>
      </>
    )
  }

/* ======================= Exercise 1.5 ====================== */

const Content4 = ({coursesInfo}) => {
  const array2 = coursesInfo.parts.map ((individualCourse) => <li key={individualCourse.partNumber}> {individualCourse.title}, number of exercises: {individualCourse.exercises} </li>)
  return (
    <>
      <ul>
        {array2}
      </ul>
    </>
  )
}
const Total2 = ({coursesInfo}) => {
  let parts = coursesInfo.parts
  // const sum = coursesInfo.parts.reduce((total, part) => total + part.exer, 0);
  const sum = parts.reduce((total, part) => total + part.exercises, 0);
    return <p>Total number of exercises: {sum} </p>
  }

const MyButton = () => {
  return (
    <>
    <button onClick={() => alert('You clicked me oneliner!')}>
      Click me!
    </button>
    </>
  )
  }
  
  const Display = (props) => {
    return (
      <div>{props.counter}</div>
      )
  }

  const Button = (props) => <button onClick={props.onClick}>{props.text} </button>

/* APPLICATION */
import { useState } from "react";

const App = () => {
  const course = 'Half Stack application development'
  /* ========================= const for Excercises 1.1 and 1.2 ================= */
  const coursesInfo = [
    {partNumber: 1, title: 'Fundamentals of React', exercises: 10},
    {partNumber: 2, title: 'Using props to pass data', exercises: 7},
    {partNumber: 3, title: 'State of a component', exercises: 14},
  ]
  /* ========================= const for Excercises 1.3 ================= */
  const part1 = {
    name: 'Fundamentals of React',
    exer: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exer: 7
  }
  const part3 = {
    name: 'State of a component',
    exer: 14
  }
/* ========================= const for Excercises 1.5 ================= */
  const generalCourse = {
    name: 'Half Stack application development',
    parts: [
      {partNumber: 1, title: 'Fundamentals of React', exercises: 10},
      {partNumber: 2, title: 'Using props to pass data', exercises: 7},
      {partNumber: 3, title: 'State of a component', exercises: 14},
    ]
  }
  
 /* const [counter, setCounter] = useState(0)
  setTimeout( () => setCounter(counter + 1), 1000) */
  const [counter2, setCounter2] = useState(0)
  
  console.log('rendering with counter value', counter2)
  const increaseByOne = () => {
    console.log('increasing value, value before', counter2)
    setCounter2(counter2 + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing value, value before', counter2)  
    setCounter2(counter2 - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter2)  
    setCounter2(0)
  }
  

  return (
    <div>
      <MyButton />
      <div>{counter2}</div>
      <div>
        <Display counter={counter2}/>
      <button onClick={increaseByOne}>PLUS +</button>
      <button onClick={decreaseByOne}>MINUS -</button>
      <button onClick={setToZero}>ZERO</button>
      <Button onClick={increaseByOne} text = 'plus'/>
      <Button onClick={setToZero} text = 'zero'/>
      <Button onClick={decreaseByOne} text = 'minus'/>
      </div>
      {/* <h1>the counter value is: {counter}</h1> <--> */}
      <h1>Exercise 1.1 and 1.4 {'('} Already used arrays in the first exercise {')'}</h1>
      <Header course={course} />
      <Content1 coursesInfo={coursesInfo} />
      <Total coursesInfo={coursesInfo} />

      <h1>Exercise 1.2 and 1.4 {'('} Already used arrays in the first exercise {')'}</h1>
      <Header course={course} />
      <Content2 coursesInfo={coursesInfo} />
      <Total coursesInfo={coursesInfo} />

      <h1>Exercise 1.3</h1>
      <Header course={course} />
      <Content3 part1={part1} part2={part2} part3={part3} />
      <Total coursesInfo={coursesInfo} />

      <h1>Exercise 1.5</h1>
      <Header course={generalCourse.name} />
      <Content4 coursesInfo={generalCourse} />
      <Total2 coursesInfo={generalCourse} />
    </div>
  )
}




export default App

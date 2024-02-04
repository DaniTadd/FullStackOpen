
const Header = ({course}) => <h1>{course}</h1>

const Content1 = ({coursesInfo}) => {
  const array = coursesInfo.map ((coursesInfo) => <li key={coursesInfo.partNumber}> {coursesInfo.title}, number of exercises: {coursesInfo.exercises} </li>)
  return (
    <>
    <h2>Content for exercise 1.1</h2>
    <ul>
      {array}
    </ul>
    </>
  )
}
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
    <h2>Content for exercise 1.2</h2>
    <ul>
      <Part coursesInfo={coursesInfo[0]}/>
      <Part coursesInfo={coursesInfo[1]}/>
      <Part coursesInfo={coursesInfo[2]}/>
    </ul>
    </>
  )
}

const Total = ({coursesInfo}) => {
  let sum = 0
  coursesInfo.forEach(coursesInfo => 
    {sum = sum + (coursesInfo.exercises)
  });
    return <p>Total number of exercises: {sum}</p>
  }


const App = () => {
  const course = 'Half Stack application development'
  const coursesInfo = [
    {partNumber: 1, title: 'Fundamentals of React', exercises: 10},
    {partNumber: 2, title: 'Using props to pass data', exercises: 7},
    {partNumber: 3, title: 'State of a component', exercises: 14},
  ]
  return (
    <div>
      <h1>Exercise 1.1</h1>
      <Header course = {course}/>
      <Content1 coursesInfo = {coursesInfo}/>
      <Total coursesInfo = {coursesInfo}/>

      <h2>Exercise 1.2</h2>
      <Header course = {course}/>
      <Content2 coursesInfo = {coursesInfo}/>
      <Total coursesInfo = {coursesInfo}/>
    </div>
  )
}

export default App

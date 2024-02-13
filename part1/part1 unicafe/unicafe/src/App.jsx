import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleclick}>
    {props.text}
  </button>
  )

const Statistics = ({data}) => {
  console.log({data})
  const total = data
  const count = total.reduce((previous, next) => previous + next, 0)
  const averageScore = (data[0] - data[2])/count
  const positiveFeedbak = parseFloat((data[0]/count)*100).toFixed(2) + "%"
  if (count > 0) {
  return (
  <>
  <h2>Statistics</h2>
    <table>
      <tbody>
        <StatisticLine text='Good' count={data[0]} />
        <StatisticLine text='Neutral' count={data[1]} />
        <StatisticLine text='Bad' count={data[2]} />
        <StatisticLine text='All' count={count} />
        <StatisticLine text='Average' count={averageScore} />
        <StatisticLine text='Positive' count={positiveFeedbak}/>
      </tbody>
    </table>
  </>
  ) }
  return (
  <>
  <p>No feedback given.</p>
  </>
  )
}

const StatisticLine = (props) => (
  
  
  <tr><td>{props.text}: </td><td>{props.count}</td></tr>
  
  )


const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [total, setTotal] = useState(0)
const stats = [good, neutral, bad]
const handleGood = () => {
  setGood(good + 1)
  setTotal(total+1)
}

const handleNeutral = () => {
  setNeutral(neutral + 1)
  setTotal(total+1)
}

const handleBad = () => {
  setBad(bad + 1)
  setTotal(total+1)
}
  return (
    <>
      <h1>Customer feedback.</h1>
      <p>Your feedback is important to us.</p>
      <Button handleclick={handleGood} text={'Good'} />
      <Button handleclick={handleNeutral} text={'Neutral'} />
      <Button handleclick={handleBad} text={'Bad'} />
      <Statistics data={stats} />
    </>
  )
}

export default App

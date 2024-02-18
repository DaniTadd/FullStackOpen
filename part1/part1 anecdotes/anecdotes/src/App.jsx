import { useState } from "react"

const VoteButton = ({handleClick}) => {
  
  return (
  <>
    <button onClick={handleClick}> Vote </button>
  
  </>
  )
}

const NextButton = (props) => {

  return (
  <>
    <button onClick={props.handleClick}>Next anecdote</button>
  
  </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?’ Improve the code and then document it to make it even clearer.',
    'It\'s OK to figure out murder mysteries, but you shouldn\'t need to figure out code. You should be able to read it.',
    'An organization that treats its programmers as morons will soon have programmers that are willing and able to act like morons only.', 'Design and programming are human activities; forget that and all is lost.',
    'Before software can be reusable it first has to be usable.',
    'The price of reliability is the pursuit of the utmost simplicity. It is a price which the very rich may find hard to pay.',
    'There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.',
    'You cannot teach beginners top-down programming, because they don\'t know which end is up.',
    'The key to performance is elegance, not battalions of special cases.',
    'Inside every large program, there is a small program trying to get out.','Why do we never have time to do it right, but always have time to do it over?.','The goal of Computer Science is to build something that will last at least until we\'ve finished building it.', 'Better train people and risk they leave - than do nothing and risk they stay.'
  ]

  const randomSelect = () => parseInt(anecdotes.length*Math.random())
  
  const [selected, setSelected] = useState(randomSelect())
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const [maxVoted, setMaxVoted] = useState(selected)
  
  const handleVotes = () => {
    const newVote = [...votes]
    newVote[selected] +=1
    setVotes(newVote)

    if (newVote[selected] > votes[maxVoted]) {
      setMaxVoted(selected);
    }
  }


  
  return (
    <>
    <h1>Anecdote of the day</h1>
    <q>{anecdotes[selected]}</q>
    <p>Has {votes[selected]} votes.</p>
    <VoteButton handleClick={() => handleVotes()}/>
    <NextButton handleClick={() => setSelected(randomSelect)} />
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[maxVoted]} </p>
    <p>Has {votes[maxVoted]} votes</p>


    </>
  )
}

export default App
// <MostVoted  maxVoted={() => handleMax(phrasesAndVotes, votes)}/>
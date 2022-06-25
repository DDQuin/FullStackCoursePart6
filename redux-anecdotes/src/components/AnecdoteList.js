import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
        <div>
          {anecdote.content}
        </div>
        <div>
           has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
   </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesSorted = [...anecdotes].sort((a, b) => b.votes - a.votes)
  const filter = useSelector(state => state.filter )
  let anecdotesFiltered = [...anecdotesSorted]
  if (filter.length > 0) {
    anecdotesFiltered = anecdotesSorted.filter(anecdote => anecdote.content.toLowerCase().includes(filter[0].toLowerCase()))
  }

  const handleVote = (anecdote) => {
    console.log(anecdote)
    dispatch(voteAnecdote(anecdote.id, anecdote))
    dispatch(setNotification(`You have voted for ${anecdote.content}`, 5))

  }

  return(
    <>
    {anecdotesFiltered.map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote)}/>
      )}
    </>
  )
}

export default AnecdoteList
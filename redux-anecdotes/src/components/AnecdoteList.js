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

  const handleVote = (id, title) => {
    dispatch(voteAnecdote(id))
    dispatch(removeNotification())
    dispatch(setNotification(`You have voted for ${title}`))
    setTimeout(() => dispatch(removeNotification()), 5000)

  }

  return(
    <>
    {anecdotesSorted.map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote.id, anecdote.content)}/>
      )}
    </>
  )
}

export default AnecdoteList
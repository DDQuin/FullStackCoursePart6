import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

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
  const anecdotesSorted = useSelector(state => state.sort((a, b) => b.votes - a.votes))

  return(
    <>
    {anecdotesSorted.map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => dispatch(voteAnecdote(anecdote.id))}/>
      )}
    </>
  )
}

export default AnecdoteList
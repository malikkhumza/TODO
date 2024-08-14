import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'


function App() {

  return (
    <>
  <h1
  className='text-3xl underline '
  >TODO APP</h1>

      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App

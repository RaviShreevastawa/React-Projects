import AddTodo from "./components/AddTodo"
import Todos from "./components/Todo"

function App() {

  return (
    <>
       <h2 className="bg-yellow-400 shadow-md hover:bg-yellow-600 p-4 m-20 mt-5 shadow-yellow-200">Hello world</h2>
       <AddTodo/>
       <Todos/>
    </>
  )
}

export default App

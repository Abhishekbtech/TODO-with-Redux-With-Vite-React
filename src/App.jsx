import { Provider } from 'react-redux'
import './App.css'
import {store} from './Store/store'
import AddTodo from './Compenent/AddTodo'
import Todo from './Compenent/Todo'

function App() {

  return (
    // Wrap the application with the Redux store provider
    <Provider store={store}>
      <h1 className='text-2xl'>Todo With Redux ToolKit</h1>
      <AddTodo/>
      <Todo/>
    </Provider>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss'
import TaskManager from "./pages/taskManager/taskManagerPage"

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<TaskManager/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

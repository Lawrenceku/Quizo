import { 
  QuizContainer,
  SignIn,
  SignUp
 } from "./utils/index"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizContainer/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

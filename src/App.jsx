import { 
  QuizContainer,
  SignIn,
  SignUp,
  LandingPage,
  QuizFeed
 } from "./utils/index"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/quiz" element={<QuizContainer/>} />
          <Route path="/quizfeed" element={<QuizFeed/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

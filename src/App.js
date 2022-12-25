import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import SuccessSignUp from './components/SuccessSignUp'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/SuccessSignUp" element={<SuccessSignUp />} />
          <Route path="/puzzle" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

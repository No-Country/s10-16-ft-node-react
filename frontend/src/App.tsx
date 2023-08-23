import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailPage from './Pages/EmailPage';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="sendEmail" element={<EmailPage />} />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

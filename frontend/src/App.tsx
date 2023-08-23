import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailPage from './Pages/EmailPage';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { LayoutAuth } from './Layout/LayoutAuth';
import { RegisterChoice } from './Pages/Register/RegisterChoice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="registerChoice" element={<RegisterChoice />} />
        </Route>
        <Route path="sendEmail" element={<EmailPage />} />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

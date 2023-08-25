import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailPage from './pages/EmailPage';
import { Login } from './pages/Login/Login.tsx';
import { LayoutAuth } from './Layout/LayoutAuth';
import { Register } from './pages/Register/Register';
import { RegisterChoice } from './pages/Register/RegisterChoice';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="auth/" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="registerChoice" element={<RegisterChoice />} />
        </Route>
        <Route path="sendEmail" element={<EmailPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

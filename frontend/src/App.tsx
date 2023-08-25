import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailPage from './Pages/EmailPage.tsx';
import { Login } from './Pages/Login/Login.tsx';
import { LayoutAuth } from './Layout/LayoutAuth';
import { Register } from './Pages/Register/Register.tsx';
import { RegisterChoice } from './Pages/Register/RegisterChoice.tsx';
import { HomePage } from './Pages/HomePage.tsx';
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

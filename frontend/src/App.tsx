import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailPage from './Views/EmailPage.tsx';
import { Login } from './Views/Login/Login.tsx';
import { LayoutAuth } from './Layout/LayoutAuth';
import { Register } from './Views/Register/Register.tsx';
import { RegisterChoice } from './Views/Register/RegisterChoice.tsx';
import { HomePage } from './Views/HomePage.tsx';
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

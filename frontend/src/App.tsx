import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, EmailPage, DetailPage } from './pages';
import { LayoutAuth } from './Layout/LayoutAuth';
import { Navbar } from './components/layout';
import { Login, Register, RegisterChoice } from './auth';

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
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

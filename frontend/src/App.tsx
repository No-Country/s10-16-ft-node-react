import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, EmailPage, DetailPage } from './Pages';
import { LayoutAuth } from './Layout/LayoutAuth';
import { Footer, Navbar, PopUpDonation } from './components/layout';
import { Login, Register, RegisterChoice } from './auth';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="auth/" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="registerChoice" element={<RegisterChoice />} />
        </Route>
        <Route path="sendEmail" element={<EmailPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="donation" element={<PopUpDonation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

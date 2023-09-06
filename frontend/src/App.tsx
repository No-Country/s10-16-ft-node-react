import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, EmailPage, DetailPage, UserProfile,  InProcessPage } from './pages';
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
        <Route path="inProcess" element={<InProcessPage  />} />
        <Route path="sendEmail" element={<EmailPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="donation" element={<PopUpDonation />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;

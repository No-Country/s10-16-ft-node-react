import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { HomePage, EmailPage, DetailPage, UserProfile, CreateProject, PaymentForm, InProcessPage, LoadingProjectPage,  ReadyProyectPage, ReadyDonationPage } from './pages';
import { LayoutAuth } from './Layout/LayoutAuth';
import { Footer, Navbar, PopUpDonation } from './components/layout';
import { Login, Register, RegisterChoice } from './auth';


function App() {
  function LayoutWithNavbarAndFooter() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <BrowserRouter>
       
      <Routes>
        <Route element={<LayoutWithNavbarAndFooter />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="createProject" element={<CreateProject />} />
          <Route path="user-profile" element={<UserProfile />} />
        </Route>
        <Route path="auth/" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="registerChoice" element={<RegisterChoice />} />
          
        </Route>
        <Route path="loadingProject" element={<LoadingProjectPage />} />
        <Route path="readyDonation" element={<ReadyDonationPage/>} />
        <Route path="ready" element={<ReadyProyectPage  />} />
        <Route path="inProcess" element={<InProcessPage  />} />
        <Route path="sendEmail" element={<EmailPage />} />
        <Route path="donation" element={<PopUpDonation />} />
      </Routes>  
    </BrowserRouter>
  );
}


export default App;

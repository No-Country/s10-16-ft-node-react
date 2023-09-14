import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { HomePage, EmailPage, DetailPage, UserProfile, CreateProject, InProcessPage, LoadingProjectPage,  ReadyProyectPage, ReadyDonationPage } from './pages';
import { LayoutAuth } from './Layout/LayoutAuth';
import { Footer, Navbar } from './components/layout';
import { Login, Register, RegisterChoice } from './auth';
import { TransactionLoadingPage } from './pages/TransactionLoadingPage';


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
          <Route path="createProject" element={<CreateProject />} />
          <Route path="user-profile" element={<UserProfile />} />
        </Route>
        <Route path="auth/" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="registerChoice" element={<RegisterChoice />} />
        </Route>
        <Route path="loadingTransaction" element={<TransactionLoadingPage />} />
        <Route path="loadingProject/:id" element={<LoadingProjectPage />} />
        <Route path="readyDonation" element={<ReadyDonationPage/>} />
        <Route path="ready/:id" element={<ReadyProyectPage  />} />
        <Route path="inProcess" element={<InProcessPage  />} />
        <Route path="sendEmail" element={<EmailPage />} />
      </Routes>  
    </BrowserRouter>
  );
}


export default App;

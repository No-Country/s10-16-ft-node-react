import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailPage from './pages/EmailPage';
import { Navbar } from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'/>
        <Route path='sendEmail' element={<EmailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

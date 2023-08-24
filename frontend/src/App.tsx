import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailPage from './pages/EmailPage';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='sendEmail' element={<EmailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

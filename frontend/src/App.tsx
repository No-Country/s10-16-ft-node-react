import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailPage from './Pages/EmailPage';
import { HomePage } from './Pages/HomePage';
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailPage from './Pages/EmailPage';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='sendEmail' element={<EmailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

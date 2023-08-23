import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailPage from './pages/EmailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route path='sendEmail' element={<EmailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

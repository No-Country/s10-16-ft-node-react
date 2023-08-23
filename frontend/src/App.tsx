import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/nav" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

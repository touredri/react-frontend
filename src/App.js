import Greeting from './components/greeting'
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;

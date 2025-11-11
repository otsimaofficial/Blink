import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from '../pages/Home.jsx'
import Dashboard from '../pages/Dashboard/Dashboard.jsx'
import DashboardHistory from '../pages/Dashboard/DashboardHistory.jsx';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/history' element={<DashboardHistory />} />
    </Routes>

  );
}

export default App;

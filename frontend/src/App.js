import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/setAlarm" element={<p/>} />
          <Route path="/secondomer" element={<p/>} />
          <Route path="/timer" element={<p />} />
      </Routes>
    </>
  );
}

export default App;

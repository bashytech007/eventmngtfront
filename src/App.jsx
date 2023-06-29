

import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SignIn from './features/signin/SignIn'
import SignUp from './features/signup/SignUp'
import Events from './pages/events'
import Navbar from './components/Navbar'
import AuthGuard from './middlewares/AuthGuard'
import CreateEvent from './pages/events/create'
function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/events/create" element={<CreateEvent/>} />
      </Routes>
    </div>
  );
}

export default App

import logo from '../src/components/images/Esdlogo.png';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm';
import Home from "./components/home"
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/angelprofile';
import ChangePass from './components/changepassword';
import Temp from './components/temp'
import UpdateProfile from './components/updateprofile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return(
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" className="w-25 h-25 "/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link " aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link" href="/">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link"  tabIndex="-1" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/angelprofile" className="nav-link"  tabIndex="-1" >Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <Routes>
        <Route path="/angelprofile" element={<Profile />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
    </Routes>
  </Router>
  )



  // old version

  // return (
  //   <div className="App">
  //     <Header/>
  //     {/* <RegistrationForm/>  */}
  //     {/* <Temp/> */}
  //     <Signup/>
  //     {/* <Login/> */}
  //     {/* <ChangePass/> */}
  //     {/* <Profile/> */}
  //     {/* <UpdateProfile/> */}
  //   </div>
  // );
}

export default App;



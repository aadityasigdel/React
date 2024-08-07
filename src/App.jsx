import { BrowserRouter ,Route,Routes } from "react-router-dom"
import Landing from "./Landing"
import SignIn from "./SingIn"
import SignUp from "./SignUp"
import Home from "./Home"
import Destination from "./Destination"
import Travel from "./Travel"
import Hotel from "./Hotel"
import Homedetail from "./Homedetail"
import TravelDetails from "./TravelDetails"
import Profile from "./Profile"
import Admin from "./AdminDashBoard/Admin"

function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/"element={<Landing />}/>
            <Route path="/signIn"element={<SignIn />}/>
            <Route path ="/signUp" element={<SignUp />}/>
            <Route path ="/home" element={<Home />}/>
            <Route path="/destination" element ={<Destination/>}/>
            <Route path ="/hotel" element={<Hotel />}/>
            <Route path ="/travel" element={<Travel />}/>
            <Route path="/Hotels/:id" element={<Homedetail />} />
            <Route path="/travels/:id" element={<TravelDetails />} />
            <Route path="/profile" element={<Profile />}/>
            <Route path='/admin/*' element={<Admin/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

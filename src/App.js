import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { useCookies } from "react-cookie";
import Blogs from "./Components/Blogs";
import About from "./Pages/About";
import Currblog from "./Components/Currblog";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Pagenotfound from "./Pages/Pagenotfound";

function App() {
  const [cookie] = useCookies(["auth_Token"]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route
            path="profile"
            element={!cookie.auth_Token ? <Login /> : <Profile />}
          />
          <Route path={`/blogs/:urltitle`} element={<Currblog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

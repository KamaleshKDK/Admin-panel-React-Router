import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Userlist from './Userlist';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Productlist from './Productlist';
import Userform from './Userform';
import Productform from './Productform';


function App() {
  return (
    <BrowserRouter>

      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/user" element={<Userlist />}></Route>
                <Route path="/userform" element={<Userform />}></Route>
                <Route path="/product" element={<Productlist />}></Route>
                <Route path="/productform" element={<Productform />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

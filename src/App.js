import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuanityPicker from './components/quanityPicker';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <div className="container-fluid">
        <h1>Online Store</h1>
        <QuanityPicker></QuanityPicker>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

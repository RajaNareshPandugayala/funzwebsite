import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Elements/ScrollToTop/scroll_top";

import "./App.css";

import Header from "./Elements/Header/header";
import Footer from "./Elements/Footer/footer";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/funzwebsite">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

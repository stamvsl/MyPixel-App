import Feed from './components/feed';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form"
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/form" element={<Form />} />
        <Route path="/header" element={<Header />} />
       
      </Routes>
    </BrowserRouter>
    // <div>

    //    <Feed />
    // </div>
  );
}

export default App;



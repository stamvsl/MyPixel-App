import Feed from './components/feed';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/form" element={<Form />} />
       
      </Routes>
    </BrowserRouter>
    // <div>

    //    <Feed />
    // </div>
  );
}

export default App;



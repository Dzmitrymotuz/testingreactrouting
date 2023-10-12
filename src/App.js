import Blog from "./components/Blog";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom"
import Page from "./components/Page";


function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Page/>}/>
          <Route path="/blog" element={<Blog/>}/>
          
        </Routes>
      </div>
      
  );
}

export default App;

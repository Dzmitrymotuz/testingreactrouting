import Blog from "./components/Blog";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom"
import Page from "./components/Page";
import Create from "./components/Create/Create"
import PostDetails from "./components/PostDetails/PostDetails";


function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Blog/>}/>
          <Route path="/page" element={<Page/>}/>
          <Route path="/blog/new" element={<Create/>}/>
          <Route path="/blog/:id" element={<PostDetails/>}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
      </div>
      
  );
}

export default App;

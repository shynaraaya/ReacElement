import Posts from './pages/posts/posts'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PostDetail from './pages/postdetail/postDetail';

export default function App(this: any) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/postdetail/:id" element={<PostDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

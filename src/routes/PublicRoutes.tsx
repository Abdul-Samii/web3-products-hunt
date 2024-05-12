import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';

const PublicRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Category />} />
      <Route path='/gaming' element={<Category />} />
      <Route path='/infrastructure' element={<Category />} />
      <Route path='/recent-projects' element={<Category />} />
      <Route path='/explore' element={<Category />} />
    </Routes>
  )
}
export default PublicRoutes;

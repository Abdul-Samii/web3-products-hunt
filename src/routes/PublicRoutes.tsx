import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Auth from '../pages/auth';

const PublicRoutes = () => {
  return (

    <Routes>
      <Route path='/web3-products-hunt' element={<Home />} />
      <Route path='/web3-products-hunt/trending' element={<Category />} />
      <Route path='/web3-products-hunt/gaming' element={<Category />} />
      <Route path='/web3-products-hunt/infrastructure' element={<Category />} />
      <Route path='/web3-products-hunt/recent-projects' element={<Category />} />
      <Route path='/web3-products-hunt/explore' element={<Category />} />
      <Route path='/web3-products-hunt/auth' element={<Auth />} />
    </Routes>
  )
}
export default PublicRoutes;

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Auth from '../pages/auth';
import ProfileDetail from '../pages/ProfileDetail';
import NewProjectForm from '../component/addform/NewProjectForm';

const PublicRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Category />} />
      <Route path='/gaming' element={<Category />} />
      <Route path='/infrastructure' element={<Category />} />
      <Route path='/recent-projects' element={<Category />} />
      <Route path='/explore' element={<Category />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile-details' element={<ProfileDetail />} />
      <Route path='/add-project' element={<NewProjectForm />} />
    </Routes>
  )
}
export default PublicRoutes;

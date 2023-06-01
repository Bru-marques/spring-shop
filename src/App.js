import { Route, Routes } from 'react-router-dom';
import Home from 'routes/Home/home.component';
import NavigationBar from 'routes/navigation-bar/navigation-bar.component';
import SignIn from 'routes/SignIn/sign-in.component.tsx';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<NavigationBar/>}>
      <Route index element={ <Home /> } />
      <Route path='sign-in' element={ <SignIn /> } />
    </Route>
   </Routes>
  );
}

export default App;

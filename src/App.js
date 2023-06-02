import { Route, Routes } from 'react-router-dom';
import Authentication from 'routes/authentication/authentication.component';
import Home from 'routes/home/home.component';
import NavigationBar from 'routes/navigation-bar/navigation-bar.component';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={ <NavigationBar /> }>
      <Route index element={ <Home /> } />
      <Route path='auth' element={<Authentication />}/>
    </Route>
   </Routes>
  );
}

export default App;

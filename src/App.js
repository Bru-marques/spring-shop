import { Route, Routes } from 'react-router-dom';
import Authentication from 'routes/authentication/authentication.component';
import Home from 'routes/home/home.component';
import NavigationBar from 'routes/navigation-bar/navigation-bar.component';
import Shop from 'routes/shop/shop.component';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={ <NavigationBar /> }>
      <Route index element={ <Home /> } />
      <Route path='auth' element={<Authentication />}/>
      <Route path='shop' element={<Shop/>} />
    </Route>
   </Routes>
  );
}

export default App;

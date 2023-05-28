import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/home.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<NavigationBar/>}>
      <Route index element={ <Home /> } />
    </Route>
   </Routes>
  );
}

export default App;

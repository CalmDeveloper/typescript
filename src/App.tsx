import React from 'react';
import {Route,Routes,Navigate} from 'react-router-dom'
import {MainLayout} from "./layouts";
import {CarDetailsPage, CarePage} from "./pages";


function App() {

  return (
    <Routes>
<Route path={'/'} element={<MainLayout/>}/>
      <Route index  element={<Navigate to={'cars'}/>}/>
      <Route  path={'cars'} element={<CarePage/>}>
          <Route  path={':id'} element={<CarDetailsPage/>}/>
          </Route>
    </Routes>
  );
}

export default App;

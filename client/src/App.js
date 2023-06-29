import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import {Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import {routes } from './routes/routes'
import ErrorComponents from './components/common/ErrorComponents';
import { Suspense } from 'react';
import SuspenceLoader from './components/common/SuspenceLoader';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />}></Route>

      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponents />} />
        <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponents />} />
      </Route>

      <Route path={routes.invalid.path} element={<routes.invalid.element />} />
    </Route>
  )
)

function App() {

  return (
    <Suspense fallback={<SuspenceLoader />}>
      <RouterProvider router={router} />
    </Suspense>
    // <div className="App">
    //   <Main />
      
    // </div>
  );
}

export default App;

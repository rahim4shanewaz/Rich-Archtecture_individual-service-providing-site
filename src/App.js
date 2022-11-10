
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './routers/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='relative'>
        <ToastContainer />

      <RouterProvider router={router}>
    

      </RouterProvider>
     
    </div>
  );
}

export default App;

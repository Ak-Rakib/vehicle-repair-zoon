import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Roter/Routes/Routers';

function App() {
  return (
    <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout';
import WebRoutes from './components/WebRoutes';
import "./App.css";

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
       <Layout>
         <WebRoutes />
       </Layout>
     </BrowserRouter>

    </div>
  );
}
export default App;

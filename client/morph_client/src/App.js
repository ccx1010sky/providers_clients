import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/Layout';
import WebRoutes from './components/WebRoutes';


function App() {
  return (
    <div>

     <h1>Hello morph appointment</h1>
     <Router>
       <Layout>
         <WebRoutes />
       </Layout>
     </Router>

    </div>
  );
}

export default App;

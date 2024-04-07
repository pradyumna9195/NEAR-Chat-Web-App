import './App.css';
import {BrowserRouter,Router,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Route path='/' component={Homepage} exact />
      <Route path='/chats' component={ChatPage} />
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;

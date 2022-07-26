import './App.css';
import Header from './components/header';
import Main from './components/main';
import Fotter from './components/fotter';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Fotter />
    </div>
  );
}
export default App;
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Toolbar from './Components/Toolber/Toolbar';
import FullShowInfo from './Containers/FullShowInfo/FullShowInfo';
import Home from './Containers/Home/Home';

const App = () => {

  return (
    <>
      <div className="bg-light">
        <header className="bg-primary ">
          <Toolbar/>
        </header>
        <main className="container pt-5">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shows" element={<Home/>}>
              <Route path=":id" element={<FullShowInfo/>}/>
            </Route>
            <Route path="*" element={(<h1>Not found</h1>)}/>
          </Routes>
        </main>

      </div>
    </>
  );
};

export default App;
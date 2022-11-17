import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {

  let [page, setPage] = useState({
     name: "login",
  });

  let changePage = (page)=>{
    setPage({
      name: page
    })
  }

  let routes = ()=>{
    if(page.name==='login'){
      return <Login changePage={changePage}/>
    }else if (page.name === 'home'){
      return <Home changePage={changePage}/>
    }else if(page.name === 'product'){
      return <Product changePage={changePage} />
    }else{
      return <Login changePage={changePage} />
    }
  }


  return (
    <div className="App">
      {routes()}
    </div>
  );
}

export default App;

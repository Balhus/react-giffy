import React, { useEffect, useState } from 'react';
import './App.css';
import SearchResults from './pages/SearchResults/index';
import Detail from './pages/Detail/index'
import Home from './pages/Home/index'
import { Route } from 'wouter';

function App() {
  const [keyword, setKeyword] = useState('sword')

  return (
    <div className="App">
      <section className="App-content">
        {/* <button onClick={() => setKeyword('shield')}> Cambiar Keyword</button> */}
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={SearchResults} />
        <Route path='/gif/:id' component={Detail} />

      </section>
    </div>
  );
}

export default App;

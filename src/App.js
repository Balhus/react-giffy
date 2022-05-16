import React, { useEffect, useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import GifDetail from './components/GifDetail'
import { Link, Route } from 'wouter';

function App() {
  const [keyword, setKeyword] = useState('sword')

  return (
    <div className="App">
      <section className="App-content">
        {/* <button onClick={() => setKeyword('shield')}> Cambiar Keyword</button> */}
        <Link to='/gif/sword'>Gif de Espadas</Link>
        <Link to='/gif/shield'>Gif de escudos</Link>
        <Link to='/gif/panda'>Gif de Pandas</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        <Route path='/gif/:keyword/:id' component={GifDetail} />

      </section>
    </div>
  );
}

export default App;

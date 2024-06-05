import './App.css';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyGenres from './components/Generi';
import FilmRow from './components/FilmRow';
import AppFooter from './components/AppFooter';
import { useState } from 'react';

document.body.style.backgroundColor = "rgb(33, 37, 41)";

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <header>
        <NavigationBar onSearch={handleSearch} />
      </header>
      <main>
        <MyGenres />
        {searchQuery && (
          <FilmRow search={searchQuery} titolo={"Risultati di ricerca per: " + searchQuery}/>
        )}
        <FilmRow search="Harry%20Potter" titolo="Harry Potter"/>
        <FilmRow search="Indiana%20Jones" titolo="Indiana Jones Saga" />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;

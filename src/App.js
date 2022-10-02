import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const[searchField,setSearchField] = useState(''); // [value, setValue]
  const[monsters,setMonsters] = useState([]);
  const[filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=> setMonsters(users));
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

  },[monsters,searchField])

  const onSearchChange = (event)=>{
    // optimization only build this function once in react
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };  

  return (
      <div className="App">
        <h1 className='app-title'> Monsters Cantact Book
        </h1>
        <SearchBox 
          className = 'monster-seach-box'
          onChangeHandler = {onSearchChange} 
          placeholder = 'search monsters'/>
        <CardList monsters = {filteredMonsters} />
      </div>
  )
}
export default App;

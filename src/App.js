import { Component } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import './App.css';

class App extends Component {
    constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };


  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users)=>
      this.setState(
        ()=> {
          return { monsters:users }
        },
      )
    );
  }

  onSearchChange = (event)=>{
    // optimization only build this function once in react
    const searchField = event.target.value.toLowerCase();
    this.setState(()=> {return {searchField};
    })
  }  

  render(){

    const {monsters, searchField } = this.state;
    const {onSearchChange} = this;
    // optimize for anomenous fucntions
    const filteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchField);
    });

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
    );
  }
  
}

export default App;

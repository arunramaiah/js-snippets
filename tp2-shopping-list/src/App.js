import './App.css';
import { useState } from 'react';


function App() {
  const [item, setItem] = useState('');
  const [itemList] = useState([]);


  function addItem(e) {
    itemList.push(item);
    console.log("itemList");
    console.log(itemList);
    console.log("item " + item);
    setItem('');
  }

  return (
    <div className="App">
      <header className="App-header">
         <h2> Shopping List </h2>
      </header>
      <div className="form">
        <input
          className="input"
          onInput={e => setItem(e.target.value)}
          placeholder='Enter item'
          value={item}
        />
        <button 
          className="form"
          onClick={(e)=>addItem(e)}
        >
          Add 
        </button>
      </div>
      <div>
        <List value={itemList} />
      </div>
    </div>
  );
}

function List(props) {
   const items = props.value;
   const renderListItems = items.map((item) =>
    <ListItem key={item.toString()} value={item} />
   );

   return (
     <ul className="unordered-list">
       {renderListItems}
     </ul>
   )

}

function ListItem(props) {
  return <li className="list-style">{props.value}</li>
}


export default App;

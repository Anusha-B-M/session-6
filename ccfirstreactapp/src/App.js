import React from 'react';
import ReactDOM from 'react-dom';



function List(props){
const myList =props.myList;
const listItems=myList.map((myList,index)=>
  <li key={index}>
    {myList}
    </li>
);
return(
  <div>
    <h2>Rendering list in component</h2>
    <ul>{listItems}</ul>
  </div>
);
}
const myList=['Milk','Curd','Butter','Cheese','Ghee'];
ReactDOM.render(
  <>

  <List myList={myList}></List>
  </>,
  document.getElementById('root'));

export default List;


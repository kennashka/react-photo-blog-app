import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './styles/stylesheet.css'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//const task = ["take out trash", "shovel driveway","walk dog"];

// const element = React.createElement("ol",null,
//  React.createElement("li",null,"take out trash"),
//  React.createElement("li",null,"shovel driveway"),
//  React.createElement("li",null,"walk dog")
//  );

// const element = React.createElement("ol",null, 
// task.map((task, index)=> React.createElement("li", {key: index}, task))

// ); const element = <ol>
   // {task.map((tasks) => <li> tasks</li>)}
   // <li> {task[0]}</li> 
   // <li> {task[1]}</li> 
   // <li> {task[2]}</li> 
  //  </ol>


// const element = 
// <div>
// <h1> Task List</h1>
// <ol>
//     {task.map((tasks, index) => <li key={index}> tasks</li>)}
// </ol>
// </div>


// Classes of Components

// class List extends Component{
//     render(){ 
//         return (   <ol>
//         {this.props.tasks.map((task, index) => <li key={index}> {task}</li>)}
//     </ol>)

//     }
  
// }

// class Title extends Component{
//     render(){ 
//         return <h1> {this.props.title}</h1>
//     }

// }

// class Main extends Component{
//     render(){ 
//         return <div>
//             <Title title = {'toDos'}/>
//             <List tasks = {["hose the driveway", "finish laundry"]}/>
//             <List tasks = {["Mow the lawn", "walk the dog"]}/>
//         </div>
//     }

// }

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))


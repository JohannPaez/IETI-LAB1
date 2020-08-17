import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';
import {CardLab} from './CardLab'

class App extends React.Component {

  constructor(props) {
    super(props);
    const listaInicial = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
          {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];
    this.state = {todos: listaInicial, text: '', priority: 0, dueDate: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let Key = e.target.id;
    let value = e.target.value;
    this.setState({ [Key] : value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || this.state.priority == 0 || this.state.dueDate == null) {
      alert("Recuerde que debe llenar todos los campos y no puede repetir datos.")
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      todos: prevState.todos.concat(newItem),
      text: '',
      priority: 0,
      dueDate: null
    }));
  }

  render () {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           &lt;h1&gt;TODO React App&lt;/h1&gt;
          </p>
          <TodoList TodoList={this.state.todos}/>
          <CardLab 
            content = {
                <form>
                  Text: &nbsp;
                  <input
                    id = "text"
                    type = 'text'
                    onChange = {this.handleChange}
                    placeholder = 'Text'
                  />
                  <br /><br />
                  Priority: &nbsp;
                  <input
                    id = "priority"
                    type = 'number'
                    onChange = {this.handleChange}
                    placeholder = 'Priority'
                  />
                  <br /><br />
                  DueDate: &nbsp;
                  <input
                    id = "dueDate"
                    type = 'date'
                    onChange = {this.handleChange}
                    placeholder = 'DueDate'
                  />
                </form>
            }
          >
        </CardLab>
        <br />
        <button onClick = {this.handleSubmit}>
                    Add
                  </button>
        <br /><br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  } 
}

export default App;

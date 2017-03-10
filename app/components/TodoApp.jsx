var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      showCompleted:false,
      searchText: "",
      todos: [{
        id:uuid(),
        text: 'Walk the dog'
      },
      {
        id:uuid(),
        text: 'Clean the yard'
      }]
    };
  },
  handleTodo : function(text){
    this.setState({
        todos:[
          ...this.state.todos,
          {
            id:uuid(),
            text:text
          }
        ]
    });
  },
  handleSearch: function(showCompleted, searchText){

    this.setState({

      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()

    });
  },
  render : function(){
      var {todos} = this.state;
      return(
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <TodoForm onAddTodo={this.handleTodo}/>
        </div>
      )
  }
});
module.exports = TodoApp;

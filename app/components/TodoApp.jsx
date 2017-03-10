var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      showCompleted:false,
      searchText: "",
      todos: [{
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Clean the yard'
      }]
    };
  },
  handleTodo : function(text){
    alert("Text:" + text);
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

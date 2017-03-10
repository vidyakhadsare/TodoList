var React = require('react');


var TodoForm = React.createClass({

    getInitialState: function(){
      return {
        name:"vidya"};
    },
    onSubmitClick: function(e){
      e.preventDefault();
      var todoText = this.refs.name.value;
      this.props.onAddTodo(todoText);
    },
    render : function(){
      return(
        <div>
          <form onSubmit={this.onSubmitClick}>
          <input type="text" ref="name"/>
          <button className="button expanded">Add Todo</button>
          </form>
        </div>
      );
    }

});
module.exports = TodoForm;

import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
  }

  update(key) {
    return (e => this.setState({[key]: e.target.value}));
  }

  handleSubmit() {
    return (e => {
      e.preventDefault();
      const todo = Object.assign({}, {todo: this.state});
      this.props.createTodo(todo);
      this.setState({title: "", body: ""}); // reset form
    })
  }

  render () {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit()}>
        <label>
          Title
          <input
            onChange={this.update('title')}
            value={this.state.title}/>
        </label>
        <label>
          Body
          <input
            onChange={this.update('body')}
            value={this.state.body}/>
        </label>
        <button>Create Todo!</button>
      </form>
    )
  }
}

export default TodoForm;

import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {


    render() {
        const listItems = this.props.TodoList.map((todo, index) =>
            <Todo key  ={todo.toString() + index}
                text = {todo.text}
                priority = {todo.priority}
                dueDate = {todo.dueDate}>
            </Todo>            
        );
        return (
            listItems
        );
    }

}
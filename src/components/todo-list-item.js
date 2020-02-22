import React from 'react';
import './todo-list-item.css';

// можно вместо props написать {label} - это будет деструктуризация объекта props и в теле можно использовать переменную label
const TodoListItem = ({label, important = false}) => {	
	return (	
			<li className='list-group-item todo-list-item'>
				<span className=''>{label}</span>
				<button className="btn btn-outline-danger btn-sm ml-1">
					<i className="far fa-trash-alt"></i>
				</button>
				<button className="btn btn-outline-success btn-sm ml-1">
					<i className='fa fa-exclamation pl-1 pr-1'></i>
				</button>
			</li>
	

	);
};

export default TodoListItem;
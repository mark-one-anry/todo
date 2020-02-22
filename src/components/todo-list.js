import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({data}) => {
	const elements = data.map((item)=>{
		const {id, ...itemProps} = item; // Хитрая деструктуризация. Выносим из item в перепенную id, а всё оставшеееся - в объект itemProps
		// return (<li><TodoListItem label={item.label} important={item.important}/></li>); это более понятная следующая строка 
		// return (<li key={item.key} className='list-group-item'><TodoListItem {...itemProps}/></li>);
		return (<TodoListItem {...itemProps}/>);
	});
	return (
			
			
			<div id='todolist' className='mt-3'>
				<ul className='list-group todo-list'>
					{elements}
				</ul>
			</div>					
	);
};

export default TodoList;
import React from 'react';
import Title from './components/title';
import SearchBar from './components/SearchBar';
import TodoList from './components/todo-list';
import AddActivity from './components/AddActivity';

const App = () => { 
	const isLoggedIn = true;
	const loginBox = <span>Please login</span>; // React элемент, можно включить через фигурные скобки 	
	const todoData = [
		{label: 'Drink Coffee', important: false, key: 1},
		{label: 'Conquer the World', important: true, key: 2},
		{label: 'Say please', important: false, key: 3},
		{label: 'Drink Vodka', important: true, key: 4}
	];
	const pClass = {
		marginTop: '1em'
	};
	return (	
		<div className='container'>
			<div id='title'>
				<Title/>
			</div>
			<div id='search'>
				<SearchBar/>				
			</div>
			
			<TodoList/>
			
			<AddActivity/>
			
		</div>		
	);
};

export default App;
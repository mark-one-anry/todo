import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Создать JS объект, он гораздо легче чем стандартный
//const el = <h1>Hello World</h1>;		// этот JSX, WebPack запускает Babel, который этот JSX превращает в обычный js код 

// скобки в jsx если нужно несколько строк
/*
const el = (
	<div>
		<h1>My Todo List</h1>
		<input placeholder = "search"/>
		<ul>
			<li>Thing 01</li>
			<li>Thing 02</li>
		</ul>
	</div>
);
*/
// JSX - html с обязательным одним родиельским объектов
// для выражений JS нужно использовать {}
// Компоненты React - это функция, которая возвращает JSX. Компонент можно использовать в коде элемента как HTML тэг


// в JSX атрибуты должны быть camelCase 
// В JSX 2 атрибута переименованы
// class -> className
// for -> htmlFor 
ReactDOM.render(<App />, document.getElementById('root')); // Превратить виртуальный DOM реакт элемент в настоящий
import React from 'react';

const SearchBar = function() {
	const searchText = "Что ищем?";
	const searchStype = {
		fontSize: '20px'
	};
	
	return (		
		<div className='d-flex'>
			<input type='text' placeholder={searchText} className='form-control'></input>
			<div id='search-buttons' className='d-flex btn-group ml-1'>
				<button className="btn btn-info" id='btn-all'>All</button>
				<button className="btn btn-outline-secondary">Active</button>
				<button className="btn btn-outline-secondary">Done</button>					
			</div>
		</div>
		
	);
}

export default SearchBar;
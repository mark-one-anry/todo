import React from 'react';

const AddActivity = () =>{
	return (
		<div id = 'addgroup' class='mt-3'>
			<div class='d-flex'>
				<input type='text' placeholder='Что добавить' class='form-control'></input>
				<button class="btn btn-outline-secondary" >Add</button>
			</div>
		</div>
	);
};
export default AddActivity;
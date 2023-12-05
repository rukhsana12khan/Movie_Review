 import './movie_l.css'
 import Delete from './delete.js'
 import  { useState } from 'react';
 
  
function Action({onDelete,onlike,ondislike,vote}){

	return(
			<div className='act'>
				<div className='thum'>
	  				<img src='Like.svg' onClick={onlike} />
				</div>
				
				<div className='count'>{vote}</div>
				
				<div className='tdoun'>
					<img src='disLike.svg'onClick={ondislike}></img>
				</div>
				<Delete onDelete={onDelete}
				/>
			</div>
			
		);
	}	

export default Action;



"use client"
import  { useState } from 'react';
import Header from './header.js' ;
import Movei_l from './movie_l.js';
import Footer from './footer.js';
import Add_movie from './add_movie.js'
import {people} from './data.js';


export default  function Page(){
		const [item, setCount] = useState(people);
		const [like, setLike] = useState({});
		const [sortlike,setSort] = useState();

		const handleLike = (id) => {
			const updatevote = { ...like };

			if (updatevote[id] === undefined) {
			  updatevote[id] = 1;
			} else {
			  updatevote[id] += 1;
			}

			setLike(updatevote);
			};

		const handleDislike = (id) => {
			const updatevote = { ...like };

			if (updatevote[id] === undefined) {
			  updatevote[id] = -1;
			} else {
			 updatevote[id] -= 1;
			}

			setLike(updatevote);
			};

		const sortedItems = item.sort((a, b) => {
			const voteA = like[a.id] || 0;
			const voteB = like[b.id] || 0;
			return voteB - voteA;
		 });


	
	
		const handledelete=(id) => {
        const update = item.filter((movei)=>movei.id!==id);
       	setCount(update);
     	};
 return(
 	<>
 		
 		<Header/>
 		{item.map(movei=>
 			<Movei_l
 			peo={movei}
 			
 			onDelete={()=>handledelete(movei.id)}
 			onlike={()=>handleLike(movei.id)}
 			ondislike={()=>handleDislike(movei.id)}
 			vote={like[movei.id]}
 			/>
 		)}
 		<Add_movie/>
 		<Footer/>
 		
 	</>
 );
};



import './movie_l.css'
import Action from './action.js'
import Margin from './space.js'



function Movei_l({onDelete,peo,onlike,ondislike,vote}){
	return(
	<>
		<div className='container'>
			<div>
				<img className='imge'src={peo.img}></img>
			</div>
			
			<div className='infor'>
				<h1> {peo.name}</h1><br/>
				<p>{peo.release_date} |{peo.genre}</p><br/>
				<h2>Description</h2><br/>
				<h4>{peo.Description}</h4>
			</div>	
			<div className='botom'>
				 <Action onDelete={onDelete} onlike={onlike} ondislike={ondislike} vote={vote}/>

			</div>
		</div>
		
		<Margin/>
		<div className='line_g'></div>
		<Margin/>
		
	</>
	
	);

};

export default Movei_l;

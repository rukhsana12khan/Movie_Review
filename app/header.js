import './header.css';
import Margin from './space.js'

function Header(){
	return(
		<>
			<div className='abc'>
				<div className='image'>
					<img src='icon - Logo.svg' alt='my image'></img>
				</div>
				
				<div className='bold'>
					<h1> Movei Hub</h1>
				</div>	
				
				<div className='add'>
					<h4 > add Movie</h4>
	 			</div>
	 			
				
				<div className='watch'>
					<h4 > Watch</h4>
				</div>
				
			</div>
			
			
			<div id="line"></div>
			<Margin/>
			<Margin/>

			
			
		</>
		
		

	);
};

export default Header;

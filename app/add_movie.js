import Margin from './space.js'

function Add_movie(){
	return(
		<div className='box'>
			<Margin/>
			<Margin/>
			<div className='div'>
				<h3>Add New Movie</h3><br/>
				<p>To add a movie you have to fill a form. The added movie will appear in the list above</p>
			</div>
			
			<div className='form'>
				<form>
					<h2>Fill this form to add Movie</h2>
				</form>
			</div>
		
		
		</div>
	
	)


}

export default Add_movie;

import styles from './section9.module.css'
import Main_title from  '.././Hero/main_title.jsx'

const Section9 =()=>{
	return <section className={styles.section9}>

		<div className={styles.section9_container}>
			<div className={styles.section9_content}>
				<article>
				<div className={styles.txt}>
					
			 	<Main_title/>
				</div>

			 	<div>
			 		<p>
			 			Explore a new affordable and efficient way to send and receive digital payments globally, 
			 		</p>
			 		<form action="">
			 			<input type="text" placeholder='Email'/>
			 			<button className='join_btn'>Join Waitlist</button>
			 		</form>
			 	</div>
				</article>
			</div>
		
		</div>
	</section>
}
export default Section9
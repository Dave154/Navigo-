import styles from './section9.module.css'
import Main_title from  '.././Hero/main_title.jsx'
import {useGlobe} from '.././context.jsx'
import Modal from './modal.jsx'
const Section9 =()=>{
	const {joinFunc,handleChange,text} =useGlobe()

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
			 		<form action="" onSubmit={(e)=>joinFunc(e)}>
			 			<input type="text" placeholder='Email' value={text} onChange={handleChange}/>
			 			<button className='join_btn'>Join Waitlist</button>
			 		</form>
			 	</div>
				</article>
			<Modal/>
			</div>
		</div>
	</section>
}
export default Section9
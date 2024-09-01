import styles from './hero.module.css'
import Main_title from './main_title.jsx'
const Hero=()=>{
	return <section className={styles.hero}>
		<div className={styles.hero_container}>
			<div className={`${styles.hero_content} ${'d_grid'} ${'hero_content'}`}>
			<Main_title/>
			   <article className={`${styles.sub_txt} ${'flex'}`}>
					   	
					   	<h5>
					   		Experience a new affordable and efficient way to send and receive digital payments worldwide.
					   	</h5>
					   	<button className={styles.join_btn}>
					   		Join Waitlist 
					   	</button>
					   </article>
		
				

			</div>


		</div>
	</section>
}

export default Hero
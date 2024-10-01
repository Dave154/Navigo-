 import styles from './section4.module.css'
 import phone_left from '../.././assets/phone_left.png'
  import phone_right from '../.././assets/phone_right.png'
 import {useGlobe} from '../context.jsx'
 const Section4 =()=>{
 	const { section4Ref} = useGlobe()
 	return <section className={styles.section4}>
 		<section className={styles.section4_container}>
 		<div className={`${styles.watermark} ${'d_grid'}` }>
 			<h1>
 		  	Global
 		  </h1> 
 		  <h1>
 		  	Transfer
 		  </h1> 
 		</div>

 		<div className={`${styles.section4_content} ${'d_grid'}`}>
 			<div className={styles.sub_txt}>
	 		<p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
	 			One app that takes care of it all
	 		</p>
	 		<p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>Whether you are looking to send money overseas or would like to diversify your digital portfolio, Navigo wallet has you covered.</p>
	 	</div>

	 	<div className={`${styles.phone} ${'d_grid'}`} ref={section4Ref}>	

	 		<div className={styles.phone_right}>	
	 					<img src={phone_right} alt={phone_right}/>

	 		</div>	
	 		<div className={`${styles.phone_left} ${'phone_left'}`}>	
	 					<img src={phone_left} alt={phone_left}/>

	 		</div>	

	 	</div>	
 		</div>
          
 		</section>
 	</section>
 }

 export default Section4
import styles from './section2.module.css'

import image from '../.././assets/phone1.png'

const Section2=()=>{
	return <section className={styles.section2}>
	 <div className={`${styles.section2_container} ${'flex'}`}>
	 	<h3 className={`${styles.section2_title} ${'title'}`}>
	 		A wallet that can do more. — Built to be your new and only payments app ever.
	 	</h3>

   		<div className={`${styles.hand} ${'hand'}`}>
   			<img src={image} alt=""/>
   		</div>

	 	<div className={styles.sub_txt}>
	 		<p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
	 			Introducing Charter Wallet
	 		</p>
	 		<p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>A digital wallet that gives back your financial control and enables true affordable and instant worldwide payments.</p>
	 	</div>
	 </div>
	</section>
}
export default Section2
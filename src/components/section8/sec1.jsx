 import styles from './section8.module.css'
 import image from '../.././assets/sec1.png'

 const Sec1 = ()=>{
 	return  <div className={`${styles.list_item} ${'d_grid'} ${styles.sec1}`}>
                <h2 className={`${styles.sec1_title}`}>	
                	<span className={styles.dim}>Managing your money should not be hard</span> — Navigo makes it easy to share, schedule and secure your funds.
                </h2>	

                <div className={styles.sec1_img}>
                	
                	<img src={image} alt={image}/>
                </div>
		 </div>
 }

 export default Sec1
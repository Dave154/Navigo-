 import styles from './section8.module.css'
 import logo from '../.././assets/logo.jpeg'
 import image1 from '../.././assets/grid_1.jpg'
  import image2 from '../.././assets/grid_2.jpg'
   import image3 from '../.././assets/grid_3.jpg'
 const Sec2 = ()=>{
 	return  <div className={styles.list_item}>     
        <div className={styles.sub_txt}>
	 		<p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
	 			Store funds in Shared Vaults
	 		</p>
	 		<p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>Explore greater security when sharing money with Multi-Signature Vaults. A safe place to store funds long-term.</p>
	 	</div>
                <div className={`${styles.sec2_image} `}>
                	
                	<div className={styles.card}>
                		<div className={`${styles.top}`}>
                			<p>Family Vault</p>
                			<i><img src={logo} alt={logo}/></i>
                		</div>
                		<div className={styles.price}>
                			<h2>$ 5,420.30</h2>
                		</div>
                		<div className={styles.btm}>
                			<div className={`${styles.grid_card} ${'d_grid'}`}>
                				<span>
                					<img src={image1} alt={image1}/>
                				</span>
                				<span>
                					<img src={image3} alt={image3}/>	
                				</span>
                				<span>
                					<img src={image2} alt={image2}/>
                				</span>
                					
                			</div>
                			<div className={styles.profit}>
                				+12.5%
                			</div>
                		</div>
                	</div>
                </div>
		 </div>
 }

 export default Sec2
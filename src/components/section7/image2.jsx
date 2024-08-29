 import styles from './section7.module.css'
 import image from '../.././assets/pin_img2.png'



  const Image2 =()=>{
    return <div>
    	<img src={image} alt=''/>
    	<div className={styles.abs}>
      <div className={styles.abs_txt}>
         <h3 data-x='s'>
         5  
         </h3>
         <p>
           Average Settlement Time
         </p>
      </div>
    		
    	</div>
    </div>
  }
  export default Image2
import styles from './section7.module.css'
 import image from '../.././assets/pin_img3.png'



  const Image3 =()=>{
    return <div>
    	<img src={image} alt=''/>
    	<div className={styles.abs}>
    		  <div className={styles.abs_txt}>
         <h3 data-x='%'>
          1 
         </h3>
         <p>
           Processing Fees
         </p>
      </div>
    	</div>
    </div>
  }
  export default Image3
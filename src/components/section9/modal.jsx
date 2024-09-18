 	import styles from './section9.module.css'
 	import {useGlobe } from '.././context.jsx'

  const Modal =()=>{
  	const {isModal} =useGlobe()
   	return <div className={`${styles.modal_container} ${'d_grid'} ${ !isModal && styles.modal_container_hidden}`}>
   		<div className={`${styles.modal}`}>
   			yoyoyo
   		</div>
   	</div>
  }
  export default Modal
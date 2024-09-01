import styles from './hero.module.css'
import usdt from '../.././assets/usdt.png'
import blue_dollar from '../.././assets/blue_dollar.png'
import eth_logo from '../.././assets/eth_logo.png'
import op from '../.././assets/op.png'
import arb_logo from '../.././assets/arb_logo.png'
import {useGlobe } from '.././context.jsx'

const Main_title=()=>{
	const {main_txtRef}= useGlobe()
	return  <article className={`${styles.main_txt} ${'d_grid'} ${'main_txt'}` } ref={main_txtRef}>
			   	   <div className={`${styles.hero_sec1} ${'flex'}`}>
					<h1 className={styles.hero_title}>
						Make 
					</h1>
				  <article className={`${styles.bx_cont} ${styles.bx1}  ${'bx1'}`}>
						
					<div className={`${styles.anim_in} ${styles.anim_container} ${'box'}`}>
					 	<span className={styles.absolute_container}>
								<img src={eth_logo} alt="eth_logo"/>
							</span>
					</div>
					<span className={`${styles.absolute_container} ${styles.abs}`}>
								<img src={blue_dollar} alt="blue_dollar"/>
							</span>
					<span className={`${styles.absolute_container} ${styles.abs}`}>
								<img src={usdt} alt="usdt"/>
							</span>
							
					</article>
				</div>
				<div className={`${styles.hero_sec2} ${'flex'}`}>
					<h1 className={styles.hero_title}>
						your money
					</h1>
					
				</div>
				<div className={`${styles.hero_sec3} ${'flex'}`}>
					  <article className={`${styles.bx_cont} ${styles.bx2} ${'bx2'}` }>
						
					<div className={`${styles.anim_out} ${styles.anim_container}`}>
					 	<span className={styles.absolute_container}>
								<img src={eth_logo} alt="eth_logo"/>
							</span>
					</div>
					<span className={`${styles.absolute_container} ${styles.abs}`}>
								<img src={blue_dollar} alt="blue_dollar"/>
							</span>
					<span className={`${styles.absolute_container} ${styles.abs}`}>
								<img src={usdt} alt="usdt"/>
							</span>
							
					</article>
										<h1 className={styles.hero_title}>
						move
					</h1>
					
					
				</div>
			   </article>
}

export default Main_title
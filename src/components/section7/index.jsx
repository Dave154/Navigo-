import styles from './section7.module.css'
import {useGlobe } from '.././context.jsx'
import Image1 from './image1.jsx'
import Image2 from './image2.jsx'
import Image3 from './image3.jsx'

const list =[
	{	
		title:'Your transfers just got global.',
		sub_title:'Enter multi-currency accounts',
		sub_deets:'Seamlessly transfer funds to over 60 countries, with support for both fiat and digital currencies.',
	   	image:<Image1/>,
	},
	{	
		title:'Send money to loved ones in an instant.',
		sub_title:'No more waiting days, just seconds',
		sub_deets:'Embrace instant stablecoins such as USDc, or opt for same-day settlement in the local currency of your choice.',
		image:<Image2/>,
	},
{	
		title:'Spend USDC or Fiat at your local shop',
		sub_title:'Transact like a true local',
		sub_deets:'Effortlessly spend USDC or any other supported fiat currency at your local merchant, instantly at low costs. ',
		image:<Image3/>,
	},


	]


const Section7 =()=>{
    const {section7Ref}=useGlobe()
	return <section className={styles.section7} ref={section7Ref} >
	  <div className={`${styles.section7_container}`} >
	  	{list.map((item,i)=>{
	  		const {title,sub_title,sub_deets,image}= item
	  		return <article className={styles.content_container} key={i}>
	  			<div className={styles.txt}>
	  				<h2 className={`${styles.title} ${'title'}`}>
	  					{title}
	  				</h2>
	  		<div className={styles.sub_txt}>
	 		<p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
	 			{sub_title}
	 		</p>
	 		<p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>
	 			{sub_deets}
	 		</p>
	 	</div>
	  			</div>
	  			<div className={styles.image}>
	  				{image}
	  			</div>

	  		</article>
	  	})}
	  </div>
	</section>
}

export default Section7
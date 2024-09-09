import styles from './footer.module.css'
import logo from '../../assets/logo.jpeg'
import x from '../.././assets/x.jpg'
import ln from '../.././assets/ln.jpg'
import medium from '../.././assets/medium.jfif'


const footerList=[
	{
		cat: 'Personal',
		list:[ 'Wallet', 'Accounts', 'Transfers', 'Features','Security']

		},
		{
		cat: 'Business',
		list:[ 'Features','Payments','Transfers']

		},
		{
		cat: 'Resources',
		list:[ 'Guides','Docs']

		},
		{
		cat: 'About us',
		list:[ 'Blog','Contact']

		},
	]
 const Footer =()=>{
 	return <section className={`${styles.footer} ${'d_grid'}`}>
 	<div className={`${styles.footer_top} ${'flex'}`}>
 		<article className={styles.sec1}>
 			
 		<div className={`${styles.logo} ${'logo'} ${'flex'}`}>
				<i className={`${styles.logo_img} ${'logo_img'}`}><img src={logo} alt=""/></i>
				<h2 className={`${styles.logo_name} ${'logo_name'}`}>Navigo</h2>
			</div>
			<p>Enabling cost-efficient and instant payments, worldwide.</p>

			<div className={`${styles.icons} ${'flex'}`}>
				<span><img src={x} alt="x"/></span>	
				<span><img src={ln} alt={ln}/></span>
				<span><img src={medium} alt={medium}/></span>
						
			</div>
 		</article>
 		<article className={`${styles.sec2} ${'d_grid'}`}>
 				{ 
 					footerList.map((obj,i)=>{
 						const {cat,list} = obj
 						return <div className={styles.list_container} key={i}>
 							<p>{cat}</p>
 							<ul className={styles.list}>

 								{list.map((item,index)=>{
 									console.log(item)
 									return <li className={styles.list_item} key={index}>
 										{item}
 									</li>
 								})}
 							</ul>
 						</div>
 					})
 				}
 			
 		</article>
 	</div>
 		<div className={`${styles.footer_btm} ${'flex'}`}>
 			<i>© 2024 Navigo Org.</i>
 			<p>	Made by  <span>{`${'<'}`}</span> Dave <span>{`${'/>'}`}</span></p>
 		</div>
 	</section>
 }
 export default Footer
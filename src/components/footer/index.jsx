import styles from './footer.module.css'
import logo from '../../assets/logo.jpeg'


const footerList=[
	{
		cat: 'Personal',
		list:[ 'Wallet', 'Accounts', 'Transfers', 'Features','Security']

		},
		{
		cat: 'Business',
		list:[ 'Wallet', 'Accounts', 'Transfers', 'Features','Security']

		},
		{
		cat: 'Resources',
		list:[ 'Wallet', 'Accounts', 'Transfers', 'Features','Security']

		},
		{
		cat: 'About us',
		list:[ 'Wallet', 'Accounts', 'Transfers', 'Features','Security']

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
				<span>X</span>	
				<span>E</span>
				<span>T</span>			
			</div>
 		</article>
 		<article className={`${styles.sec2} ${'d_grid'}`}>
 				{ 
 					footerList.map((obj,i)=>{
 						const {cat,list} = obj
 						return <div className={styles.list_container}>
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
 		<div className={styles.footer_btm}>
 			<i>© 2024 Navigo Org.</i>
 		</div>
 	</section>
 }
 export default Footer
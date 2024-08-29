import styles from './Section5.module.css'


const divList=[
	{
		title:'Send and Receive Fiat',
		deets:'Make payments to almost anywhere. Enjoy the convenience of bank transfers to more than 60 countries.',
		cards:[
				{
					logo:'',
					abrv:'',
					name:'',
				},
				{
					logo:'',
					abrv:'',
					name:'',
				},
				{
					logo:'',
					abrv:'',
					name:'',
				},
			]
	},
	{
		title:'Invest and Transfer Crypto',
		deets:'We support digital cryptocurrency payments and trading on more than 20+ EVM blockchains.',
		cards:[
				{
					logo:'',
					abrv:'',
					name:'',
				},
				{
					logo:'',
					abrv:'',
					name:'',
				},
				{
					logo:'',
					abrv:'',
					name:'',
				},
			]
	},
	{
		title:'Track Digital Payments',
		deets:'Easily track and manage all your transactions from multiple blockchain networks within the mobile app.',
		cards:[
				{
					logo:'',
					abrv:'',
					name:'',
				},
				{
					logo:'',
					abrv:'',
					name:'',
				},
				{
					logo:'',
					abrv:'',
					name:'',
				},
			]
	},

	]


const Section5 =()=>{
	return <section className={styles.section5}>
		<div className={styles.section5_container}>
			{divList.map((item,i)=>{
				const {title,deets,cards}=item
				return <div className={`${styles.card_container } ${'d_grid'}`} key={i}>
					 <div className={styles.card}>
					 	
					 </div>
					 <div className={styles.card_info}>

	 		<p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
	 			{title}
	 		</p>
	 		<p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>
	 		 			{deets}</p>
					 </div>
				</div>
			})}
		</div>
	</section>
}

export default Section5
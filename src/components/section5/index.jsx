import styles from './section5.module.css'
import Card1 from './card1.jsx'
import Card2 from './card2.jsx'
import Card3 from './card3.jsx'

const divList=[
	{
		title:'Send and Receive Fiat',
		deets:'Make payments to almost anywhere. Enjoy the convenience of bank transfers to more than 60 countries.',
		card: <Card1/>
	},
	{
		title:'Invest and Transfer Crypto',
		deets:'We support digital cryptocurrency payments and trading on more than 20+ EVM blockchains.',
		card: <Card2/>
		},
	{
		title:'Track Digital Payments',
		deets:'Easily track and manage all your transactions from multiple blockchain networks within the mobile app.',
		card: <Card3/>
	},

	]


const Section5 =()=>{
	return <section className={styles.section5}>
		<div className={styles.section5_container}>
			{divList.map((item,i)=>{
				const {title,deets,card}=item
				return <div className={`${styles.card_container } ${'d_grid'}`} key={i}>
					 <div className={`${styles.card} ${'d_grid'}`}>
					 	{card}
					 </div>
			<div className={styles.card_info}>
	 		<p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
	 			{title}
	 		</p>
	 		<p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>{deets}</p>
					 </div>
				</div>
			})}
		</div>
	</section>
}

export default Section5
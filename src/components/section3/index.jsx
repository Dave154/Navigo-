import styles from './section3.module.css'
import arbitrum from '../.././assets/arbitrum.png'
import avalanche from '../.././assets/avalanche.png'
import zkSync from '../.././assets/zkSync.png'
import ethereum from '../.././assets/ethereum.png'
import polygon from '../.././assets/polygon.png'




const list=[
	{
	id:'1',
	name:'arbitrum',
	logo: arbitrum	
	},
	{
	id:'2',
	name:'avalanche',
	logo: avalanche,	
	},
	{
	id:'3',
	name:'zkSync',
	logo: zkSync,	
	},
	{
	id:'4',
	name:'ethereum',
	logo:ethereum	
	},
	{
	id:'5',
	name:'polygon',
	logo: polygon,	
	},



	]




const Section3=()=>{
	return <section className={styles.section3}>
		<div className={`${styles.section3_container} ${'d_grid'}`}>
			<div className={styles.txt}>

			<p className={`${styles.txt_title} ${'sub_txt_title'}`}>
				Full coverage list
			</p>
			<p className={`${styles.txt_deets} ${'sub_txt_deets'}`}>	
              Available on all EVM Chains
			</p>
			</div>

			<div className={`${styles.list_container} ${'d_grid'}`}>
				<ul className={`${styles.list} ${'flex'} `}>
					{list.map(item=>{

						const {id,name,logo}=item
						return <li className={styles.list_item} key={id}>
							<img src={logo} alt={name}/>
						</li>
					})}
				</ul>
				<ul className={`${styles.list}  ${'flex'}`}>
					{list.map(item=>{

						const {id,name,logo}=item
						return <li className={styles.list_item} key={id}>
							<img src={logo} alt={name}/>
						</li>
					})}
				</ul>
			</div>
		</div>

	</section>
}
export default Section3
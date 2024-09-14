    import styles from './section5.module.css'
    import naija from '../.././assets/naija.png'
    import col from '../.././assets/col.jpg'
    import cad from '../.././assets/cad.jpg'

    const list =[
    		{
    			logo:cad,
    			name:'Canadian Dollar',
    			abbv:'CAD',
    		},
    		{
    			logo:col,
    			name:'Colombian Pesos',
    			abbv:'COP',
    		},
    		{
    			logo:naija,
    			name:'Nigeria Naira',
    			abbv:'NRC',
    		},
    	]
   const Card1=()=>{
   	return <div className={`${styles.card_content} ${styles.card1} ${'card1'}`}>
   		<ul className={`${styles.card_list} ${'d_grid'}`}>
   			{
   				list.map((item,index)=>{
   					const {logo, name,abbv}= item
   					return <li className={`${styles.list_item}`}>
                        <div className='flex'>
                            
   						<div className={styles.logo}>
   							 <img src={logo} alt={logo}/>
   						</div>
                            <div className={styles.info}>
                                <p>{abbv}</p>
                                <p>{name}</p>
                            </div>
                        </div>
   					</li>
   				})
   			}
   		</ul>
   	</div>
   }
   export default Card1
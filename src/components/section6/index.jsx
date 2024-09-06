  import styles from './section6.module.css'
  import slide1 from '../.././assets/slide1.png'
  import slide2 from '../.././assets/slide2.png'
  import slide3 from '../.././assets/slide3.png'
   const list =[
  		{
  			image:slide1,
  			category:'Traders',
  			usd:'4360.45',
  			eth:'1.48',
  			account:'Trading account'
  		},
  		{
  			image:slide2,
  			category:'Investors',
  			usd:'8360.45',
  			eth:'3.48',
  			account:'Main account'
  		},
  		{
  			image:slide3,
  			category:'Casual',
  			usd:'7360.45',
  			eth:'3.28',
  			account:'Main account'
  		},

  	]


  const Section6 =()=>{
    return <section className={styles.section6}>
    	<div className={`${styles.section6_container} ${'d_grid'}`}>
    		<div className={styles.section6_title}>
    			<p className=''>
    				Flexible to each different individual needs and occasions
    			</p>

    			<h2 className='title'>
    				Suited for every scenario.
    			</h2>
    		</div>
    		<div className={`${styles.slide} ${'d_grid'}`}>
    			
    			<ul className={`${styles.list} ${'flex'}`}>
    				{list.map((item,i)=>{
    					const {image,category,usd,eth,account} = item

    					return <li className={styles.list_item} key={i}>
    						<img src={image} alt={image}/>
    						 <div className={`${styles.list_item_content} ${'d_grid'}`}>
    						 	  <div className={styles.category}>
    						 	  	 <p>{category}</p>
    						 	  </div>
    						 	  <div className={`${styles.base} ${'d_grid'}`}>
    						 	  	 <p className={styles.bal}> Wallet Balance</p>

    						 	  	 <h3 className={styles.usd}>
    						 	  	 	$  {usd}
    						 	  	 </h3>
    						 	  	 <h3 className={styles.eth}>
    						 	  	 	{eth}
    						 	  	 </h3>
    						 	  	 <div className={styles.account}>
    						 	  	 	<p>  {account}</p>
    						 	  	 </div>
    						 	  </div>
    						 </div>
    					</li>
    				})}
    			</ul>
    			<ul className={`${styles.list} ${'flex'}`}>
    				{list.map((item,i)=>{
    					const {image,category,usd,eth,account} = item

    					return <li className={styles.list_item} key={i}>
    						<img src={image} alt={image} loading='lazy'/>
    						 <div className={`${styles.list_item_content} ${'d_grid'}`}>
    						 	  <div className={styles.category}>
    						 	  	 <p>{category}</p>
    						 	  </div>
    						 	  <div className={`${styles.base} ${'d_grid'}`}>
    						 	  	 <p className={styles.bal}> Wallet Balance</p>

    						 	  	 <h3 className={styles.usd}>
    						 	  	 	$  {usd}
    						 	  	 </h3>
    						 	  	 <h3 className={styles.eth}>
    						 	  	 	{eth}
    						 	  	 </h3>
    						 	  	 <div className={styles.account}>
    						 	  	 	<p>  {account}</p>
    						 	  	 </div>
    						 	  </div>
    						 </div>
    					</li>
    				})}
    			</ul>

    		</div>
    		<div className={styles.sub_txt}>
	 		<p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
	 			Organize your funds across accounts
	 		</p>
	 		<p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>
	 			Add multiple personal accounts to better overview your funds and expenses. Easily adjust any spending limits and budgets within each one of them.
	 		</p>
	 	</div>
    	</div>
    </section>
  }
  export default Section6
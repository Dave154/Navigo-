 import styles from './section7.module.css'
 import image from '../.././assets/pin_img1.png'
    import naija from '../.././assets/naija.png'
    import col from '../.././assets/col.jpg'
    import cad from '../.././assets/cad.jpg'



const list = [
		{
			logo: col,
			name:'Columbia',
		},
		{
			logo: naija,
			name:'Nigeria',
		},
		{
			logo: cad,
			name:'Canada',
		},
	{
			logo: col,
			name:'Columbia',
		},
		{
			logo: naija,
			name:'Nigeria',
		},
		{
			logo: cad,
			name:'Canada',
		},
	]

  const Image1 =()=>{
    return <div>
    	<img src={image} alt=''/>
    	<div className={styles.abs}>
    		
    		<div className={styles.logo_list_container}>
    			
    			<ul className={`${styles.logo_list} ${'d_grid'}`}>
    				{list.map((item,i)=>{
    					const {logo ,name } = item
    					return <li className={`${styles.logo_list_item} ${'flex'}`} key={i}>
    						<i> <img src={logo} alt={logo}/> </i>
    						<p>{name}</p>
    					</li>
    				})}
    			</ul>
    			<ul className={`${styles.logo_list} ${'d_grid'}`}>
    				{list.map((item,i)=>{
    					const {logo ,name } = item
    					return <li className={`${styles.logo_list_item} ${'flex'}`} key={i}>
    						<i> <img src={logo} alt={logo}/> </i>
    						<p>{name}</p>
    					</li>
    				})}
    			</ul>

    		</div>

    			<div className={styles.abs_txt}>
    				<h3 data-x='+'>
    					60 
    				</h3>
    				<p> Available countries</p>
    			</div>

    	</div>
    </div>
  }
  export default Image1
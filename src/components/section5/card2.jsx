    import styles from './section5.module.css'
      import polygon from '../.././assets/polygon.jpg'
        import op from '../.././assets/op.png'
          import blue_dollar from '../.././assets/blue_dollar.png'
  const list =[
            {
                logo: polygon,
                name:'polygon',
                abbv:'Matic',
                price:'$6,282.69'
            },
            {
                logo: op,
                name:'optimism',
                abbv:'OP',
                price: '$9,550.07',
            },
            {
                logo: blue_dollar,
                name: 'USDC',
                abbv:'USDC',
                price:  '$4,008.02'
            },
        ]
   const Card2=()=>{
   	return <div className={`${styles.card_content} ${styles.card2}`}>
   		<ul className={`${styles.card_list} ${'d_grid'}`}>
            {
                list.map((item,index)=>{
                    const {logo, name,abbv,price}= item
                    return <li className={`${styles.list_item}`}>
                    <div className='flex'>
                        <div className={styles.logo}>
                             <img src={logo} alt={logo}/>
                        </div>
                            <div className={styles.info}>
                                <p className={styles.name}>{name}</p>
                                <p className={styles.abbv}>{abbv}</p>
                            </div>
                    </div>
                    <div className={styles.price}>
                        {price}
                    </div>
                    </li>
                })
            }
        </ul>
   	</div>
   }
   export default Card2
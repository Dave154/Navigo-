 import styles from './section5.module.css'
    import james from '../.././assets/james.png'
    import iva from '../.././assets/iva.png'
    import paula from '../.././assets/paula.png'


    const list =[
            {
                logo:james,
                name:'James Hall',
                deets:'Received, May 13:05 PM',
                price: 35,
                color:'green',
                currency:'usdc',
            },
            {
                logo:iva,
                name:'Iva Ryan',
                deets:'Received, May 18:10 PM',
                price:45,
                color:'green',
                currency:'usdc',
            },
            {
                logo:paula,
                name:'Paula Mora',
                deets:'Pending Request',
                price:25,
                color:'green',
                currency:'eurc',
            },
        ]
   const Card3=()=>{
    return <div className={`${styles.card_content} ${styles.card3}`}>
       <ul className={`${styles.card_list} ${'d_grid'}`}>
            {
                list.map((item,index)=>{
                    const {logo, name,abbv,price,color,currency}= item
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
                    <div className={styles.price}>
                        {price}
                    </div>
                    </li>
                })
            }
        </ul>
    </div>
   }
   export default Card3
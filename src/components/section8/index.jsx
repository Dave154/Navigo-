 
import styles from './section8.module.css'
import Sec1 from './sec1.jsx'
import Sec2 from './sec2.jsx'
import Sec3 from './sec3.jsx'
import img1 from '../.././assets/btm_img1.png'
import img2 from '../.././assets/btm_img2.png'
import pad from '../.././assets/padlock.png'
import cloud from '../.././assets/locked_bg.png'

const list =[
      <Sec1/>, <Sec2/>, <Sec3/>
  ]
const btm_list=[
  { 
    icon: pad,
    title:'Full Non-Custodial control',
    deets:'Charter will never hold any of your funds. Your money is completely stored on your device and cloud.',
  },
  { 
    icon:pad,
    title:'Passkeys',
    deets:'Charter stores your wallet cryptographic keys within your devices secure enclave.',
  },
  { 
    icon: cloud,
    title:'Wallet Recovery',
    deets:'We provide you with multiple recovery methods utilizing your Cloud or Social Accounts.',
  }

  ]
 const Section8=()=>{
   return <section className={styles.section6}>
   		<div className={`${styles.section8_container} ${'d_grid'}`}>
   			 <div className={styles.section8_heading}>
          <h2 className={`${styles.section8_title} ${'title'}`}>
            And that is not all.
          </h2>
          <p className={`${styles.sub_title} `}>
            Your Charter wallet is packed with neat features that further assist you in operating your daily finances.
          </p>
         </div>
         <div className={styles.list_container}>
           
         { 
            list.map((item,i)=>{

              return <div key={i}>  {item}</div>
            })
         }
         </div>

         <div className={styles.btm_container}>
          <p>Charter is fully non-custodial, which means only you have control over your funds and private keys. </p>   

          <div className={`${styles.btm_content} ${'d_grid'}`}>
            <div className={styles.btm_list_container}>
                <ul className={`${styles.btm_list} ${'d_grid'}`}>
                  {btm_list.map((item,i)=>{
                    const {icon,title,deets} = item
                    return <li className={styles.btm_list_item} key={i}>
                       <span className={styles.btm_icon}>
                         <i><img src={icon} alt=""/></i>
                       </span>
                      <div className={styles.btm_list_content}>
                         
                        <p className={`${styles.sub_txt_title}  ${'sub_txt_title'}`}>
                         {title}
                        </p>
                        <p className={`${styles.sub_txt_deets} ${'sub_txt_deets'}`}>{deets}</p>
                      </div>
                    </li>
                  })}
                </ul>
            </div>  
            <div className={`${styles.btm_image} ${'d_grid'}`}>
             

                <div className=''>  
                      <img src={img2} alt={img1}/>

                </div>  
                <div className=''>  
                      <img src={img1} alt={img2}/>

                </div>  


            </div>
          </div>        

         </div>
   		</div>
   </section>
 } 
 export default Section8
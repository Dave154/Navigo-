 
import styles from './section8.module.css'
import Sec1 from './sec1.jsx'
import Sec2 from './sec2.jsx'
import Sec3 from './sec3.jsx'

const list =[
      <Sec1/>, <Sec2/>, <Sec3/>
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
   		</div>
   </section>
 } 
 export default Section8
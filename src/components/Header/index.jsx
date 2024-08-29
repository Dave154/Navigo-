import logo from '../../assets/logo.jpeg'
import {useState} from 'react'
import styles from './header.module.css'

const menu=[
     {
     	id:'1',
     	name:'personal',
     	active:true
     },
      {
     	id:'2',
     	name:'Business',
     	active:false
     },
      {
     	id:'3',
     	name:'About us',
     	active:true
     },
      {
     	id:'4',
     	name:'Join waitlist',
     	active:true
     },
	]

const Header=()=>{
	return <header className={styles.header}>
		<nav className={`${styles.nav} ${'flex'}`}>
			<div className={`${styles.logo} ${'flex'}`}>
				<i className={styles.logo_img}><img src={logo} alt=""/></i>
				<h2 className={styles.logo_name}>Navigo</h2>
			</div>

			<div className={styles.menu}>
				<ul className={`${styles.menu_list} ${'flex'}`}>
					{menu.map(item=>{
						const {id,name,active}=item
						return <li className={`${styles.menu_list_item} ${!active && styles.notActive}`} key={id}>

						<a href="#">{name}</a>
						<p>{!active ?' coming soon!': null}</p>
						
						</li>
					})}
				</ul>
			</div>

		</nav>
	</header>
}
export default Header

import React,{useContext} from 'react'
const AppContext=React.createContext()
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


const windowWidth=window.outerWidth

const AppProvider=({children})=>{
const main_txtRef=useRef(null)
const section4Ref=useRef(null)
const section7Ref=useRef(null)
			// ANIMATIONS
// GLOBAL
useGSAP(()=>{
	let title = gsap.utils.toArray('.title')
	console.log(title)
	title.map((t)=>{	
    gsap.from(t,{
    	scrollTrigger:{
    		trigger:t,
    		onEnter:(e)=>e.trigger.classList.add('active'),
    	},
    	opacity:0,
    	duration:2,
    })
	})

})
// Hero

useGSAP(()=>{
	const tl1=gsap.timeline()
	tl1.from('.main_txt > div',{
		yPercent:-100,
		opacity:0,
		duration:1,
		stagger:.2
	})
	.from('.bx1 span',{

		scrollTrigger:{
			trigger:'.bx2 span',
			scrub:1,
		},
		xPercent:55,
		yPercent: 100,
		scale:1,
	})
	.to('.bx2 span',{
		scrollTrigger:{
			trigger:'.bx2 span',
		scrub:1,
	},
	xPercent:-50,
		yPercent:-60,
		scale:.8,
	})
},{scope:main_txtRef})

useGSAP(()=>{
	gsap.to('.phone_left',{
		scrollTrigger:{
			trigger:'.phone_left',
			scrub:true,
		},
		yPercent: (windowWidth >= 500 ? 0: 50),
	})
},{scope:section4Ref})

useGSAP(()=>{
	let articles =gsap.utils.toArray('article')
	console.log(articles)
	articles.map((article)=>{
	gsap.from(article,{
		scrollTrigger:{
			trigger: article,
			pin:true,
			start:'top +=32',
			end:'bottom 90%',
			endTrigger: articles[2],
			pinSpacing:false
		},
      
	})
	})

},{scope:section7Ref})


 	return <AppContext.Provider value={{main_txtRef,section4Ref,section7Ref}}>
 		{children}
 	</AppContext.Provider>
}

const useGlobe=()=>{
	return useContext(AppContext)
}

export {useGlobe, AppProvider}
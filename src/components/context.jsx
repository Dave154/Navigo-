
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
// Header
useGSAP(()=>{
	gsap.from('.logo',{
		yPercent:-100,
		opacity:0,
		duration:2,
		delay:1,
		ease:'power3.out'
	})
})
// Hero

useGSAP(()=>{
	const tl1=gsap.timeline()
	tl1.from('.hero_content > .main_txt > div',{
		yPercent:-100,
		opacity:0,
		duration:1,
		stagger:.2
	})
	.from('.bx1 span',{

		scrollTrigger:{
			trigger:'.bx2 span',
			scrub:true,
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
	gsap.from(' .hero_content > .sub_txt',{
		scrollTrigger:{
			trigger:'.sub_txt',
			start: 'top center',	
		},
		opacity:0,
		duration:2,
	})
})


useGSAP(()=>{
	gsap.from('.hand',{
		scrollTrigger:'.hand',
		xPercent:50,
		yPercent:20,
		opacity:.1,
		duration:2
	})
})
useGSAP(()=>{
	gsap.to('.phone_left',{
		scrollTrigger:{
			trigger:'.phone_left',
			start:'center center',
			scrub:1,
		},
		yPercent: 70,
	})
},{scope:section4Ref})


useGSAP(()=>{
	const list = gsap.utils.toArray('.card1 li')
	gsap.from(list,{
		scrollTrigger:{
			trigger:list,
		start:'center center',

	},
		opacity:0,
		stagger:.4,
		yPercent:-50,
	})
})
useGSAP(()=>{
	const list = gsap.utils.toArray('.card2 li')
	gsap.from(list,{
		scrollTrigger:{
			trigger:list,
		start:'center center',

	},
		opacity:0,
		stagger:.4,
		yPercent:-50,
		width:0,
	})
})
useGSAP(()=>{
	const list = gsap.utils.toArray('.card3 li')
	gsap.from(list,{
		scrollTrigger:{
			trigger:list,
		start:'center center',

	},
		opacity:0,
		stagger:.4,
		xPercent:50,
		duration:1.5,
		ease: 'bounce.out'
	})
})
useGSAP(()=>{
	let articles =gsap.utils.toArray('article')
	console.log(articles)
	articles.map((article)=>{
	gsap.from(article,{
		scrollTrigger:{
			trigger: article,
			pin:true,
			startTrigger: section7Ref.current,
			start:'top +=32',
			end:'top +=48',
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
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList ,faBurger,faMartiniGlass} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useState } from "react";


export const Navbar = (props) => {
    const {contacte,review}  = props
    const [isScroll,setisScroll] = useState(false)

    const changeColor = ()=>{
        if(window.scrollY >= 600){
            setisScroll(true)
        }else{
            setisScroll(false)
        }
    }

    window.addEventListener("scroll",changeColor)

    const MoveNave = ()=>{
        const bar = document.querySelector(".navbar")
              bar.classList.toggle("movenav")
      }
    
    
  return (
    <>
        <section className={`py-4  text-white fixed w-full ${isScroll ? "bg-black" :""}  text-right md:px-0 px-10 z-40`} >
            <div className="container mx-auto">
                <motion.nav animate={{top:0}} transition={{duration:0.9}} className="md:flex hidden justify-around items-center relative top-[-100px]">
                    <div>
                        <h1 className="text-6xl font-bold uppercase cursor-pointer">
                            <FontAwesomeIcon icon={faBurger} />
                        </h1>
                    </div>

                    <div className="text-2xl capitalize flex items-center gap-20">
                        <Link className="cursor-pointer" to={"/"}>Home</Link>
                        <div className="cursor-pointer" onClick={()=>contacte.current.scrollIntoView({ behavior: 'smooth'})}>Contact</div>
                        <div className="cursor-pointer" onClick={()=>review.current.scrollIntoView({ behavior: 'smooth'})}>Review</div>
                        <Link className="cursor-pointer" to={"/about"}>Aboute</Link>
                    </div>
                    <div className="py-3 px-9 rounded-lg border border-black border-spacing-2 text-2xl cursor-pointer hover:border-white bg-orange-500">
                        <div>
                            <FontAwesomeIcon icon={faMartiniGlass} />
                        </div>
                    </div>
                </motion.nav>
            </div> 
            <div className=" block md:hidden cursor-pointer z-40" >
            <FontAwesomeIcon className="text-4xl" icon={faList}  onClick={MoveNave}/>
            </div>
        </section>
        <nav className="w-[20rem] h-[100vh] bg-black right-[-100rem] flex flex-col gap-20 justify-center items-center text-white fixed z-30 md:hidden navbar">
                    <div className="w-fit">
                        <h1 className="text-3xl font-bold uppercase cursor-pointer">
                            <FontAwesomeIcon icon={faBurger} />
                        </h1>
                    </div>
                    <div className="text-2xl capitalize flex flex-col justify-center  items-center gap-20">
                        <Link className="cursor-pointer" to={"/"}>Home</Link>
                        <div className="cursor-pointer" onClick={()=>contacte.current.scrollIntoView({ behavior: 'smooth'})}>Contact</div>
                        <div className="cursor-pointer" onClick={()=>review.current.scrollIntoView({ behavior: 'smooth'})}>Review</div>
                        <Link className="cursor-pointer" to={"/about"}>Aboute</Link>
                    </div>
                    <div className="py-3 px-9 rounded-lg border border-black border-spacing-2 text-2xl cursor-pointer hover:border-white bg-orange-500">
                        <div>
                            <FontAwesomeIcon icon={faMartiniGlass} />
                        </div>
                    </div>
        </nav> 
    </>
  )
}

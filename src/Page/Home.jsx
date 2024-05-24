import { useEffect, useRef } from "react"
import { Footer } from "../Componet/Footer"
import { Houre } from "../Componet/Houre"
import { Navbar } from "../Componet/Navbar"
import { Newsletter } from "../Componet/Newsletter"
import { Pepol } from "../Componet/Pepol"
import { Recipes } from "../Componet/Recipes"
import { Section } from "../Componet/Section"
import { Tema } from "../Componet/Tema"
import { Visitors } from "../Componet/Visitors"




export const Home = () => {
  const contacte = useRef()
  const review = useRef()
  const home = useRef()
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
        <section className="home">
            <Navbar contacte={contacte}  review={review} home={home}/>
            <Section home={home}/>
        </section>
        <Tema/>
        <Pepol/>
        <Houre contacte={contacte} />
        <Visitors review={review}/>
        <Newsletter/>
        <Recipes/>
        <Footer contacte={contacte} />
    </>
  )
}

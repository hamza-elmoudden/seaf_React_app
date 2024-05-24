import { useEffect, useRef } from "react"
import { Footer } from "../Componet/Footer"
import { Houre } from "../Componet/Houre"
import {Navbar} from "../Componet/Navbar"
import { Newsletter } from "../Componet/Newsletter"
import { Visitors } from "../Componet/Visitors"



export const About = () => {
    const contacte = useRef()
    const review = useRef()

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

  return (
    <>
    <section className="sube">
        <Navbar contacte={contacte}  review={review}/>
        <div className="h-[60vh] py-20 px-10 flex justify-center items-center">
            <h1 className="font-bold text-7xl capitalize cursor-pointer text-white"> About Us </h1>
        </div>
    </section>
    <section className="py-40 container mx-auto">
        <div className="flex justify-center flex-col items-center gap-20">
                <div className="flex flex-col gap-4 items-center">
                    <div className="w-8 h-1 bg-orange-400"></div>
                    <h1 className="text-xl font-bold"> Who we are </h1>
                </div>
                <div className="w-1/2 text-center">
                    <h1 className="text-7xl font-bold capitalize opacity-80">We Invite You to Visit Our Restaurant</h1>
                </div>
                <div className="px-10 text-center text-xl font-bold opacity-65">
                    <p>Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur! Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur!</p>
                </div>
        </div>
    </section>
    <Houre contacte={contacte}/>
    <Visitors review={review}/>
    <Newsletter/>
    <Footer contacte={contacte}/>
    </>
  )
}




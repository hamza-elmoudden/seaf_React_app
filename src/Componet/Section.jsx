import { motion } from 'framer-motion';




export const Section = (props) => {
    const {home} = props
  return (
    <>
        <section className="sec py-20 text-white flex justify-center items-center" ref={home}>
                <div className="flex flex-col justify-center items-center gap-9 ">
                    <div className="py-4 overflow-hidden">
                        <motion.p animate={{top:0}} transition={{duration:0.6}} className="font-sans  uppercase top-[100px] relative">Hellow, New Frind !</motion.p>
                    </div>
                    <div className="text-center space-y-8 uppercase py-8 overflow-hidden">
                        <motion.h1 animate={{top:0}} transition={{duration:0.9}} className="text-8xl relative top-[-200px]">welcom to </motion.h1>
                        <motion.h1 animate={{top:0}} transition={{duration:1}}  className="text-8xl relative top-[100px]">tastyc seafood</motion.h1>
                    </div>
                    <div className="text-center text-2xl">
                        <motion.div animate={{opacity:1}} transition={{duration:1.7}} className="px-16 py-4 rounded-lg bg-orange-500 hover:shadow-xl shadow-orange-500 cursor-pointer hover:bg-yellow-500 opacity-0">
                            <button className="uppercase font-bold">Sbmit</button>
                        </motion.div>
                    </div>
                </div>
        </section>
    </>
  )
}

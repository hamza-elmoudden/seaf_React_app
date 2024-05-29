import faceImage1 from '../image/face-1.jpg.webp'; 
import faceImage2 from '../image/face-2.jpg.webp'; 
import faceImage3 from '../image/face-3.jpg.webp'; 
import { CardVisitors } from './CardVisitors';


export const Recipes = () => {
  return (
    <>
        <section className="container mx-auto py-20">
            <div className="flex justify-center">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
                    <h1 className="text-2xl uppercase font-bold opacity-65">Newsletter</h1>
                    <h1 className="text-6xl capitalize font-bold opacity-70">Use the Tips and Recipes of Our Chefs</h1>
                    <p className="w-1/2 text-center text-xl capitalize opacity-55">Porro eveniet, autem ipsam corrupti consectetur cum.Repudiandae dignissimos fugiat sit nam.</p>
                </div>
            </div>
            <div className="flex gap-3 justify-center pt-20 flex-wrap">

                <div className="md:w-[30rem] w-full hover:shadow-xl shadow-slate-200">
                <CardVisitors image={faceImage1}/>
                </div>

                <div className="md:w-[30rem] w-full hover:shadow-xl shadow-slate-200">
                <CardVisitors image={faceImage2}/>
                </div>

                <div className="md:w-[30rem] w-full hover:shadow-xl shadow-slate-200">
                <CardVisitors image={faceImage3}/>
                </div>

            </div>
    </section>
    </>
  )
}



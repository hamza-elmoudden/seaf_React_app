import { CardVisitors } from "./CardVisitors"
import faceImage1 from '../image/face-1.jpg.webp'; 
import faceImage2 from '../image/face-2.jpg.webp'; 
import faceImage3 from '../image/face-3.jpg.webp'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Visitors = (props) => {
    const {review} = props


  return (
    <>
    <section className="container mx-auto py-20" ref={review}>
            <div className="flex justify-center">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
                    <h1 className="text-2xl uppercase font-bold opacity-65">Testimonials</h1>
                    <h1 className="text-6xl capitalize font-bold opacity-70">What Our visitors say</h1>
                    <p className="w-1/2 text-center text-xl capitalize opacity-55">Porro eveniet, autem ipsam corrupti consectetur cum.Repudiandae dignissimos fugiat sit nam. </p>
                </div>
            </div>
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={3}
                        slidesToScroll={1}
                        className="flex gap-8 justify-center pt-20"
                    >    
                    <div className="md:w-1/3 w-full">
                    <CardVisitors image={faceImage1}/>
                    </div>

                    <div className="md:w-1/3 w-full">
                    <CardVisitors image={faceImage2}/>
                    </div>

                    <div className="md:w-1/3 w-full">
                    <CardVisitors image={faceImage3}/>
                    </div>

                    </Slider>
            <div className="py-20">
                <div className="flex gap-28 md:flex-row flex-col flex-wrap justify-center">
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <h1 className="text-5xl font-bold">200 <span className="text-orange-500">+</span></h1>
                        <h1 className="text-2xl capitalize">Visitors daily</h1>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <h1 className="text-5xl font-bold">400 <span className="text-orange-500">+</span></h1>
                        <h1 className="text-2xl capitalize">Deliveries monthly</h1>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <h1 className="text-5xl font-bold">100 <span className="text-orange-500">%</span></h1>
                        <h1 className="text-2xl capitalize">Positive feedback</h1>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <h1 className="text-5xl font-bold">40 <span className="text-orange-500">+</span></h1>
                        <h1 className="text-2xl capitalize">Awards and honors</h1>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

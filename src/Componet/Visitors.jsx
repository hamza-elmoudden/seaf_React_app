import { CardVisitors } from "./CardVisitors"
import imagevistor from "../imagevistor";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Visitors = (props) => {
    const {review} = props

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

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
                    <Carousel 
                        responsive={responsive}
                        autoPlay={true} 
                        autoPlaySpeed={3000} 
                        itemClass="carousel-item-padding-10"
                    
                        >
                        {
                            imagevistor.map((item)=>{
                                return(
                                    <div className="md:min-w-1/4 w-full hover:shadow-xl shadow-slate-200">
                                    <CardVisitors image={item}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
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

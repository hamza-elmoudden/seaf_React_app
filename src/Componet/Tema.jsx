;


export const Tema = () => {
  return (
    <>
    <section className="py-20 container mx-auto md:px-0 px-10">
        <div className='flex md:flex-row flex-col-reverse'>
            <div className='md:w-1/2 w-full md:gap-0 gap-10  flex flex-col py-10 px-10 justify-around'>
                    <div className="flex items-center space-x-2">
                        <dir className="w-3 h-1 bg-orange-600 rounded-full"></dir>
                        <p> About Us </p>
                    </div>
                    <div>
                        <h1 className="text-5xl capitalize font-sans">We Invite You to Visit Our Restaurant</h1>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab beatae illum mollitia reprehenderit, atque nobis nostrum nihil quasi?</p>
                    </div>
                    <div className="px-8 py-3 rounded-lg bg-orange-400 w-fit text-white cursor-pointer hover:bg-red-300">
                        <h1 className="text-xl uppercase">read more</h1>
                    </div>
            </div>
            <div className="md:w-1/2 w-full">
                <img src={require("../image/about2.jpg.webp")} alt="aboute" />
            </div>
        </div>
        <div className='flex md:flex-row-reverse flex-col-reverse'>
        <div className='md:w-1/2 w-full  flex flex-col py-10 px-10 justify-around md:gap-0 gap-10'>
                    <div className="flex items-center space-x-2">
                        <dir className="w-3 h-1 bg-orange-600 rounded-full"></dir>
                        <p> Restaurant Menu </p>
                    </div>
                    <div>
                        <h1 className="text-5xl capitalize font-sans">Always Fresh Ingredients</h1>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab beatae illum mollitia reprehenderit, atque nobis nostrum nihil quasi?</p>
                    </div>
                    <div className="px-8 py-3 rounded-lg bg-orange-400 w-fit text-white cursor-pointer hover:bg-red-300">
                        <h1 className="text-xl uppercase">read more</h1>
                    </div>
            </div>
            <div className="md:w-1/2 w-full">
                <img src={require("../image/about3.jpg.webp")} alt="aboute" />
            </div>
        </div>
        <div className='flex flex-wrap md:flex-row flex-col-reverse'>
        <div className='md:w-1/2 w-full gap-10 flex flex-col py-10 px-10 justify-around md:gap-0'>
                    <div className="flex items-center space-x-2">
                        <dir className="w-3 h-1 bg-orange-600 rounded-full"></dir>
                        <p> Our Team  </p>
                    </div>
                    <div>
                        <h1 className="text-5xl capitalize font-sans">Use the Tips & Recipes of Our Chefs </h1>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab beatae illum mollitia reprehenderit, atque nobis nostrum nihil quasi?</p>
                    </div>
                    <div className="px-8 py-3 rounded-lg bg-orange-400 w-fit text-white cursor-pointer hover:bg-red-300">
                        <h1 className="text-xl uppercase">read more</h1>
                    </div>
            </div>
            <div className="md:w-1/2 w-full ">
                <img src={require("../image/about2.jpg.webp")} alt="aboute" />
            </div>
        </div>
    </section>
    </>
  )
}

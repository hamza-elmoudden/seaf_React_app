

export const Houre = (props) => {
    const {contacte} = props
  return (
    <>
    <section className="houre py-20">
    <section className="py-20 container mx-auto">
        <div  className="flex md:flex-row flex-col md:gap-10 gap-20">
              <div className="md:w-1/2 w-full flex flex-col gap-10 text-white">
                <div className="flex gap-4 items-center">
                    <div className="w-8 h-1 bg-orange-500"></div>
                    <h1 className="uppercase">Reservation</h1>
                </div>
                <div className="flex flex-col gap-20">
                    <h1 className="text-7xl font-bold capitalize"> Working hours </h1>
                    <p className="text-xl opacity-75"> Rolorem, beatae dolorum, praesentium itaque et quam quaerat. </p>
                    <div className="text-white flex gap-12">
                        <div className="px-8 py-4 text-2xl uppercase bg-orange-500 w-fit cursor-pointer rounded-lg">Book A Table</div>
                        <div className="px-8 py-4 text-2xl uppercase hover:bg-yellow-500 w-fit cursor-pointer rounded-lg" onClick={()=>contacte.current.scrollIntoView({ behavior: 'smooth'})}>Contact us</div>
                    </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full container mx-auto flex justify-center items-center gap-5">
                    <div className="border border-spacing-2 bg-gray-100 space-y-5 w-fit px-20 py-10">
                        <div className="text-center flex flex-col gap-8">
                            <h1 className="text-3xl uppercase">Sunday to Tuesday</h1>
                            <h1 className="text-2xl"> 09 <span className="text-orange-400">:</span> 00 </h1>
                            <h1 className="text-2xl"> 22 <span className="text-orange-400">:</span> 00 </h1>
                        </div>
                        <div className="text-center flex flex-col gap-8">
                            <h1 className="text-3xl uppercase">Friday to Saturday</h1>
                            <h1 className="text-2xl"> 11 <span className="text-orange-400">:</span> 00 </h1>
                            <h1 className="text-2xl"> 19 <span className="text-orange-400">:</span> 00 </h1>
                        </div>
                    </div>
              </div>  
        </div>
    </section>
    </section>
    <div className="py-10"></div>
    </>
  )
}

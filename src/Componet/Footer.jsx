import React from 'react'

export const Footer = (props) => {
    const {contacte}  = props
  return (
    <>
    <footer className="bg-gray-100 py-20" ref={contacte}>
    <div className="container mx-auto ">
        <div className="flex justify-center items-center md:flex-row flex-col gap-10">
                <div className="md:w-1/2 w-full flex flex-col gap-10 items-center">
                        <div>
                            <h1 className="text-3xl capitalize font-bold"> About us </h1>
                        </div>
                        <div className="w-1/2 opacity-80 text-xl">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad sed eum quos earum ex alias et voluptas deserunt laborum. Qui, alias accusantium?</p>
                        </div>
                        <div className="">
                            <h1 className="text-orange-400 text-xl cursor-pointer">Red More</h1>
                        </div>
                </div>
                <div className="md:w-1/2 w-full flex flex-col gap-10 items-center">
                    <div className="">
                        <h1 className="text-3xl capitalize font-bold">Contacte</h1>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 text-xl">
                            <h1 className="font-bold">call :</h1>
                            <h1>+212634563234</h1>
                        </div>
                        <div className="flex gap-5 text-xl">
                            <h1 className="font-bold">email :</h1>
                            <h1>emailtest@gmail.com</h1>
                        </div>
                        <div className="flex gap-5 text-xl">
                            <h1 className="font-bold">Find us :</h1>
                            <h1> Morocco, agadire, NR 31, </h1>
                        </div>
                        
                    </div>
                    <div>
                            <h1 className="text-orange-400 text-xl cursor-pointer">Red Morre</h1>
                    </div>
                </div>
        </div>
    </div>
    </footer>
    </>
  )
}

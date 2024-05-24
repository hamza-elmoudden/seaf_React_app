import React from 'react'

export const Pepol = () => {
  return (
    <>
    <section className="py-10 container mx-auto">
        <div>
              <div className="space-y-10 flex justify-center flex-col items-center">
                <div className="w-16 h-2 bg-orange-500 rounded-full"></div>
                <h1 className="text-5xl uppercase font-bold opacity-75"> Why people choose us? </h1>
                <h1 className="capitalize text-xl">Porro eveniet, autem ipsam vitae consequatur! </h1>
              </div>
        </div>
        <div className="py-20 flex gap-10 items-center justify-center md:flex-row flex-col md:px-0 px-10">
              <div className="md:w-1/3 w-full flex flex-col items-center gap-10 cursor-pointer">
                  <div className="w-40 text-center">
                      <img src={require("../image/icon-serv-1-256x256.png")} alt="server" />
                  </div>
                  <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-3xl capitalize font-bold">Menu for every taste </h1>
                    <p className="text-xl">Dolor sit amet, consectetur adipisicing elit et molestias possimus</p>
                  </div>
              </div>
              <div className="md:w-1/3 w-full flex flex-col items-center gap-10 cursor-pointer">
                  <div className="w-40 text-center">
                      <img src={require("../image/icon-serv-2-256x256.png")} alt="server" />
                  </div>
                  <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-3xl capitalize font-bold">Menu for every taste </h1>
                    <p className="text-xl">Dolor sit amet, consectetur adipisicing elit et molestias possimus</p>
                  </div>
              </div>
              <div className="md:w-1/3 w-full flex flex-col items-center gap-10 cursor-pointer">
                  <div className="w-40 text-center">
                      <img src={require("../image/icon-serv-3-256x256.png")} alt="server" />
                  </div>
                  <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-3xl capitalize font-bold">Menu for every taste </h1>
                    <p className="text-xl">Dolor sit amet, consectetur adipisicing elit et molestias possimus</p>
                  </div>
              </div>
        </div>
    </section>
    </>
  )
}

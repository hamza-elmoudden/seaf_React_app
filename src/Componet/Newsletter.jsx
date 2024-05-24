
export const Newsletter = () => {
  return (
    <>
        <section className='py-20 sube text-white'>
            <div className="container mx-auto">
                <div>
                    <div className='w-1/2 flex flex-col gap-20'>
                            <div className="flex items-center gap-5">
                                <div className="w-10 h-1 rounded-full bg-orange-500"></div>
                                <h1 className="text-xl capitalize">Newsletter</h1>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h1 className="text-4xl uppercase font-bold opacity-75">Subscribe our newsletter </h1>
                                <p className="font-bold opacity-55"> Rolorem, beatae dolorum, praesentium itaque et quam quaerat. </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input type="text" placeholder='Enter You Email' className="outline-none text-2xl uppercase py-4 px-10 border border-spacing-7 rounded-lg" />
                                <h1 className="text-2xl uppercase py-4 px-11 bg-orange-600 rounded-lg text-white">Subscribe</h1>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

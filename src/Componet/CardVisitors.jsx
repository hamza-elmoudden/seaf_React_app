import Avatar from '@mui/material/Avatar';


export const CardVisitors = (props) => {

    const {image} = props

  return (
    <>
        <section className="px-8 py-10 border border-spacing-3 rounded-lg hover:shadow-lg">
                <div className="flex flex-col gap-16">
                    <h1 className="text-2xl uppercase "> I'm delighted! </h1>
                    <p className="text-xl opacity-60 line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam hic et quia dolor quibusdam est sapiente fugiat blanditiis, sit reprehenderit!</p>
                    <div className="flex gap-8 items-center">
                        <Avatar style={{width:"60px",height:"60px"}} alt="Remy Sharp" src={image} />
                        <h1 className="text-xl capitalize font-bold">Paul Trueman</h1>
                    </div>
                </div>
        </section>
    </>
  )
}

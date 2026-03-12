import Card from '../organisms/ProductCart'
import '../../stylesheets/animations.css'

export const Home = () => {
    return (
        <div className=''>
            <div className='h-[80vh] flex justify-center items-center shadow-lg overflow-hidden Home flex-col'>
                <h1 className='text-7xl xl:text-9xl md:text-9xl lg:text-8xl text-shadow-md font-bold uppercase text-center texto-imagen'>
                    Quieres ser
                </h1>
                <div className="words h-[120px]">
                    <div className="words-inner text-7xl xl:text-9xl md:text-9xl lg:text-8xl text-shadow-md font-bold uppercase">
                        <span>visajoso?</span>
                        <span>tremendo?</span>
                        <span>lampara?</span>
                        <span>Un DURO?</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center mt-5 mb-5'>
                <hr className='w-1/3 border-2' />
                <h1 className='text-center text-5xl font-bold'>NEW MERCH</h1>
                <hr className='w-1/3 border-2' />
            </div>
            <div className='flex justify-center gap-[35px] xl:gap-[30px] md:gap-[30px] lg:gap-[30px] p-[30px_30px] xl:p-[60px_40px] lg:p-[60px_40px] md:p-[60px_40px] xl:flex-wrap md:flex-wrap lg:flex-wrap mt-10 mb-10 xl:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden overflow-x-auto flex-nowrap scroll-smooth scroll-custom'>
                <Card />
            </div>
        </div>
    )
}

export default Home
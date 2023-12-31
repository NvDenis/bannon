import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../../utils/convertToSlug';
import { Rating } from 'react-simple-star-rating';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import BOGO from '../../assets/img/non_son_sticker_non_son.png'

import { Fade } from "react-awesome-reveal";


type Props = {
    title: string,
    products: { id: string, url: string, name: string, price: string }[],
    isFeatured?: boolean,
    isBOGO?: boolean
}


export default function SlideProducts({ title, products, isFeatured = false, isBOGO = false }: Props) {

    const responsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },

    ]

    return (
        <div className="px-8  mt-20">
            <hr />
            <Fade duration={2000} fraction={0} triggerOnce direction="up">
                <div className="text-center text-xl lg:text-4xl uppercase font-medium mt-12">
                    {title}
                </div>
            </Fade>

            <div className="mt-6">
                {
                    products && products.length > 0 ?
                        <Slide slidesToScroll={1} canSwipe={false} duration={3000} slidesToShow={1} transitionDuration={500} autoplay={true} responsive={responsiveSettings}>
                            {/* {
                                products.map((e) => {
                                    const result = convertToSlug(e.name);
                                    return (
                                        <Link to={`hat/${result}?id=${e.id}`} className=' group flex flex-col justify-center  items-center ' key={e.name}>
                                            <div className="relative w-[160px] h-[200px]  md:w-[210px] md:h-[250px] bg-color-header lg:w-[215px] lg:h-[270px] py-6 ">
                                                <img src={e.url} alt="" className='h-full w-full group-hover:scale-[1.1] duration-1000' />
                                                <span className='absolute top-4 right-4'>
                                                    <Rating iconsCount={1} fillIcon={<AiFillHeart style={{ fontSize: '25px' }} />} emptyIcon={<AiOutlineHeart style={{ fontSize: '25px' }} />} fillColor='#e21e70' />
                                                </span>
                                                {
                                                    isFeatured && 
                                                    <span className='absolute top-4 left-4 uppercase text-[10px] border border-black block py-[1px] px-[2px]'>nổi bật</span>

                                                }

                                                {
                                                    isBOGO && <span className='absolute top-4 left-4'>
                                                        <img src={BOGO} alt="" />
                                                    </span>
                                                }
                                            </div>
                                            <div className="uppercase py-1 font-bold  hover:text-primary-color group-hover:text-primary-color duration-1000 text-[12px] ">{e.name}</div>
                                            <div className="text-primary-color text-[14px] ">{e.price} VNĐ</div>
                                        </Link>

                                    )
                                })
                            } */}
                            {
                                products.map((proEle) => {
                                    const result = convertToSlug(proEle.name);
                                    return (
                                        <Link to={`/hat/${result}?id=${proEle.id}`} key={proEle.name}>
                                            <div className='relative group cursor-pointer mr-4' key={proEle.id}>
                                                <div key={proEle.id} className='bg-color-header relative ' >
                                                    <div className="text-center group-hover:-translate-y-1 duration-1000" >
                                                        <img src={proEle.url} alt="" className='h-full max-h-[330px] w-full' />
                                                    </div>
                                                    <span className='absolute top-4 right-4'>
                                                        <Rating disableFillHover={true} iconsCount={1} fillIcon={<AiFillHeart style={{ fontSize: '25px' }} />} emptyIcon={<AiOutlineHeart style={{ fontSize: '25px' }} />} fillColor='#e21e70' />
                                                    </span>
                                                    {
                                                        isFeatured &&
                                                        <span className='absolute top-4 left-4 uppercase text-[10px] border border-black block py-[1px] px-[2px]'>nổi bật</span>

                                                    }

                                                    {
                                                        isBOGO && <span className='absolute top-4 left-4'>
                                                            <img src={BOGO} alt="" />
                                                        </span>
                                                    }
                                                </div>
                                                <div className="text-center uppercase py-1 font-bold  hover:text-primary-color group-hover:text-primary-color duration-1000 text-[12px] ">{proEle.name}</div>
                                                <div className="text-center text-primary-color text-[14px] ">{proEle.price} VNĐ</div>
                                            </div>
                                        </Link>

                                    )
                                })
                            }

                        </Slide>

                        :
                        <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

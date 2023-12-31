import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { callGetCategory } from '../../services/api';
import { convertToSlug } from '../../utils/convertToSlug';
import { Fade } from "react-awesome-reveal";



export default function MyProducts() {


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

    const [categorySlider, setCategorySlider] = useState<Array<{ url: string, name: string }>>([]);


    useEffect(() => {
        const getCategory = async () => {
            const res = await callGetCategory();

            if (res && res.data) {
                const data = res.data.map((e: { _id: string; thumb: string; name: string; }) => {
                    return {
                        id: e._id,
                        url: `${import.meta.env.VITE_URL_BACKEND}images/hat/${e.thumb}`,
                        name: e.name,
                    }
                })
                setCategorySlider(data);
            }
        }
        setTimeout(() => {
            getCategory();
        }, 500);

    }, [])



    return (
        <>
            <div className="px-8 mb-14">

                <Fade duration={2000} fraction={0} triggerOnce direction="up">
                    <h1 className="text-center text-xl lg:text-4xl uppercase font-medium animate-slide-up-on-load">sản phẩm nón sơn</h1>
                    <p className="text-center py-4 text-sm lg:text-base animate-slide-up-on-load">Chất lượng, đẳng cấp và tinh tế thể hiện ở từng chi tiết sản phẩm</p>
                </Fade>

                <div className="">
                    {
                        categorySlider && categorySlider.length > 0 ?
                            <Slide slidesToScroll={1} canSwipe={false} duration={4000} slidesToShow={1} transitionDuration={300} autoplay={true} responsive={responsiveSettings}>

                                {
                                    categorySlider.map((e) => {


                                        const result = convertToSlug(e.name);

                                        return (
                                            <Link to={`/category/${result}`} className='relative group' key={e.name}>
                                                {/* <div className=" w-[160px] h-[200px]  md:w-[210px] md:h-[250px] lg:w-[215px] lg:h-[300px] group-hover:-translate-y-1 duration-1000">
                                                    <img src={e.url} alt="" className='h-full w-full' />
                                                </div>
                                                <div className="uppercase inline-block py-2 font-bold text-lg hover:text-primary-color group-hover:text-primary-color duration-1000">{e.name}</div> */}

                                                <div className='relative group cursor-pointer mr-4' key={e.url}>
                                                    <div key={e.url} className='bg-color-header relative ' >
                                                        <div className="text-center group-hover:-translate-y-1 duration-1000  pt-[50%] h-[250px] md:h-[300px] " style={{
                                                            background: `url(${e.url})`,
                                                            backgroundSize: 'cover', // make sure the image covers the whole div
                                                            backgroundPosition: 'center', // center the image
                                                        }}>
                                                            {/* <img src={e.url} alt="" className='h-full w-full ' /> */}
                                                        </div>
                                                    </div>
                                                    <div className="uppercase inline-block py-2 font-bold text-lg hover:text-primary-color group-hover:text-primary-color duration-1000 ">{e.name}</div>
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
        </>
    )
}

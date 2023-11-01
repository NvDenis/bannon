import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { callGetCategory } from '../../services/api';
import { convertToSlug } from '../../utils/convertToSlug';
import { motion } from 'framer-motion';
import useOnScreen from '../../HookCustomize/useOnScreen'
import { useRef } from 'react'

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
                const data = res.data.map((e: any) => {
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

    const ref = useRef<HTMLDivElement | null>(null);
    const onScreen = useOnScreen(ref);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (onScreen && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [onScreen]);


    return (
        <>
            <div className="px-8 mb-14">
                <motion.div
                    ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-center text-xl lg:text-4xl uppercase font-medium animate-slide-up-on-load">sản phẩm nón sơn</h1>
                    <p className="text-center py-4 text-sm lg:text-base animate-slide-up-on-load">Chất lượng, đẳng cấp và tinh tế thể hiện ở từng chi tiết sản phẩm</p>
                </motion.div>

                <div className="">
                    {
                        categorySlider && categorySlider.length > 0 ?
                            <Slide slidesToScroll={1} canSwipe={false} duration={4000} slidesToShow={1} transitionDuration={300} autoplay={true} responsive={responsiveSettings}>

                                {
                                    categorySlider.map((e: any) => {


                                        const result = convertToSlug(e.name);

                                        return (
                                            <Link to={`${result}`} className='relative group' key={e.name}>
                                                <div className=" w-[160px] h-[200px]  md:w-[210px] md:h-[250px] lg:w-[215px] lg:h-[300px] group-hover:-translate-y-1 duration-1000">
                                                    <img src={e.url} alt="" className='h-full w-full' />
                                                </div>
                                                <div className="uppercase inline-block py-2 font-bold text-lg hover:text-primary-color group-hover:text-primary-color duration-1000">{e.name}</div>
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

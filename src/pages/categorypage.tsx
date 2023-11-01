import { useEffect, useState } from 'react';

import { Slide } from 'react-slideshow-image';

import { callGetCategoryById } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { convertToSlug } from '../utils/convertToSlug';

export default function CategoryPage() {
    const { categoryName } = useParams<{ categoryName: string }>();
    const [products, setProducts] = useState<Array<[]>>([])
    const [banner, setBanner] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        const getCategoryById = async () => {
            const res = await callGetCategoryById(categoryName);


            if (res && res.data) {
                const data = res.data.products.map((e: any) => {
                    return {
                        id: e._id,
                        img: [`${import.meta.env.VITE_URL_BACKEND}/images/hat/${e.thumbnail}`, ...e.slider.map((slide: any) => `${import.meta.env.VITE_URL_BACKEND}/images/hat/${slide}`)],
                        name: e.mainText,
                        price: e.price,
                    }
                })
                setProducts(data);
                setBanner(`${import.meta.env.VITE_URL_BACKEND}/images/hat/${res.data.banner}`);
                setTitle(res.data.title)
            }
        }
        getCategoryById();
    }, [])

    const responsiveSettings = [{
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }]

    const handleRedirect = (e: any) => {
        const slug = convertToSlug(e.name);
        // navigate(`${slug}?id=${e.id}`)
        navigate(`/hat/${slug}?id=${e.id}`)
    }

    return (
        <div className='px-6' >
            {/* banner */}
            <div className="relative">
                <img src={banner} alt="" className='' />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] text-2xl md:text-3xl lg:text-5xl text-white uppercase">{title}</p>
            </div>

            {/* filter */}
            <div className="flex justify-between py-4">
                <div className="uppercase">trạng thái <span>Tất cả</span></div>
                <div className="lg:hidden uppercase">bộ lọc</div>
                <div className="lg:hidden uppercase">mặc định</div>
                <div className="hidden lg:flex gap-8">
                    <p className='uppercase'>Nhóm sản phẩm</p>
                    <p className='uppercase'>chất liệu</p>
                    <p className='uppercase'>màu sắc</p>
                    <p className='uppercase'>khoảng giá</p>
                    <p className='uppercase'>sắp xếp: mặc định</p>
                </div>
            </div>

            {/* products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px]">
                {
                    products.map((proEle: any) => {
                        return (
                            <div className='bg-color-header relative group cursor-pointer' key={proEle.img[0]}>
                                <Slide slidesToScroll={1} slidesToShow={1} canSwipe={false} transitionDuration={500} autoplay={false} responsive={responsiveSettings}>
                                    {
                                        proEle?.img.map((e: any) => {
                                            return (
                                                <div key={e[0]}   >
                                                    <div className="text-center group-hover:-translate-y-1 duration-1000" onClick={() => handleRedirect(proEle)}>
                                                        <img src={e} alt="" className='h-full max-h-[330px] w-full' />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </Slide>
                                <div className="text-center">
                                    <p className="uppercase font-bold  text-xs lg:py-4 sm:text-sm group-hover:text-primary-color duration-1000">{proEle.name}</p>
                                    <p className="text-primary-color text-sm  text-[12px] py-4 sm:text-xs lg:text-base ">{proEle.price} VNĐ</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


            <div className="bg-color-header mt-1 text-center py-2">
                <button className="bg-black text-white py-2 px-6 hover:bg-primary-color duration-300">Hiện thêm</button>
            </div>

        </div>
    )
}

import { useEffect, useState } from 'react';
import nonvanhbanner from '../assets/img/non_vanh_banner.jpg'
import { Slide } from 'react-slideshow-image';
import nonvanh1 from '../assets/img/Nón vành MH002-NU1.png'
import nonvanh2 from '../assets/img/Nón vành XH001-3C-XH1.png'
import nonvanh3 from '../assets/img/Nón vành XH001-3D-NM.png'
import nonvanh4 from '../assets/img/Nón vành XH001-97-CM3.png'
import nonvanh5 from '../assets/img/Nón vành XH001-98-HG1.png'
import nonbucket1 from '../assets/img/Nón bucket MH009-XM1.png'
import nonbucket2 from '../assets/img/Nón bucket MH161B-XM2.png'
import nonbucket3 from '../assets/img/Nón-bucket MH009-NU1.png'

export default function CategoryPage() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

    const products = [
        {
            img: [
                nonvanh1,
            ],
            name: 'Nón vành MH002-NU1',
            price: '950.000'
        },
        {
            img: [
                nonvanh2,
            ],
            name: 'Nón vành XH001-3C-XH1',
            price: '950.000'
        },
        {
            img: [
                nonvanh3,
            ],
            name: 'Nón vành XH001-3D-NM',
            price: '950.000'
        },
        {
            img: [
                nonvanh4,
            ],
            name: 'Nón vành XH001-97-CM3',
            price: '950.000'
        },
        {
            img: [
                nonvanh5,
            ],
            name: 'Nón vành XH001-98-HG1',
            price: '950.000'
        },
        {
            img: [
                nonbucket1,
            ],
            name: 'Nón bucket MH009-XM1',
            price: '950.000'
        },
        {
            img: [
                nonbucket2,
            ],
            name: 'Nón bucket MH161B-XM2',
            price: '950.000'
        },
        {
            img: [
                nonbucket3,
            ],
            name: 'Nón-bucket MH009-NU1',
            price: '950.000'
        },

    ]

    return (
        <div className={`${isSticky ? 'pt-[120px]' : ''}`}>
            {/* banner */}
            <div className="relative">
                <img src={nonvanhbanner} alt="" className='' />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] text-2xl md:text-3xl lg:text-5xl text-white ">NÓN VÀNH</p>
            </div>

            {/* container  */}
            <div className="px-6">
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px]">
                    {
                        products.map(e => {
                            return (
                                <div className='bg-color-header'>
                                    <Slide slidesToScroll={1} slidesToShow={1} canSwipe={false} transitionDuration={500} autoplay={false} responsive={responsiveSettings}>
                                        {
                                            e.img.map(e => {
                                                return (
                                                    <div style={{
                                                        textAlign: 'center',
                       
                                                        fontSize: '30px'
                                                    }}>
                                                        <div className="h-[50%]">
                                                            <img src={e} alt="" className='h-full w-full' />
                                                        </div>

                                                    </div>
                                                )
                                            })
                                        }

                                    </Slide>
                                    <div className="text-center">
                                        <p className="uppercase font-bold py-4 ">{e.name}</p>
                                        <p className="text-primary-color text-sm py-4">{e.price} VNĐ</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

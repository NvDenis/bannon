import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import nonvanh1 from '../assets/img/Nón vành XH001-97-CM3.png'
import nonvanh2 from '../assets/img/Nón vành XH001-97-CM3-2.png'
import nonvanh3 from '../assets/img/Nón vành XH001-97-CM3-3.png'

export default function ProductPage() {

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
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]

    const product = {
        img: [
            nonvanh1,
            nonvanh2,
            nonvanh3
        ],
        name: 'Nón vành XH001-97-CM3',
        price: '950.000',
    }

    return (
        <div className={`${isSticky ? 'pt-[120px]' : ''}`}>
            <div className="">
                {/* img name price */}
                <div className="bg-color-header relative">
                    {/* img */}
                    <Slide slidesToScroll={1}  transitionDuration={800} slidesToShow={1} autoplay={false} responsive={responsiveSettings}>
                        {
                            product.img.map(e => {
                                return (
                                    <div className="flex justify-center" style={{
                                        fontSize: '30px'
                                    }}>
                                        <div className="text-center lg:h-[430px] lg:w-[480px]">
                                            <img src={e} alt="" className="w-full h-full" />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </Slide>
                    {/* name price */}
                    <div className="text-center lg:absolute lg:left-1/2  lg:top-1/2 transform lg:-translate-x-[50%] lg:-translate-y-[50%]">
                        <p className="relative uppercase text-lg  ">
                            <span className="inline-block relative">
                                {product.name}
                                <div className="absolute h-[1px] w-[100%] m-auto bg-black text-center"></div>
                            </span>

                        </p>

                        <p className="text-xl font-semibold py-3">{product.price} VNĐ </p>
                        <button className="bg-black text-white py-2 px-14 uppercase">đặt hàng</button>
                        <p className="py-5">Đã có 500 lượt mua hàng</p>
                    </div>
                </div>

                {/* info */}
                <div className="">
                    <div className="py-10 px-8">
                        <div className="">
                            <h2 className="uppercase text-lg font-semibold">chất liệu</h2>
                            <p className="py-1">Chất liệu chính: Cotton</p>
                            <p className="py-1">Đai nón: Cotton</p>
                            <p className="py-1">Da trang trí: da bò</p>
                        </div>
                        <p className="pt-8 pb-10 uppercase font-semibold text-lg">Chi tiết sản phẩm</p>
                        <div className="">
                            <p className="py-2 text-lg font-semibold">HƯỚNG DẪN SỬ DỤNG - BẢO QUẢN</p>
                            <h3 className="uppercase font-semibold text-lg">BẢO QUẢN</h3>
                            <p>Bảo quản sản phẩm nơi khô ráo, thoáng mát.</p>
                            <h3 className="uppercase font-semibold text-lg">quy trình giặt</h3>
                            <p>- Sản phẩm có thể giặt bằng phương pháp thông thường, tuy nhiên Quý khách vui lòng thực hiện đúng quy trình nếu không sẽ làm mất form dáng, lem, bạc màu,...</p>
                            <p>- Không ngâm sản phẩm</p>
                            <p>- Không giặt chung sản phẩm với quần áo và các chất liệu vải khác</p>
                            <p>- Không sử dụng dầu gội, sữa tắm, dầu xả, chất tẩy để giặt sản phẩm</p>
                            <p>Sau khi giặt xong Quý khách vui lòng mang sản phẩm đến Nón Sơn để ủi lại</p>
                            <h3 className="uppercase font-semibold text-lg">quy trình giặt</h3>
                            <p>Bước 1: Nhúng vào nước cho nón ướt đều</p>
                            <p>Bước 2: Pha thật loãng bột giặt vào nước theo tỉ lệ 1 muỗng cà phê bột giặt với 2 lít
                                nước. Hòa toan hoàn toàn bột giặt sau đó cho nón vào.
                            </p>
                            <p>Bước 3: Dùng bàn chải lông mềm (bàn chải đánh răng) chà nhẹ lên vết bẩn và vòng đai bên trong nón.</p>
                            <p>Bước 4: Xả lại với nước sạch, phơi dưới ánh nắng nhẹ.</p>
                            <ul className="list-disc">
                                <h3 className="uppercase font-semibold text-lg ">CÁCH PHƠI NÓN:</h3>
                                <li className="ml-4">Trước khi phơi giũ nhẹ nón cho ráo nước, vuốt vành thật thẳng.</li>
                                <li className="ml-4">Phơi dưới ánh nắng nhẹ.</li>
                                <li className="ml-4">Dùng tay nhẹ nhàng chỉnh form để nón không bị nhăn và sử dụng kẹp phơi kẹp vào mạc nón.</li>
                            </ul>
                        </div>
                    </div>

                    {/* rate */}
                    <div className=" px-8">
                        <span className="uppercase text-lg">đánh giá</span>
                        <div className="grid grid-cols-[250px, 100%] ">
                            <div className="  bg-red-500 h-10">a</div>
                            <div className=" bg-black h-10">a</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

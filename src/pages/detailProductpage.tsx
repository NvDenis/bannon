import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";

import { callGetProductByID } from "../services/api";
import { useLocation } from "react-router-dom";
import RatingComponent from "../components/rating/rating";

export default function DetailProductPage() {

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
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);
    const [dataProduct, setDataProduct] = useState<{
        img: string[];
        name: string;
        price: string;
        sold: number;
    }>({
        img: [""],
        name: '',
        price: '',
        sold: 0,
    });

    // Sử dụng useLocation để lấy thông tin về URL hiện tại
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // Lấy giá trị 'id' từ tham số truy vấn (query parameter) của URL
    const id = searchParams.get('id') ?? '';

    useEffect(() => {
        const getDetailProduct = async () => {
            const res = await callGetProductByID(id);

            if (res && res.data) {
                const data = {
                    img: [
                        `${import.meta.env.VITE_URL_BACKEND}/images/hat/${res.data.thumbnail}`,
                        ...res.data.slider.map((e: any) => `${import.meta.env.VITE_URL_BACKEND}/images/hat/${e}`),
                    ],
                    name: res.data.mainText,
                    price: res.data.price,
                    sold: res.data.sold,
                }
                setDataProduct(data)
                // Khi tất cả hình ảnh đã được tải, cập nhật trạng thái
                setIsImagesLoaded(true);
            }
        }

        getDetailProduct();
    }, [])

    return (
        <div className="">
            {/* img name price */}
            <div className="bg-color-header relative">

                {
                    isImagesLoaded && (
                        <Slide slidesToScroll={1} transitionDuration={500} slidesToShow={2} canSwipe={false} autoplay={false} responsive={responsiveSettings} >
                            {
                                dataProduct && dataProduct.img.length > 2 ?
                                    dataProduct?.img?.map((image) => (
                                        <div className="flex justify-center cursor-pointer " key={image}>
                                            <div className="text-center lg:h-[430px] lg:w-[480px]">
                                                <img
                                                    src={image}
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                    style={{ maxHeight: '430px' }}
                                                />
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <div className="flex justify-center cursor-pointer " >
                                        <div className="text-center lg:h-[430px] lg:w-[480px]">
                                            <img
                                                alt=""
                                                className="w-full h-full object-contain"
                                                style={{ maxHeight: '430px' }}
                                            />
                                        </div>
                                    </div>
                            }
                        </Slide>
                    )
                }

                {/* name price */}
                <div className="text-center lg:absolute lg:left-1/2  lg:top-1/2 transform lg:-translate-x-[50%] lg:-translate-y-[50%]">
                    <div className="relative uppercase text-lg  ">
                        <span className="inline-block relative">
                            {dataProduct.name}
                            <div className="absolute h-[1px] w-[100%] m-auto bg-black text-center"></div>
                        </span>
                    </div>

                    <p className="text-xl font-semibold py-3">{dataProduct.price} VNĐ </p>
                    <button className="bg-black text-white py-2 px-14 uppercase hover:bg-primary-color duration-300">đặt hàng</button>
                    <p className="py-5">Đã có <span>{dataProduct.sold}</span> lượt mua hàng</p>
                </div>
            </div>

            {/* info */}
            <div className="lg:w-full lg:max-w-[850px] lg:m-auto">
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

                <RatingComponent />
            </div>
        </div>
    )
}
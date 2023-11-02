import SimpleImageSlider from "react-simple-image-slider";
import slider1 from '../assets/img/1.jpg'
import slider2 from '../assets/img/2.jpg'
import slider3 from '../assets/img/3.jpg'
import slogan from '../assets/img/slogan_fix_1.svg'
import MyProducts from "../components/myProducts/myProducts";
import SlideProducts from "../components/slideProducts/slideProducts";
import { useEffect, useState } from "react";
import { callGetBOGOProducts, callGetFeaturedProducts } from "../services/api";

export default function HomePage() {

  const images = [
    { url: slider1 },
    { url: slider2 },
    { url: slider3 },
  ];

  

  const [featuredProducts, setFeaturedProducts] = useState<Array<{ id: String, url: string, name: string, price: string }>>([]);
  const [BOGOProducts, setBOGOProducts] = useState<Array<{ id: String, url: string, name: string, price: string }>>([]);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      const res = await callGetFeaturedProducts();

      if (res && res.data) {
        const data = res.data.map((e: any) => {
          return {
            id: e._id,
            url: `${import.meta.env.VITE_URL_BACKEND}images/hat/${e.thumbnail}`,
            name: e.mainText,
            price: e.price,
          }
        })
        setFeaturedProducts(data);
      }
    }

    const getBOGOProducts = async () => {
      const res = await callGetBOGOProducts();

      if (res && res.data) {
        const data = res.data.map((e: any) => {
          return {
            id: e._id,
            url: `${import.meta.env.VITE_URL_BACKEND}images/hat/${e.thumbnail}`,
            name: e.mainText,
            price: e.price,
          }
        })
        setBOGOProducts(data);
      }
    }

    setTimeout(() => {
      getFeaturedProducts();
      getBOGOProducts();
    }, 500);

  }, [])



  return (
    <div className={`min-h-screen`} >

      {/* slogan */}
      <div className={`h-[44px] flex justify-center  animate-slideUpOnLoad`}
       
      >
        <img src={slogan} alt="" className='h-full' />
      </div>

      {/* image slider */}
      <div className="px-3">
        <div className="pt-[55%] w-full relative mt-3 " >
          <SimpleImageSlider
            width={'100%'}
            height={'95%'}
            images={images}
            showBullets={true}
            showNavs={true}
            style={{ position: "absolute", top: '0', left: 0, background: 'white' }}
          />
        </div>
      </div>


      {/* sản phẩm Nón Sơn */}
      <MyProducts />

      {/* sản phẩm nổi bật */}
      <SlideProducts title="sản phẩm nổi bật" products={featuredProducts} isFeatured={true} />


      <SlideProducts title="mua 1 tặng 1" products={BOGOProducts} isBOGO={true} />



    </div>
  )
}

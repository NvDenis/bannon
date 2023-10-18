import SimpleImageSlider from "react-simple-image-slider";
import slider1 from '../assets/img/1.jpg'
import slider2 from '../assets/img/2.jpg'
import slider3 from '../assets/img/3.jpg'
import ProductSlider from "../components/productSlider/productSlider";
import {useEffect, useState} from 'react'
import { callGetCategory } from "../services/api";

export default function HomePage() {

  const [categorySlider, setCategorySlider] = useState([])

  const images = [
    { url: slider1 },
    { url: slider2 },
    { url: slider3 },
  ];

  useEffect(() => {
    const getCategory = async () => {
      const res = await callGetCategory();

      if(res && res.data) {
        setCategorySlider(res.data);
      }
    }

    getCategory();
  }, [])
  

  return (
    <div className="min-h-screen " >
      {/* image slider */}
      <div className="pt-[75%] w-full relative mt-2">
        <SimpleImageSlider
          width={'100%'}
          height={'100%'}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{ objectFit: 'cover', position: "absolute", top: 0, left: 0 }}
        />
      </div>

      {/* product' nonson */}
      <div className="mt-10">
        <h1 className="text-center text-4xl uppercase font-medium">sản phẩm nón sơn</h1>
        <p className="text-center py-4">Chất lượng, đẳng cấp và tinh tế thể hiện ở từng chi tiết sản phẩm</p>

        {/* <SimpleImageSlider
          width={'100%'}
          height={'400px'}
          images={images}
          showBullets={true}
          showNavs={true}
        /> */}
        <ProductSlider categorySlider={categorySlider}/>
      </div>
      
    </div>
  )
}

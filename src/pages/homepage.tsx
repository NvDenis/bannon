import SimpleImageSlider from "react-simple-image-slider";
import slider1 from '../assets/img/1.jpg'
import slider2 from '../assets/img/2.jpg'
import slider3 from '../assets/img/3.jpg'
import ProductSlider from "../components/productSlider/productSlider";
import { useEffect, useState } from 'react'
import { callGetCategory } from "../services/api";

export default function HomePage() {

  const [categorySlider, setCategorySlider] = useState<Array<{ url: string, name: string }>>([]);


  const images = [
    { url: slider1 },
    { url: slider2 },
    { url: slider3 },
  ];

  useEffect(() => {
    const getCategory = async () => {
      const res = await callGetCategory();

      if (res && res.data) {

        // const data = res.data.map((e: any) => {
        //   return {
        //     url: `http://localhost:3000/images/hat/${e.thumb}`,
        //     name: e.name,
        //   }
        // })

        // console.log('check data ', data);

        const img = [
          {
            url: "http://localhost:3000/images/hat/1697617989071-non-da.jpg",
            name: "nón da",
          },

          {
            url: "http://localhost:3000/images/hat/1697618096850-non-tre-em.png",
            name: "nón trẻ em",
          },

          {
            url: "http://localhost:3000/images/hat/1697618122449-non-bao-hiem.jpg",
            name: "nón bảo hiểm",
          },

          {
            url: "http://localhost:3000/images/hat/1697618139157-non-ket.jpg",
            name: "nón kết",
          },

          {
            url: "http://localhost:3000/images/hat/1697617989071-non-da.jpg",
            name: "nón da",
          },

          {
            url: "http://localhost:3000/images/hat/1697618144048-non-phot.jpg",
            name: "nón phớt",
          },

          {
            url: "http://localhost:3000/images/hat/1697618151536-non-snapback.jpg",
            name: "nón snapback",
          },

          {
            url: "http://localhost:3000/images/hat/1697618175844-nonvanh1.jpg",
            name: "nón vành",
          },

          {
            url: "http://localhost:3000/images/hat/1697618180525-nonvanh2.jpg",
            name: "nón đan tay",
          },
        ]
        setCategorySlider(img);
      }
    }

    getCategory();
  }, [])


  return (
    <div className="min-h-screen " >
      {/* image slider */}
      <div className="px-3">
        <div className="pt-[55%] w-full relative mt-3 " >
          <SimpleImageSlider
            width={'100%'}
            height={'95%'}
            images={images}
            showBullets={true}
            showNavs={false}
            style={{ position: "absolute", top: '0', left: 0, background: 'white' }}
          />
        </div>
      </div>


      {/* product' nonson */}
      <div className="px-8 mb-14">
        <h1 className="text-center text-xl lg:text-4xl uppercase font-medium">sản phẩm nón sơn</h1>
        <p className="text-center py-4 text-sm">Chất lượng, đẳng cấp và tinh tế thể hiện ở từng chi tiết sản phẩm</p>


        <ProductSlider categorySlider={categorySlider} />

      </div>
      <hr />

      {/* product' nonson */}
      <div className="px-8 mb-14 mt-14">
        <h1 className="text-center text-xl lg:text-4xl uppercase font-medium">sản phẩm nón sơn</h1>
        <p className="text-center py-4 text-sm">Chất lượng, đẳng cấp và tinh tế thể hiện ở từng chi tiết sản phẩm</p>


        <ProductSlider categorySlider={categorySlider} />

      </div>
      <hr />

      {/* product' nonson */}
      <div className="px-8 mb-14 mt-14">
        <h1 className="text-center text-xl lg:text-4xl uppercase font-medium">sản phẩm nón sơn</h1>
        <p className="text-center py-4 text-sm">Chất lượng, đẳng cấp và tinh tế thể hiện ở từng chi tiết sản phẩm</p>


        <ProductSlider categorySlider={categorySlider} />

      </div>
      <hr />







    </div>
  )
}

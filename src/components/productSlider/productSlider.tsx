import 'react-slideshow-image/dist/styles.css'
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';

interface Props {
  categorySlider: Array<any>,
}

export default function ProductSlider({ categorySlider }: Props) {
  console.log('check category', categorySlider);
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ];

  return (
    <div className="">

      <Slide slidesToScroll={1} slidesToShow={1} indicators={false} autoplay={true} responsive={
        [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
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

        ]}>
        {/* <div style={{
          textAlign: 'center',
          background: 'red',
          padding: '200px 0',
          fontSize: '30px'
        }}>
          First Slide
        </div>
        
        <div style={{
          textAlign: 'center',
          background: 'yellow',
          padding: '200px 0',
          fontSize: '30px'
        }}>Third Slide</div>
        <div style={{
          textAlign: 'center',
          background: 'green',
          padding: '200px 0',
          fontSize: '30px'
        }}>Fourth Slide</div> */}

        {
          categorySlider && categorySlider.map((e: any) => {
            return <div>

              <div className=" w-[150px] h-[200px]  md:w-[200px] md:h-[250px]     lg:w-[250px] lg:h-[300px]">
                <img src={e.url} alt="" className='h-full w-full' />
              </div>
              <div className="uppercase inline-block py-2 font-bold text-lg">{e.name}</div>
            </div>
          })
        }


      </Slide>
    </div>
  )
}

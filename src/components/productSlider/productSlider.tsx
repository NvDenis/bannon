
interface Props {
  categorySlider: Array<any>,
}

export default function ProductSlider({ categorySlider }: Props) {

  console.log('check cate >>> ', categorySlider);

  return (
    <div className="w-full flex overflow-scroll   ">
      {
        categorySlider && categorySlider.length > 0 ? categorySlider.map((e: any) => {
          return (
            <div className="w-full min-w-[200px] h-[auto]" key={e._id}>
              <div className="">
                <img src={`http://localhost:3000/images/hat/${e.thumb}`} alt="" />
              </div>
              <div className="">
                <span></span>
              </div>
            </div>
          )
        }) : <></>
      }
    </div>
  )
}

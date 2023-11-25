import { useEffect, useState } from 'react'
import { callGetHistory } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { convertToSlug } from '../utils/convertToSlug'


interface IHistory {
  id: string,
  thumbnail: string,
  productName: string,
  quantity: number,
  price: number,
}


const HistoryPage = () => {
  const [history, setHistory] = useState<IHistory[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const getHistory = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await callGetHistory();

      if (res && res.success === true) {
        setHistory(res.data);
      }

    }

    getHistory();
  }, [])

  return (
    <div>
      <div className="bg-color-header uppercase text-3xl flex justify-center items-center py-8 font-semibold">
        lịch sử dặt hàng
      </div>

      <div className="pt-[40px] pb-[30px]">
        <div className="w-full max-w-[1190px] m-auto  px-[10px]">
          <div className="">
            {/* head */}
            <div className="flex pb-2 border-b border-black">
              <div className="w-[50%] text-lg">Sản phẩm</div>
              <div className="hidden md:block w-[20%] text-lg">Lựa chọn</div>
              <div className="hidden md:block w-[10%] text-lg">Số lượng</div>
              <div className="hidden md:block w-[20%] text-right text-lg">Thành tiền</div>
            </div>
            {/* body */}

            <div className="">
              {
                history && history.map((e) => {
                  return (
                    <div className='grid grid-cols-3 md:grid-cols-6 border-b border-gray-300 relative '>
                      <div className=' col-span-2 md:col-span-3 shrink-1 flex'>
                        <img src={e.thumbnail} alt="" className='w-24 md:w-32' />
                        <div className="flex flex-col justify-center">
                          <p className="text-base md:text-xl uppercase">{e.productName}</p>
                          <p className="text-primary-color ">{e.price} vnd</p>
                        </div>
                      </div>
                      <div className='hidden md:flex flex-col  justify-center '>
                        <div className="">Màu:</div>
                        <div className="">Size:</div>
                      </div>
                      <div className='hidden md:flex  text-center justify-center items-center'>
                        x{e.quantity}
                      </div>
                      <div className=' font-bold text-base md:text-xl flex items-center justify-end'>
                        {e.price} vnd
                      </div>

                      <div className="absolute right-0 bottom-0 w-30 md:w-48 bg-red-500 ">
                        <button className="w-full  bg-color-header py-2 uppercase px-8 font-light hover:bg-primary-color hover:text-white duration-500" onClick={() => {
                          const result = convertToSlug(e.productName);
                          navigate(`/hat/${result}?id=${e.id}`)
                        }} >Mua lại</button>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HistoryPage
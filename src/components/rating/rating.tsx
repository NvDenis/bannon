import { Rating } from 'react-simple-star-rating'

export default function RatingComponent() {
    return (
        <>

            <div className="px-8 mb-24">
                <span className="uppercase text-lg font-semibold">đánh giá</span>

                <div className="grid grid-cols-1 sm:grid-cols-3 border mt-3">
                    <div className=" border-1 py-2 flex flex-col justify-center items-center">
                        <div className='text-[25px] font-bold'>0/5</div>
                        <Rating size={20} SVGclassName="inline-block"  />
                        <div className='text-slate-400'>(0 đánh giá)</div>
                    </div>
                    <div className=" sm:col-span-2 lg:col-span-1 border lg:py-[20px] ">
                        <div className="flex items-center px-4 gap-2 mb-[2px]">
                            <div className='w-[40px] text-sm '>5 sao</div>
                            <div className="h-[10px] bg-slate-200 grow rounded-sm"></div>
                            <div className='w-[40px] text-sm text-slate-300'>0</div>
                        </div>
                        <div className="flex items-center px-4 gap-2 mb-[2px]">
                            <div className='w-[40px] text-sm '>4 sao</div>
                            <div className="h-[10px] bg-slate-200 grow rounded-sm"></div>
                            <div className='w-[40px] text-sm text-slate-300'>0</div>
                        </div>
                        <div className="flex items-center px-4 gap-2 mb-[2px]">
                            <div className='w-[40px] text-sm '>3 sao</div>
                            <div className="h-[10px] bg-slate-200 grow rounded-sm"></div>
                            <div className='w-[40px] text-sm text-slate-300'>0</div>
                        </div>
                        <div className="flex items-center px-4 gap-2 mb-[2px]">
                            <div className='w-[40px] text-sm '>2 sao</div>
                            <div className="h-[10px] bg-slate-200 grow rounded-sm"></div>
                            <div className='w-[40px] text-sm text-slate-300'>0</div>
                        </div>
                        <div className="flex items-center px-4 gap-2 mb-[2px]">
                            <div className='w-[40px] text-sm '>1 sao</div>
                            <div className="h-[10px] bg-slate-200 grow rounded-sm"></div>
                            <div className='w-[40px] text-sm text-slate-300'>0</div>
                        </div>
                        
                    </div>
                    <div className="sm:col-span-4 lg:col-span-1 border py-[10px] px-[15px] lg:flex lg:items-center ">
                        <button className="bg-black text-white text-base w-full  rounded uppercase font-semibold md:py-1 lg:py-2 hover:bg-primary-color duration-500">Viết đánh giá của bạn</button>
                    </div>
                </div>
            </div>
        </>
    )
}

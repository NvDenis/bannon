

interface DrawerProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}


export default function DrawerCart({ isOpen, setIsOpen }: DrawerProps) {
    return (
        <main
            className={
                " fixed overflow-hidden z-[22] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-300 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-[360px] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <div className="h-screen overflow-y-scroll">
                    {/* header nav */}
                    <div className="py-4 px-8 flex justify-between">
                        <h1 className="uppercase font-semibold">Giỏ hàng của bạn</h1>
                        {/* close */}
                        <span className="relative" onClick={() => setIsOpen(false)}>

                            <div className='absolute bg-black -right-2 top-[0] w-6 h-6 rounded-2xl cursor-pointer' onClick={() => setIsOpen(false)}>
                                <span className='absolute w-[15px] h-[2px] bg-white top-[10px] left-[5px] rotate-45 after:content-[""] after:absolute after:w-[15px] after:h-[2px] after:bg-white after:top-[0px] after:rotate-90 '  ></span>
                            </div>
                        </span>
                    </div>
                    <hr />

                    <div className="">
                        <h2 className="text-primary-color text-center py-4">Giỏ hàng của bạn chưa có sản phẩm nào</h2>
                    </div>

                </div>
            </section>

        </main>
    )
}

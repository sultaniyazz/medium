import { CgClose } from "react-icons/cg";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authorSelect, sideBar } from "../store/action";

const SideBar = () => {

    const newObject = [1, 2, 3, 4, 5, 6]


    const dispatch = useDispatch()
    const data = useSelector(state => state.dataAuthors)
    const loading = useSelector(state => state.loadingAuthors)
    const sidebar = useSelector(state => state.sidebar)


    return (
        <div className={`${sidebar ? "right-0" : "right-[-100%]"} z-20 fixed bg-gray-100 duration-500  p-[1vw] border-l-[.1vw] border-l-black dark:border-l-ligthBlack dark:border-lightBlack w-[45vw] h-[100vh] dark:bg-black`}>
            <div className='flex flex-col py-[1vw] px-[.5vw] overflow-y-auto'>
                <button className='h-[8vw] flex items-center animate-pulse'><CgClose onClick={() => dispatch(sideBar())} className="dark:text-gray-200 text-[4vw] active:scale-95 dark:bg-ligthBlack bg-white rounded-[.5vw]" /></button>
                {loading ?
                    <div className='flex-col text-[1.3vw] flex justify-center gap-[1vw] items-center'>
                        {newObject.map(item => (
                            <div key={item} className='p-[.5vw] rounded-[.5vw] w-full border-[.1vw] dark:border-black animate-pulse'>
                                <div className='w-full h-ful'>
                                    <div className='flex items-center gap-[1vw] border-b-[.1vw] py-[.2vw]'>
                                        <div className='rounded-full w-[2.5vw] h-[2.5vw] object-cover bg-gray-200 flex justify-center items-center'></div>
                                        <h1 className='w-[10vw] h-[.5vw] rounded-full bg-gray-200'></h1>
                                    </div>

                                    <div className='py-[.5vw] px-[.5vw]'>
                                        <h1 className='w-[10vw] h-[.5vw] rounded-full bg-gray-200'></h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div onClick={() => dispatch(sideBar())} className="flex flex-col gap-[.5vw] ">
                        {
                            data?.map((Author => (
                                <div key={Author.id} onClick={() => dispatch(authorSelect(Author.id))} className='rounded-[2vw] active:scale-[.95] duration-150 dark:bg-ligthBlack dark:border-black dark:text-white hover:dark:bg-hoverBlack border-b-[.1vw] border-gray-300 hover:bg-gray-100 p-[.5vw] flex items-center justify-between'>
                                    <div className='w-[80vw] h-full'>
                                        <div className='flex items-center gap-[1vw] border-b-[.1vw] border-gray-300 dark:border-black py-[.2vw]'>
                                            <img className='rounded-full w-[2.5vw] h-[2.5vw] max-sm:w-[6vw] max-sm:h-[6vw] object-cover my-[.5vw]' src={Author.avatar} alt="" />
                                            <h1 className='font-bold max-sm:text-[2.4vw]'>{Author.fullName}</h1>
                                        </div>
                                        <div className='py-[1vw] max-sm:py-[1.5vw] px-[.5vw]'>
                                            <h1 className='max-sm:text-[2.5vw] font-mono'>{Author.job}</h1>
                                        </div>
                                    </div>
                                </div>
                            )))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default SideBar

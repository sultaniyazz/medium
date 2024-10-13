import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authorSelect } from '../../store/action'

const newObject = [1, 2, 3, 4, 5, 6]

const Authors = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataAuthors)
    const loading = useSelector(state => state.loadingAuthors)
    return (
        <div className='flex flex-col max-sm:hidden w-[25%] py-[1vw] px-[.5vw] overflow-y-auto'>
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
                <div className="flex flex-col gap-[.5vw]">
                    {
                        data?.map((Author => (
                            <div key={Author.id} onClick={() => dispatch(authorSelect(Author.id))} className='rounded-[.5vw] active:scale-[.95] duration-150 dark:bg-ligthBlack dark:border-black dark:text-white hover:dark:bg-hoverBlack border-[.1vw] hover:bg-gray-100 p-[.5vw] flex items-center justify-between'>
                                <div className='w-[70vw] h-full'>
                                    <div className='flex items-center gap-[.5vw] border-b-[.1vw] dark:border-black py-[.2vw]'>
                                        <img className='rounded-full w-[2.5vw] h-[2.5vw] object-cover' src={Author.avatar} alt="" />
                                        <h1 className='font-bold'>{Author.fullName}</h1>
                                    </div>
                                    <div className='py-[.5vw] px-[.5vw]'>
                                        <h1>{Author.job}</h1>
                                        <p>{Author.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        )))
                    }
                </div>
            }
        </div>
    )
}

export default Authors

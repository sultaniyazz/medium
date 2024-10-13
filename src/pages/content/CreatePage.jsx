import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import RichText from '../RichText'
import { useSelector } from 'react-redux'
import axios from 'axios';

const CreatePage = () => {

    function convertToSlug(Text) {
        return Text.toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-");
    }
    const validationSchema = Yup.object({
        title: Yup.string().required("title is required").max(50, "max 50 character").min(10, "min 10 character"),
        excerpt: Yup.string().required("excerpt is required").max(200, "max 200 character").min(10, "min 10 character"),
        content: Yup.string().required("content is required").max(800, "max 800 character").min(10, "min 10 character"),
        image: Yup.string().required("image is required").url("Valid URL"),
        authorId: Yup.number().required("image is required"),
    })
    const authors = useSelector(state => state.dataAuthors)
    return (
        <Formik
            initialValues={{
                title: '',
                excerpt: '',
                content: '',
                image: '',
                authorId: undefined,
            }}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const res = await axios.post('https://posts-db.onrender.com/posts', { ...values, slug: convertToSlug(values.title), authorId: +values.authorId })
                    resetForm()
                } catch (err) {
                    console.log(err);

                }
            }}
            validationSchema={validationSchema}>
            {(props) => (
                <div className=' dark:text-white justify-center flex'>
                    <form onSubmit={props.handleSubmit} className='flex flex-col py-[2vw] h-[90vh] max-sm:h-[92vh] overflow-y-auto w-[60vw] max-sm:w-[80vw] px-[1vw] gap-[2vw] text-[1.2vw]'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-[.5vw]'>
                                <label htmlFor="title" className='font-semibold text-[1.5vw] max-sm:text-[4vw] font-mono'>Title</label>
                                <input onChange={props.handleChange} name='title' id='title' className='border-[.1vw] border-gray-400 dark:bg-ligthBlack dark:border-gray-500 w-full outline-none py-[.8vw] max-sm:py-[3vw] px-[2vw] max-sm:placeholder:text-[3vw] max-sm:text-[3vw] rounded-[.5vw]' type="text" placeholder='Enter the title' />
                            </div>
                            {props.errors.title && props.touched.title && <span className='text-red-500'>{props.errors?.title}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-[.5vw]'>
                                <label htmlFor="excerpt" className='font-semibold text-[1.5vw] max-sm:text-[4vw] font-mono '>Excerpt</label>
                                <textarea onChange={props.handleChange} name='excerpt' id='excerpt' className='border-[.1vw] border-gray-400 h-[15vw] max-sm:h-[25vw] resize-none dark:bg-ligthBlack dark:border-gray-500 w-full outline-none py-[.8vw] max-sm:py-[3vw] px-[2vw] max-sm:placeholder:text-[3vw] max-sm:text-[3vw] rounded-[.5vw]' type="text" placeholder='Enter the excerpt' />
                            </div>
                            {props.errors.excerpt && props.touched.excerpt && <span className='text-red-500'>{props.errors?.excerpt}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-[.5vw]'>
                                <label className='font-semibold text-[1.5vw] max-sm:text-[4vw] font-mono '>Content</label>
                                <RichText props={props} />
                            </div>
                            {props.errors.content && props.touched.content && <span className='text-red-500'>{props.errors?.content}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-[.5vw]'>
                                <label htmlFor="image" className='font-semibold text-[1.5vw] max-sm:text-[4vw] font-mono '>Image</label>
                                <input onChange={props.handleChange} name='image' id='image' className='border-[.1vw] border-gray-400 dark:bg-ligthBlack dark:border-gray-500 w-full outline-none py-[.8vw] max-sm:py-[3vw] px-[2vw] max-sm:placeholder:text-[3vw] max-sm:text-[3vw] rounded-[.5vw]' type="text" placeholder='Image url' />
                            </div>
                            {props.errors.image && props.touched.image && <span className='text-red-500'>{props.errors?.image}</span>}
                        </div>
                        <div>
                            <label htmlFor="author" className='font-semibold text-[1.5vw] max-sm:text-[4vw] font-mono'>Author</label>
                            <select id='author' onChange={props.handleChange} name='authorId' className='w-full dark:bg-ligthBlack rounded-[.5vw] px-[1vw] border-[.1vw] border-gray-400 py-[.5vw] max-sm:py-[3vw] max-sm:text-[2.5vw]'>
                                {authors?.map(author => (
                                    <option key={author.id} value={author.id}>{author.fullName}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex justify-end'>
                            <button type='submit' className='rounded-[1vw] py-[.7vw] max-sm:w-[30vw] max-sm:py-[1.5vw] max-sm:text-[3vw] w-[15vw] 3g-teal-400 hover:bg-teal-500 bg-teal-400 font-bold text-white active:scale-95 '>Create</button>
                        </div>
                    </form >
                </div>
            )}
        </Formik>
    )
}

export default CreatePage


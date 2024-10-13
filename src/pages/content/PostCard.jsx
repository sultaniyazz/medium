import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../images/images.jpg';
import { useSelector } from 'react-redux';

const PostCard = ({ post }) => {
    const authors = useSelector(state => state.dataAuthors);
    const img = (authorId) => {
        const author = authors.find(author => author.id === authorId);
        return author ? author.avatar : img1;
    }
    const nameAuthor = (authorId) => {
        const author = authors.find(author => author.id === authorId);
        return author ? author.fullName : img1;
    }
    return (
        <Link key={post.id} to={`/posts/${post.slug}`} className='border-[.1vw] rounded-[.5vw] dark:bg-ligthBlack dark:border-black dark:text-white hover:dark:bg-hoverBlack hover:bg-gray-100 p-[.5vw] flex items-center justify-between'>
            <div className='w-[70vw] h-full'>
                <div className='flex items-center gap-[.5vw] border-b-[.1vw] dark:border-black py-[.5vw]'>
                    <img className='rounded-full w-[2.5vw] h-[2.5vw] max-sm:w-[6vw] max-sm:h-[6vw] object-cover' src={img(post.authorId)} alt="Author Avatar" />
                    <h1 className='font-bold max-sm:text-[2.4vw]'>{nameAuthor(post.authorId)}</h1>
                </div>
                <div className='py-[.5vw] px-[.5vw]'>
                    <h1 className="font-semibold py-[.1vw] max-sm:text-[2.4vw]">{post.title}</h1>
                    <p className='max-sm:text-[1.6vw]' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
            </div>
            <div className='flex justify-end h-full '>
                <img className='w-[30vw] object-contain bg-center' src={post.image} alt="Post" />
            </div>
        </Link>
    )
}

export default PostCard

import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img1 from '../../images/images.jpg';

const PostDetail = () => {
    const img = (authorId) => {
        const author = authors.find(author => author.id === authorId);
        return author ? author.avatar : img1;
    }
    const nameAuthor = (authorId) => {
        const author = authors.find(author => author.id === authorId);
        return author ? author.fullName : img1;
    }
    const jobAuthor = (authorId) => {
        const author = authors.find(author => author.id === authorId);
        return author ? author.job : img1;
    }

    const authors = useSelector(state => state.dataAuthors);
    const { slug } = useParams()
    const navigate = useNavigate()

    const post = useSelector(state => state.dataPosts.find(item => item.slug === slug))
    const Home = () => {
        navigate('/')
    }
    return (
        <div className='dark:bg-black overflow-y-auto py-[1vw] max-sm:py-[2vw] dark:text-white w-[100vw] h-[90vh] max-sm:h-[92vh] px-[3vw]'>
            <div className="flex items-center gap-[1vw]">
                <button onClick={() => Home()} className="w-[3vw] h-[3vw] max-sm:w-[10vw] max-sm:h-[10vw] my-[1vw] border-[.1vw] active:scale-95 shadow-md rounded-full flex justify-center items-center text-[2vw] max-sm:text-[5vw] font-bold"><BsArrowLeftShort /></button>
                <div className='flex items-center gap-[1vw] dark:border-black py-[.5vw] max-sm:py-[2vw]'>
                    <img className='rounded-full w-[3vw] h-[3vw] max-sm:w-[10vw] max-sm:h-[10vw]  object-cover' src={img(post.authorId)} alt="Author Avatar" />
                    <span>
                        <h1 className='font-bold text-[1.5vw] max-sm:text-[4vw] items-end'>{nameAuthor(post.authorId)}</h1>
                        <h1 className='font-mono text-[1vw] max-sm:text-[3vw]  items-end font-semibold opacity-70'>{jobAuthor(post.authorId)}</h1>
                    </span>
                </div>
            </div>
            {
                <div className=" flex flex-col items-center gap-[1vw] py-[1vw]">
                    <h1 className="text-[2vw]c max-sm:text-[5vw]  font-bold flex w-full py-[1vw] border-b-[.1vw] dark:border-b-ligthBlack border-black">{post.title}</h1>
                    <p className="text-[1.2vw] max-sm:text-[4vw] " dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <div className="my-[1vw]"><img className="border-[.1vw]" src={post.image} alt="" /></div>
                    <div className="flex flex-col gap-[1vw]">
                        <h1 className="text-[1.2vw] max-sm:text-[4vw] " dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            }
        </div >
    );
}

export default PostDetail;


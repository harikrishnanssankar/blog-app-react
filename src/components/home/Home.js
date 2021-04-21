import useFetch from '../../useFetch';
import BlogList from '../BlogList';
import './Home.css';



const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/Blogs')

    

    return (
        <div className="home">
            {error && <h3 className = 'loading-error'>Sorry, <br></br>{ error }</h3>}
            {isPending && <h2 className='loading-error'>Loading...</h2>}
            {blogs && <BlogList blogs={blogs} title='All Post' />}
        </div>
    );
}

export default Home;
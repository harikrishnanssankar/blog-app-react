import { useHistory, useParams } from "react-router";
import useFetch from "../../useFetch";
import "./blogdetails.css";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/Blogs/' + id)
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    } 
    
    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article className="article">
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button className="btn-delete" onClick= {handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;
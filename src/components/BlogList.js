import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    var style1 = {
        padding: '20px 0px 0px 10px'
    }



    return (
        <div className="blog-list">
            <h2 style={style1}>{title}</h2>
            {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>

                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BlogList;
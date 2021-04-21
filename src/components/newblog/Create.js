import { useState } from "react";
import { useHistory } from "react-router";
import "./Create.css";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Harikrishnan');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true)
        
        fetch('http://localhost:8000/Blogs', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog) //to convert blog object to a json string
        }).then(() => {
            setIsPending(false);
            //history.go(-1); go back one page
            history.push('/')
        })

        

    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form className="create-form" onSubmit = {handleSubmit}>
                <label>Blog Title</label>
                <input
                    className="input-form"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                <label>Blog Body</label>
                <textarea
                    className="input-form"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required >

                </textarea>
                <label>Blog Author</label>
                <div className="select">
                    <select
                        className="standard-select"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Hari">Hari</option>
                        <option value="Harikrishnan">HariKrishnan</option>
                        <option value="Harikrishnan S">HariKrishnan S</option>
                    </select>
                </div>

                {!isPending && <button className="button">Add Blog</button>}
                {isPending && <button disabled className="button">Addding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;
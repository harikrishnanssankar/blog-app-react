import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry,</h1><br/>
            <h1>404 - Page not found</h1>
            <Link to="/">Back to Home</Link>
        </div>
     );
}
 
export default NotFound;
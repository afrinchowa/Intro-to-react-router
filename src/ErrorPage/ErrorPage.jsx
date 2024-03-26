import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>oops!!!!</h1>
            <p>{error.statusTextText   ||  error.message}</p>
       {
        error.status ===404 && <div>
            <h3>Page Not Found</h3>
            <p>Go back where are you from</p>
           <Link to="/"><button>Go Back</button></Link> 
        </div>
       }
       
        </div>
    );
};

export default ErrorPage;
import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle ={
        border: '2px solid blue',
        padding:'5px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h4>Post of id: </h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post details</Link>
            <Link to={`/post/${id}`}><button>Post details</button></Link>
        </div>
    );
};

export default Post;
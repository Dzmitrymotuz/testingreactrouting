import { useParams } from "react-router-dom";

const PostDetails=()=>{
    const {id} = useParams()

    return (
        <>
        <div>
        <h1>Post Details {id}</h1>
        </div>
        </>
    )
}

export default PostDetails;
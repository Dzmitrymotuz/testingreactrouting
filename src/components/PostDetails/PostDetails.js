import { useParams } from "react-router-dom";

const PostDetails=()=>{
    const {id} = useParams()

    console.log(id)
    return (
        <>
        <div>
        <h1>Post Details {id}</h1>
        <div>
            {!id<10 && <div>hehehehe</div>}
        </div>
        </div>
        </>
    )
}

export default PostDetails;
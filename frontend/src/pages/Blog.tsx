import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/indes"
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";
import { FullBlog } from "../components/FullBlog";

export const Blog=()=>{
    const {id}=useParams();
    console.log("printing id" +id);
    const {blog,loading}=useBlog({
        id: Number(id) || 1
    });
    if(loading || !blog)
    {
        return <div>
        <Appbar/>
        <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
                   <Spinner/>
                </div>
            </div>
        </div>
    }
    return (
    <div>
        <FullBlog blog={blog}/>
    </div>
)
}

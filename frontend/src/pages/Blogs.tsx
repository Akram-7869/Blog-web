import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/indes"
import { BlogSkeleton } from "../components/BlogSkeleton"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            <Appbar/>
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div>
                {blogs.map(blog=>
                    <BlogCard
                    id={blog.id}
                    authorName={blog.author.name ||"Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedData={"10 october"}/>
                )}

            </div>
        </div>
    </div>
}

import Blog from "./Blog";

const Blogs = ({allBlogs}) => {

  return (
    <section className="blogs" id="blog">
        <div className="blogs__wrap container">
            <h2 className="blogs__title title-h2">Read our latest blogs & news</h2>
            <div className="blogs__boxes">
                {
                    allBlogs.map(blog => (
                        <Blog key={blog.id} blog={blog} />
                    ))
                } 
            </div>
        </div>
    </section>
  )
}

export default Blogs
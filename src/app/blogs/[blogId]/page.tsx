import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

// for showing title in tab
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return {
    title: blog.title,
    description: blog.description,
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetailsCard blog={blog}></BlogDetailsCard>
    </div>
  );
};

export default BlogDetailsPage;

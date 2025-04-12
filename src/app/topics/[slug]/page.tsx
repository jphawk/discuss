import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";


interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TopicShowPage({params}: TopicShowPageProps) {
  const { slug } = await params;
  
  return <div>
    <div className="col-span-3">
      <h1 className="text-xl m-2 font-bold">
        {slug}
      </h1>
      <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
    </div>
    <div>
      <PostCreateForm slug={slug} />
    </div>
  </div>;
}

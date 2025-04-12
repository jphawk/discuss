import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";

interface SeachPageProps {
  searchParams: Promise<{
    term: string;
  }>
}

export default async function SearchPage({ searchParams }: SeachPageProps) {
  const { term } = await searchParams;

  if (!term) {
    redirect('/');
  }

  return (
    <div>
      <h1 className="text-xl m-2 font-bold">
        Search results for: {term}
      </h1>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
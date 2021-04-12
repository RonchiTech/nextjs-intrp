import { useRouter } from 'next/router';

const BlogPageSlug = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Blog Page Slug </h1>
    </div>
  );
};
export default BlogPageSlug;


import { useContext } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentId = Number(postId);
  const post = posts.find((p) => p.id === currentId);

  const previousPost = posts.find((p) => p.id === currentId - 1);
  const nextPost = posts.find((p) => p.id === currentId + 1);

  const handleNavigation = (direction) => {
    const newPost = direction === "next" ? nextPost : previousPost;

    if (newPost) {
      navigate(`/posts/${newPost.id}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl py-16 text-center">
        <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Post Not Found
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Sorry, the article you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Back to Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-3xl py-6">
      {/* Back Link */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        ← Back to All Posts
      </Link>

      {/* Article Card */}
      <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="p-6 sm:p-10">
          {/* Category */}
          <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
            Blog Article
          </span>

          {/* Post Title */}
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>

          <div className="my-7 border-t border-gray-100" />

          {/* Post Content */}
          <div className="whitespace-pre-wrap break-words text-base leading-8 text-gray-700">
            {post.content}
          </div>
        </div>

        {/* Previous / Next Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 bg-gray-50 px-6 py-5 sm:px-10">
          <button
            onClick={() => handleNavigation("prev")}
            disabled={!previousPost}
            className="cursor-pointer rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={() => handleNavigation("next")}
            disabled={!nextPost}
            className="cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </article>

      {/* Navigation History */}
      {location.state?.fromPostId != null && (
        <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 px-5 py-4">
          <p className="text-sm text-indigo-700">
            You navigated here from post ID:{" "}
            <span className="font-bold">
              {location.state.fromPostId}
            </span>
          </p>
        </div>
      )}
    </main>
  );
};

export default PostDetail;

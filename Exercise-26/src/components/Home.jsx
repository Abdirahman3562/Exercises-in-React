
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-4xl py-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Blog Posts
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Explore articles, ideas, and stories from our blog.
        </p>
      </div>

      {/* Search Form */}
      <form
        action="/"
        method="get"
        className="mb-8 flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row"
      >
        <input
          type="search"
          name="search"
          placeholder="Search posts by title..."
          defaultValue={searchTerm}
          key={searchTerm}
          className="w-full flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Search
        </button>
      </form>

      {/* Posts Count */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-800">
          {searchTerm ? "Search Results" : "All Posts"}
        </h3>

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          {filteredPosts.length} Posts
        </span>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="group block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-md bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                  Blog Article
                </span>

                <span className="text-sm text-gray-400 transition group-hover:translate-x-1 group-hover:text-indigo-600">
                  →
                </span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 transition group-hover:text-indigo-600">
                {post.title}
              </h4>

              {post.content && (
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {post.content}
                </p>
              )}

              <div className="mt-5 border-t border-gray-100 pt-4">
                <span className="text-sm font-semibold text-indigo-600">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-100 bg-white px-6 py-14 text-center shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">
            No posts found
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            {searchTerm
              ? "Try searching with a different keyword."
              : "No blog posts have been created yet."}
          </p>

          {searchTerm && (
            <Link
              to="/"
              className="mt-5 inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              View All Posts
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

import Link from "next/link";
import DateFormatter from "@/app/_components/date-formatter";
import { getAllPosts } from "../lib/api";

export default function Index() {
  const posts = getAllPosts();

  return (
    <>
      <div className="hero">
        <span className="eyebrow">Blog · Credible Answers</span>
        <h1>
          DID you know <em>that…</em>
        </h1>
        <p>Short notes on difference-in-differences, heterogeneous treatment effects and event studies.</p>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="post-card">
            <span className="post-meta">
              <DateFormatter dateString={post.date} />
              {post.author?.name ? ` · ${post.author.name}` : ""}
            </span>
            <span className="post-card-title">{post.title}</span>
            {post.excerpt && <span className="post-card-excerpt">{post.excerpt}</span>}
            <span className="post-go">Read →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

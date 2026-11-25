import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import CoverImage from "../../_components/cover-image";
import DateFormatter from "../../_components/date-formatter";
import { PostBody } from "../../_components/post-body";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");

  return (
    <article className="post">
      <header className="post-head">
        <span className="eyebrow">DID you know that…</span>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <DateFormatter dateString={post.date} />
          {post.author?.name ? ` · ${post.author.name}` : ""}
        </div>
      </header>
      {post.coverImage && (
        <div className="post-cover">
          <CoverImage title={post.title} src={post.coverImage} />
        </div>
      )}
      <PostBody content={content} />
      <Link className="post-back" href="/">← All posts</Link>
    </article>
  );
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  return {
    title: `${post.title} — DID you know that…`,
    openGraph: {
      title: post.title,
      images: post.ogImage?.url ? [post.ogImage.url] : [],
    },
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

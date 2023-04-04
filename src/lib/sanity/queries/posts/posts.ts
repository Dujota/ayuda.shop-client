import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../sanity.api";
import { client } from "../../sanity.client";
import {
  allPostsQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
} from "./posts.groq";

import type { Post } from "./posts.groq";

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(allPostsQuery)) || [];
  }
  return [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, "slug">[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

// setup the client call with token
export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post | null; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return await client.fetch(postAndMoreStoriesQuery, { slug });
  }

  return { post: null, morePosts: [] };
}

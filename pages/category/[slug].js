import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { getCategories, getCategoryPost, GetSlugName } from '../../services';
import { PostCard, Categories, Loader } from '../../components'

const CategoryPost = ({ posts, slugName }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto px-5 md:px-10 2xl:px-28 mb-8 min-h-screen">

            <div className="mb-8 w-full">
				<div className="text-sm breadcrumbs">
					<ul>
						<li><Link href={`/`}>Home</Link></li>
						<li>Categories</li>
						<li>{slugName}</li>
					</ul>
				</div>
			</div>

            {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
            ))}
            <Categories />
        </div>
    )
}

export default CategoryPost

export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);
    const slugName = await GetSlugName(params.slug)

    return {
        props: { posts, slugName }
    };
}

export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}
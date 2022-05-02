import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

import { getPosts, getPostDetails } from '../../services';
import { Categories, PostWidget, Loader, Footer, AboutMe, PostDetail } from '../../components';
import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />
	}

	// console.log(post); // for debugging purpose

	return (
		<div className="container mx-auto px-5 md:px-10 2xl:px-28 mb-8 min-h-screen">

			<div className="mb-8 w-full">
				<div className="text-sm breadcrumbs">
					<ul>
						<li><Link href={`/`}>Home</Link></li>
						<li><Link href={`/`}>Posts</Link></li>
						<li>{post.title}</li>
					</ul>
				</div>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-8">

				{/* Main Contents */}
				<div className='xl:col-span-8 col-span-1'>

					{/* Post Details */}
					<PostDetail post={post} />

					{/* Adjacent Posts */}
                    <AdjacentPosts slug={post.slug} createdDate={post.createdDate} />

				</div>

				{/* Right Pane - Start */}
				<div className="xl:col-span-4 col-span-1">

					<div className="relative xl:sticky top-8">

						{/* Section - About Me */}
						<AboutMe />

						{/* Section - Categories/Tags */}
						<Categories />

						{/* Section - Recent Posts */}
						<PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />

					</div>

				</div>
				{/* Right Pane - End */}

			</div>

			{/* Section - Footer */}
            <Footer />

		</div>
	)
}

export default PostDetails

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);

	return {
		props: { post: data },
		revalidate: 10,
	}
}

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })), // All paths will be rendered during build time. Not god if have many blog posts
		fallback: true
		// fallback false: statically generate site, but after deployment new blog posts wont be generated
		//          true: new pages will also generated even after deployment.
	}
}
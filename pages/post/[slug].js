import React from 'react';
import { useRouter } from 'next/router';

import { getPosts, getPostDetails } from '../../services';
import { Categories, PostWidget, Loader, Footer, AboutMe } from '../../components';
// import { PostDetail, Categories, PostWidget, Loader, Footer } from '../../components';
// import { AdjacentPosts } from '../../sections';

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
						<li><a>Home</a></li>
						<li><a>Documents</a></li>
						<li>Add Document</li>
					</ul>
				</div>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-8">

				{/* Main Contents */}
				<div className='xl:col-span-8 col-span-1'>

					{/* Post Details */}
					<div className="card w-full bg-base-100 shadow-xl mb-8">
						<img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
						<div className="card-body">
							<div className="card-title justify-start text-lg font-semibold">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg>
								<div>Oct 18, 2020</div>
								<div className="badge badge-secondary">SharePoint</div>
							</div>
							<h2 className="card-title text-2xl">
								Blog title goes here
							</h2>
							<div>
								<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, beatae. Fugiat similique soluta fuga ab! Assumenda perspiciatis reprehenderit, veritatis aliquid pariatur consectetur quibusdam tenetur? Inventore vero dolore repellat magni, molestiae distinctio, perferendis officia, tempore deleniti possimus facilis ipsum error. Accusamus soluta veniam eaque. Praesentium dolores recusandae vel? Sunt culpa magni provident officiis inventore vel possimus adipisci expedita. Officiis dolorum praesentium necessitatibus illum atque ipsa totam accusantium fuga nobis ullam perferendis qui, architecto expedita sed animi cupiditate libero reiciendis. Architecto dolorem laboriosam assumenda reiciendis inventore quasi? Illum maiores aspernatur vel eius consectetur delectus molestiae accusantium reiciendis quisquam. Sed soluta odit sequi?</p>
							</div>
						</div>
					</div>

					{/* Adjacent Posts */}
					<div className="card w-full bg-base-100 shadow-xl image-full mb-8 cursor-pointer">
						<img className="w-full h-52 object-cover" src="https://api.lorem.space/image/shoes?w=400&h=225" />
						<div className="card-body flex-row items-center navbar-start w-full">
							<button className="btn btn-square btn-sm">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /> </svg>
							</button>
							<div>
								<h2 className="card-title">Previous Post</h2>
								<p>Oct 11, 2021</p>
							</div>
						</div>
					</div>
					<div className="card w-full bg-base-100 shadow-xl image-full mb-8 cursor-pointer">
						<img className="w-full h-52 object-cover" src="https://api.lorem.space/image/shoes?w=400&h=225" />
						<div className="card-body flex-row items-center navbar-end w-full">
							<div>
								<h2 className="card-title">Next Post</h2>
								<p>Oct 22, 2021</p>
							</div>
							<button className="btn btn-square btn-sm">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /> </svg>
							</button>
						</div>
					</div>

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
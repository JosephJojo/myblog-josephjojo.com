import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }) => {
  const src = post.featuredImage.url;
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="card md:card-side bg-base-100 shadow-xl mb-8 hover:bg-warning transition-all ease-in cursor-pointer">
        <Image className="object-cover" loader={() => src} src={src} width={500} height={330} alt={post.title}/>
        <div className="card-body sm:px-5 w-full">
          <div className="card-title text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg>
            <div>{moment(post.createdDate).format('MMM DD, YYYY')}</div>
            {post.categories.map((category) => <div className="badge badge-secondary">{category.name}</div>)}
          </div>
          <h2 className="card-title w-full">{post.title}</h2>
          {/* <p className="min-w-[467px]">{post.excerpt}</p> */}
          <p className="min-w-full">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
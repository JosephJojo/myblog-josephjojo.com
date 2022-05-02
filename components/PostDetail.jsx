import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-8">
        <img src={post.featuredImage.url} alt={post.title} />
        <div className="card-body">
            <div className="card-title justify-start text-lg font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg>
                <div>{moment(post.createdDate).format('MMM DD, YYYY')}</div>
                {post.categories.map((category) => <div className="badge badge-secondary">{category.name}</div>)}
            </div>
            <h2 className="card-title text-2xl">
                { post.title }
            </h2>
            <div className='prose max-w-full' dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </div>
    </div>
  )
}

export default PostDetail
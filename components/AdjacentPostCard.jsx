import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({ post, position }) => {
  return (
    <Link href={`/post/${post.slug}`}>
        <div className="card w-full bg-base-100 shadow-xl image-full mb-8 cursor-pointer">
            <img className="w-full h-52 object-cover" src={post.featuredImage.url} />
            {position === 'LEFT' && (
                <div className="card-body flex-row items-center navbar-start w-full">
                    <button className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /> </svg>
                    </button>
                    <div>
                        <h2 className="card-title">Previous Post</h2>
                        <p>Oct 11, 2021</p>
                    </div>
                </div>
            )}
            {position === 'RIGHT' && (
                <div className="card-body flex-row items-center navbar-end w-full">
                    <div>
                        <h2 className="card-title">Next Post</h2>
                        <p>Oct 22, 2021</p>
                    </div>
                    <button className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /> </svg>
                    </button>
                </div>
            )}
        </div>
    </Link>
  )
}

export default AdjacentPostCard
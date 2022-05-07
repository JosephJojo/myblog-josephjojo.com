import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-8">
      <div className="card-body">
        <h2 className="card-title">{ slug ? 'Related Posts' : 'Recent Posts' }</h2>
      </div>
      { relatedPosts.map((post, index) => (
        <>
          <Link href={`/post/${post.slug}`} key={index}>
            <div className="flex items-center p-4 cursor-pointer" key={index}>
              <img className="mask mask-squircle h-16 w-16 object-cover" src={post.featuredImage.url} alt={post.title} />
              <div className="ml-4">
                <h2 className="card-title">{ post.title }</h2>
                <p className="text-sm">{ moment(post.createdDate).format('MMMM DD, YYYY') }</p>
              </div>
            </div>
          </Link>
          <div className="divider m-0"></div>
        </>
      )) }
    </div>
  )
}

export default PostWidget
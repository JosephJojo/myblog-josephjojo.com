import React, { useState, useEffect } from 'react';

import { AdjacentPostCard } from '../components';
import { getAdjacentPosts } from '../services';

const AdjacentPosts = ({ createdDate, slug }) => {

    const [adjacentPost, setAdjacentPost] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getAdjacentPosts(createdDate, slug).then((result) => {
            setAdjacentPost(result);
            setDataLoaded(true);
        });
    }, [slug]);

    return (
        <>
          {dataLoaded && (
            <>
              {adjacentPost.previous && (<AdjacentPostCard post={adjacentPost.previous} position="LEFT" />)}
              {adjacentPost.next && (<AdjacentPostCard post={adjacentPost.next} position="RIGHT" />)}
            </>
          )}
        </>
      )
}

export default AdjacentPosts
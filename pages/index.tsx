import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import { PostCard, Categories, PostWidget, AboutMe, Footer } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections';

const Home: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-5 md:px-10 2xl:px-28 mb-8 min-h-screen">

      <div className="mb-8 w-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Home</a></li>
            <li><a>All Posts</a></li>
          </ul>
        </div>
      </div>
      
      {/* Featured Posts */}
      <FeaturedPosts />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-8">

        {/* Main Contents */}
        <div className='xl:col-span-8 col-span-1'>
          
          {/* Section - Hero */}
          <div className="hero card h-96 mb-8 cursor-pointer hero-bg">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-secondary-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there 👋</h1>
                <p className="mb-5">I'm a passionate about M365 web development, migration and the world around it. This blog serves as a place to document everything I've learned, developed, and challenges I've encountered between my career.</p>
              </div>
            </div>
          </div>
          
          {/* Section Posts */}
          {posts.map((post, index) => <PostCard post={post.node} key={index} /> )}

        </div>

        {/* Right Pane - Start */}
        <div className="xl:col-span-4 col-span-1">
          
          <div className="relative xl:sticky top-8">

              {/* Section - About Me */}
              <AboutMe />

              {/* Section - Categories/Tags */}
              <Categories />

              {/* Section - Recent Posts */}
              <PostWidget slug={null} categories={null} />
              
          </div>
          
        </div>
        {/* Right Pane -End */}

      </div>

      {/* Section - Footer */}
      <Footer />

      <Script id="show-banner" strategy="lazyOnload">
        {`
          document.getElementById('theme-switch').addEventListener('click', function (event) {
            console.log(event.target.checked);
            (event.target.checked) ? document.querySelector('html').setAttribute("data-theme", "night") : document.querySelector('html').setAttribute("data-theme", "emerald");
          });
        `}
      </Script>
      
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts() || [])

  return {
    props: { posts },
    revalidate: 10, // Regenerate page within 10 seconds after the new request made
  }
}
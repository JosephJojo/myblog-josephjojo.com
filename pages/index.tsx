import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { PostCard, Categories, PostWidget, AboutMe, Footer } from '../components'
import { getPosts } from '../services'

const Home: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-5 md:px-10 2xl:px-28 mb-8 min-h-screen">
      <title>Joseph's Blog</title>
            <link rel="icon" href="/favicon.ico" />

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

        {/* Right Pane -Start */}
        <div className="xl:col-span-4 col-span-1">
          
          {/* Section - About Me */}
          <AboutMe />

          {/* Section - Categories/Tags */}
          <Categories />

          {/* Section - Recent Posts */}
          <PostWidget />
          
        </div>
        {/* Right Pane -Start */}

      </div>

      {/* Section - Footer */}
      <Footer />
      
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts() || [])

  return {
    props: { posts }
  }
}
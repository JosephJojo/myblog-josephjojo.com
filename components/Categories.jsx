import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    })
  }, [])

  return (
    <div class="mockup-code mb-8">
      <pre data-prefix="$"><code>ls categories</code></pre>
      { categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}><pre data-prefix=">" class="text-success hover:text-warning cursor-pointer"><code>{ category.name }</code></pre></Link>
      )) }
    </div>
  )
}

export default Categories
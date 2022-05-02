import React from 'react'

const PostDetail = () => {
  return (
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
  )
}

export default PostDetail
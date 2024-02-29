import Link from 'next/link';
import React from 'react';


export const metadata = {
    title: 'Blog page',
    description: 'this blog page',
    }

const BlogPage = () => {
    return (

        <div>
            
            <h1> this blog page </h1>

          <Link href='/' >
          <button className=' btn' >  home </button>
          </Link>

        </div>
    );
};

export default BlogPage;
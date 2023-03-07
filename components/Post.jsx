import Link from 'next/link'
import Image from 'next/image'
import { AboutImg } from '../assets'

export default function Post({ post }) {
  return (
      <Link href={`/blog/${post.slug}`} className='w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 h-full  m-6 shadow-lg p-6 rounded-[8px]'>
      <Image src={AboutImg} className='border border-grey rounded-[8px] transition ease-in-out delay-150 hover:scale-110' alt='blogImg' />
      <div className='bg-white py-6 '>
        <h3 className='font-semibold  text-greenGrow text-[20px] md:text-[25px]'>{post.frontmatter.title}</h3>
        <p className='flex flex-wrap text-[16px] text-grey font-normal leading-6 mb-2 md:mb-4'>
          {post.frontmatter.description.length > 90
            ? post.frontmatter.description.substring(0, 85) + "..."
            : post.frontmatter.description}
        </p>
        <div className='flex justify-between'>
          <p className='text-[12px] text-grey font-normal leading-6'>{post.frontmatter.date}</p>
          <Link href={`/blog/${post.slug}`} className='text-[15px] text-greenGrow font-semibold leading-6 transition ease-in-out delay-150 hover:scale-110'>Read Article</Link>
        </div>
      </div>
    </Link>

  )
}

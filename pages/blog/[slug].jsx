import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/style'
import { arrowback } from '@/assets'
import { AboutImg } from '@/assets'
import Head from 'next/head'

export default function PostPage({
    frontmatter: { title, date, cover_image, author, Reading_time },
    slug,
    content,
}) {
    return (
        <>
        <Head>
            <title>
                Blog Post
            </title>
        </Head>
            <section className={`lg:px-[120px] py-[40px] md:py-[70px] flex justify-center font-MTS`}>
                <div className='w-4/5 md:w-2/3'>
                    <Link href='/BlogPage' className='flex'>
                      <Image src={arrowback} alt="" className='mr-2'/>  <p className='w-fit'>Go back</p>
                    </Link>
                    <h1 className='font-extrabold font-MTS text-greenGrow text-[45px] p'>{title}</h1>
                    <div className='flex mb-3'>
                        <div className='text-grey'>By <span className='text-greenGrow font-semibold'>{author}</span></div>
                        <div className='mx-7 text-grey'>Posted on <span className='text-greenGrow font-semibold'>{date}</span></div>
                        <div className='text-grey'>{Reading_time} read</div>
                    </div>
                    <Image className='w-full rounded-[8px] border border-grey shadow-2xl' src={AboutImg} alt='' />
                    
                    <div className='pt-10 font-medium text-grey leading-10'>
                        <div dangerouslySetInnerHTML={{ __html: (marked(content)) }}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
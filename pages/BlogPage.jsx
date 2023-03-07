import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '@/components/Post'
import { sortByDate } from '@/utils'
import styles from '@/styles/style'

export default function Home({ posts }) {
    return (
        <section className={`px-6 lg:px-[120px]  py-[40px] md:py-[70px] font-MTS`}>
            <Head>
                <title>Blog</title>
            </Head>
            <header
                className='text-center pb-[25px] md:pb-[60px]'>
                <h1 className='font-extrabold font-MTS text-[45px] text-greenGrow'>Blog</h1>
                <p className={`font-medium text-grey text-[17px] sm:text-[20px] leading-[26px]  mt-[16px]`}>Discover a range of resources written by experienced tech professionals at Grow</p>
            </header>
            <div >
                <div className='flex flex-wrap justify-center'>
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}

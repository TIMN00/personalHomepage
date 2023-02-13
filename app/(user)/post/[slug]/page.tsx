import {groq} from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import category from "../../../../schemas/category";

type Props = {
    params: {
        slug: string;
    };
};

async function Post({params: {slug}}: Props) {

    const query = groq`
    *[_type=='post' && slug.current == $slug] [0]
        {
            ...,
            author->,
            categories[]->
        }
    `

    const post: Post = await client.fetch(query, {slug});

  return (
    <article>
        <section className="space-y-2 border border-grey text-white">
            <div>
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                    <Image  
                        className="object-cover object-center mx-auto"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill />
                    </div>
                    <section className="p-5 bg-[#742474] w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold"> {post.title} </h1>
                                <p>  {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                            <div>
                                <h2 className="italic pt-10"> {post.description} </h2>
                                <div className="flex items-center justify-end mt-auto space-x-2" > 
                                    {post.categories.map((category) => (
                                        <p key = {category._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">{category.title}</p>
                                    ))}
                                </div>
                            </div>        
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </article>

  )
}

export default Post
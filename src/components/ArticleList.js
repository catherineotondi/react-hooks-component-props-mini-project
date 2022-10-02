import React from "react";
import Article from "./Article";

const ArticleList = ({posts}) => {
    console.log(posts);
    return ( 
        <main>
           {posts.map(post=>{
               return <Article title = {post.title} date = {post.date} mins = {post.minutes}  preview = {post.preview} key = {post.id} />
           })} 
           
        </main>
     );
}
 
export default ArticleList;
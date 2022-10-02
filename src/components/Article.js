import React from "react";
const indicator = (mins)=>{
    let wait = 5;
    let emoji = '☕️'
    let initialEmoji = ""

    if (mins>30){
        emoji = "🍱"
        wait = 10
    }

    for (let i=0; i<mins; i+=wait){
        initialEmoji += emoji
    }

   

    console.log(initialEmoji);
    return initialEmoji
}


const Article = ({title, date = "January 1, 1970", mins, preview}) => {
    return ( 
        <main>
            <article>
                <h3>{title}</h3>
                <small>
                    {date}
                     <ul><li>{indicator(mins) + mins + "min read"}</li></ul>
                </small>
                <p>{preview}</p>
            </article>
        </main>
     );
}
 
export default Article;
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchAllArticles } from "../../apiCalls";
import './SingleNews.css'

const SingleNews = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([])
    const [singularArticle, setSingularArticle] = useState([]);
    let { title } = useParams();

    const fetchSingle = async (newsTitle) => {
        try {
            const data = await fetchAllArticles()
            let thisOne = data.articles.filter((article) => {
                return article.title === newsTitle;
            })
            setSingularArticle(thisOne);
          } catch (error) {
            console.log(error)
          }
    };

    useEffect(() => {
        fetchSingle(title);
        setLoading(false);
    }, [title]);

    let dateFormat = singularArticle[0]?.publishedAt?.split('T');
    let timeFormat = dateFormat?.[1]?.split('Z')[0]?.split(":")[0].includes("12" || "13" || "14" ||"15" || "16" || "17" ||"18" || "19" || "20" ||"21" || "22" || "23" || "24") ? "AM" : "PM";
    
    return (
        <div className="container">
            {loading === true ? (
                <p>loading....</p>
            ) : singularArticle.length > 0 ? (
                <>
                    <div>
                        <h2 className="title">{singularArticle[0].title}</h2>
                        <h3 className="author">Written by:{singularArticle[0].author}</h3>
                        <p className="publishedAt">{`Published on:${dateFormat[0]} at ${dateFormat[1].split('Z')[0]} ${timeFormat}`}</p>
                        <p className="source">Source: {singularArticle[0].source.name}</p>
                        <a className="link" href={singularArticle[0].url}>Read the whole story!</a>
                    </div>
                    <div>
                        <img className="image" src={singularArticle[0].urlToImage} height={200} width={200} />
                        <p className="content">Snippet: {singularArticle[0].content}</p>
                    </div>
                </>
            ) : (
                <p>No article found with the given title.</p>
            )}
            <NavLink to='/'><button>Home</button></NavLink>
        </div>
    );
};

export default SingleNews;
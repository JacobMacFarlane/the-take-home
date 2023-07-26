import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import './Main.css'

const Main = ({ articles}) => {
    const allNews = articles.map((article, index) => {
        return (
            <NewsCard
                article={article}
                key={index}
            />
        )
    })

    return (
        <div className="articles-cont">
            {allNews}
        </div>
    )
}

export default Main
import React, { useState } from 'react'
import axios from "axios"

import "./Article.css"

const Articles = () => {
    /*let [articles, setArticles] = useState([])
    let port = 3000 // backend port

    axios
        .get("http://localhost:" + port + "/articles/")
        .then((res) => {
            setArticles({ articles: res.data });
        })
        .catch((error) => console.log(error));*/

    let articles = [
        { id: 1, title: "test1", autor: "test2", content: "test3" },
        { id: 2, title: "test4", autor: "test5", content: "test6" }
    ]

    function handleClick(ID) {
        console.log("ID: ", ID)
    }

    return (
        <div class="center">
            <h1>Articles</h1>
            <table className="table">
                <tr>
                    <th>Title</th>
                    <th>Autor</th>
                    <th>Content</th>
                    <th></th>
                </tr>

                {articles.map((article) => {
                    return (
                        <tr className="item" id={article.id}>
                            <td className="itemDisplay">{article.title}</td>
                            <td className="itemDisplay">{article.autor}</td>
                            <td className="itemDisplay">{article.content}</td>
                            <td className="removeItemButton" >
                                <button onClick={() => handleClick(article.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>

            {/* <ul className="listItems">
                {articles.map((article) => {
                    return (
                        <li className="item" id={article.id}>
                            <label className="itemDisplay">{article.title}</label>
                            <label className="itemDisplay">{article.autor}</label>
                            <label className="itemDisplay">{article.content}</label>
                            <span className="removeItemButton">x</span>
                        </li>
                    )
                })}
            </ul> */ }
        </div>
    )
}

export default Articles

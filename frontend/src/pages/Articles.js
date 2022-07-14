import "./Article.css";

const Articles = () => {
  const articles = [
    { id: 1, title: "test1", autor: "test2", content: "test3" },
    { id: 2, title: "test4", autor: "test5", content: "test6" },
  ];

  return (
    <div className="center">
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
            <tr className="item" id={article.id} key={article.id}>
              <td className="itemDisplay">{article.title}</td>
              <td className="itemDisplay">{article.autor}</td>
              <td className="itemDisplay">{article.content}</td>
              <td className="removeItemButton">
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Articles;

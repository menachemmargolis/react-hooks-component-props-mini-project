import  Article from "./Article"

function ArticleList(props){
   const allArticles =props.articles.map( article =>
 <Article key ={article.id} title ={article.title} date = {article.date} preview = {article.preview} />)

 return <main>
     {allArticles}
 </main>
}


export default ArticleList;


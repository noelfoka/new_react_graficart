const title = 'Bonjour les gens';
const style = {
  color: "red",
  backgroundColor: "blue",
};
const showTitle = false;
// Liste de taches
const todos = [
  'Presenter React',
  'Presenter le JSX',
  'Creer des composants'
];

function App() {

  const handleClick = (e) => {
    console.log(e);
    alert("j'ai cliqué sur le titre");
  }
  return (
    <>
      {showTitle ? <h1 onClick={handleClick} id="title" style={style} className="title">{title}</h1> : <h2>Title is not exist</h2>}
      <input type='text' defaultValue={title} />
      <p>
        Lorem ipsum dolor sit amet, consectetor adipisicing elit. Aaccusamus, asperiores, aspernatur asumenda consequatur corporiseum exepturi id illum maiores minus nam nobis quo reiciendis ullam veritatis.
      </p>
      <ul>
        {todos.map((todo) => (<li key={todo}>{todo}</li>))}
      </ul>
    </>
  )
}

export default App

// Liste de taches
const todos = [
  'Presenter React',
  'Presenter le JSX',
  'Creer des composants'
];

function App() {

  return (
    <>
      <Title color="green" />
      <input type='text' />
      <p>
        Lorem ipsum dolor sit amet, consectetor adipisicing elit. Aaccusamus, asperiores, aspernatur asumenda consequatur corporiseum exepturi id illum maiores minus nam nobis quo reiciendis ullam veritatis.
      </p>
      <ul>
        {todos.map((todo) => (<li key={todo}>{todo}</li>))}
      </ul>
    </>
  )
}

function Title ({ color }) {
  return (
    <h1 style={{color: color}}>Bonjour les gens</h1>
  )
}

export default App

const title = 'Bonjour les gens'

function App() {

  const handleClick = (e) => {
    console.log(e);
    alert("j'ai cliqué sur le titre");
  }
  return (
    <>
      <h1 onClick={handleClick} id="title" className="title">{title}</h1>
      <input type='text' defaultValue={title} />
      <p>
        Lorem ipsum dolor sit amet, consectetor adipisicing elit. Aaccusamus, asperiores, aspernatur asumenda consequatur corporiseum exepturi id illum maiores minus nam nobis quo reiciendis ullam veritatis.
      </p>
    </>
  )
}

export default App

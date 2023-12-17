import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-3xl font-bold underline ">
        Hello world!
      </h1>
      <Card username="Avnish" btn="View Profile"/>
      <Card username="Aditya" btn="open Profile"/>
      <Card />
    </>
  )
}

export default App

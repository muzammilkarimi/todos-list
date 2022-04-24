import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/header.js'
import Todos from './mycomponents/todos.js'
import Footer from './mycomponents/footer.js'

function App() {
  let todos = [
    {
      sno: 1,
      title: "go to market",
      disc: "i have to buy some vegi and snacks"
    },
    {
      sno: 2,
      title: "go to mall",
      disc: "i have to buy eid clothes"
    },
    {
      sno: 3,
      title: "go to mousque",
      disc: "i have to go for prayer"
    }
  ]
  return (
    <>
      <Header title="My todos List" searchbar={true} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;

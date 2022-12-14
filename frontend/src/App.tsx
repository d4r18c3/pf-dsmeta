import NotificationButton from "./components/NotificationButton";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="dsmeta-sales">
          <div className="dsmeta-container">
          <SalesCard />
          </div>
        </section>
      </main>
      <NotificationButton />
    </>
  )
}

export default App;

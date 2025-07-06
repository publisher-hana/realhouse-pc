import Visual from "../../components/home/Visual"
import { Listing } from "../../components/home/Listing"
const Home = () => {
  return (
    <>
      <Visual />
      <div className="container">
        <section className="section">
          <Listing />
        </section>
      </div>
    </>
  )
}

export default Home
import Visual from "../../components/home/Visual"
import { Listing } from "../../components/home/Listing"
import Notice from "../../components/home/Notice"
import { AppLink } from "../../components/home/AppLink"
const Home = () => {
  return (
    <div className="container-wrap">
      <Visual />
      <div className="container">
        <section className="section mb-40">
          <Listing />
        </section>
        <section className="section mb-40">
          <Notice />
        </section>
         <section className="section mb-40">
          <AppLink />
        </section>
      </div>
    </div>
  )
}

export default Home
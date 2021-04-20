import Carousel1 from "./Carousel1.jsx";
import SliderData from "../components/SliderData";
import Plans from "../components/Plans";

function Home() {
  return (
    <div className="home">
      <Carousel1 slides={SliderData} />
    </div>
  );
}

export default Home;

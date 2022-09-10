import bgVideo from "../../assets/videos/hero.mp4";

function hero() {
  return (
    <video autoPlay loop muted id="video" className="video">
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}

export default hero;

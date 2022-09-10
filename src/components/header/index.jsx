import Hero from "./hero";
import MenuItems from "./menu_items";
import HeroText from "./hero_text";

function index() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Hero />
      <MenuItems />
      <HeroText />
    </div>
  );
}

export default index;

import AnnounceCard from "../components/announce_card";
import WelcomeCard from "../components/welcome_card";


function Home() {
  return (
    <section className="home">
      <AnnounceCard />
      <WelcomeCard />
    </section>
  );
}

export default Home;


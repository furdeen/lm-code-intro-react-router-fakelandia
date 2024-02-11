 import Header from "./Header";

const Home: React.FC = () => {
    return (
      <div className="home__background">
        <Header />
        <h1 className="home_title">Welcome to Fakelandia's Justice Department</h1>
        <h2 className="home_subtitle">
          Discover Recent Misdemeanours or Confess Your Own
        </h2>
      </div>
    );
  };
  
  export default Home;
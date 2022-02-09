import Portfolio from "../../components/portfolio/Portfolio";
import HeadTitle from "../../components/reusableComponents/HeadTitle";

const PortfolioPage = () => {
  return (
    <div
      style={{
        margin: "10vh auto",
      }}
    >
      <HeadTitle />
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;

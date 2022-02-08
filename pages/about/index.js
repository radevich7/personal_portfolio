import dynamic from "next/dynamic";
import Loading from "../../components/loadingScreen/Loading";
const DynamicAbout = dynamic(() => import("../../components/about/About"), {
  loading: () => <Loading loading />,
});

const AboutMe = () => {
  return <DynamicAbout />;
};

export default AboutMe;

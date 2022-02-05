import dynamic from "next/dynamic";
import Loading from "../../components/loadingScreen/Loading";
const DynamicAbout = dynamic(() => import("../../components/about/About"), {
  loading: () => <Loading loading />,
});

const AboutMe = () => {
  const [loading, setLoading] = useState(false);
  return <DynamicAbout />;
};

export default DynamicAbout;

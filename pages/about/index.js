import { Fragment } from "react";
import dynamic from "next/dynamic";
import HeadTitle from "../../components/reusableComponents/HeadTitle";
import Loading from "../../components/loadingScreen/Loading";
const DynamicAbout = dynamic(() => import("../../components/about/About"), {
  loading: () => <Loading loading />,
});

const AboutMe = () => {
  return (
    <Fragment>
      <HeadTitle />
      <DynamicAbout />
    </Fragment>
  );
};

export default AboutMe;

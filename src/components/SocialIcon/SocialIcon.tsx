import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./style.css";

import Facebook from "../Facebook";
import Whatsapp from "../Whatsapp";
import Twitter from "../Twitter";

interface ISocialIcon {
  iconName: "facebook" | "whatsapp" | "twitter";
  link: string;
}

const SocialIcon = ({ iconName, link }: ISocialIcon) => {
  const getIconComponent = () => {
    switch (iconName) {
      case "facebook":
        return <Facebook />;

      case "whatsapp":
        return <Whatsapp />;

      case "twitter":
        return <Twitter />;

      default:
        return null;
    }
  };

  const handleOpenLink = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <mesh onClick={() => handleOpenLink()}>{getIconComponent()}</mesh>
        </Suspense>
      </Canvas>
    </>
  );
};

export default SocialIcon;

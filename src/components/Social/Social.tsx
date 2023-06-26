import SocialIcon from "../SocialIcon/SocialIcon";

import "./style.css";

const Social = () => {
  return (
    <>
      <div className="social-container">
        <SocialIcon iconName="facebook" link="https://pt-br.facebook.com/" />

        <SocialIcon iconName="whatsapp" link="https://web.whatsapp.com/" />

        <SocialIcon iconName="twitter" link="https://twitter.com/" />
      </div>
    </>
  );
};

export default Social;

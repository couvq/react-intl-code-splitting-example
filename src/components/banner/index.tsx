import React from "react";
import { FormattedMessage } from "react-intl";

const Banner = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <FormattedMessage
        id="bannerText"
        defaultMessage="This is placeholder content for the banner section."
      />
    </section>
  );
};

export default Banner;

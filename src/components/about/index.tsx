import React from 'react'
import { FormattedMessage } from 'react-intl'

const About = () => {
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
        id="aboutText"
        defaultMessage="This is placeholder content for the about section."
      />
    </section>
  )
}

export default About
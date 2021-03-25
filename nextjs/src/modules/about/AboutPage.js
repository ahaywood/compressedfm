import { Newsletter } from "modules/shared/components/Newsletter";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import styled from "styled-components";

import { Faq } from "./components/Faq";

const AboutPage = ({ faqs, gettingStarted, mostPopular }) => {
  return (
    <StyledAboutPage>
      About Page


      {/* frequently asked questions */}
      {faqs && faqs.map(faq => (
        <Faq
          key={faq._id}
          question={faq.question}
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      ))}
      <VerticalDivider />

      {/* newsletter */}
      <Newsletter />

    </StyledAboutPage>
  )
}

const StyledAboutPage = styled.div`

`;

export { AboutPage }

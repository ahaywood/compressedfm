import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import { Icon } from 'modules/shared/components/icon';

// styles
import { MixinBodyCopy } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Faq = ({ question, answer }) => {
  const [isToggled, setIsToggled] = useState(false);

  // toggle answer visibility
  const toggle = () => {
    setIsToggled(!isToggled);
  };

  // handles the motion transition / duration / easing
  const transition = {
    duration: 0.75,
    ease: [0.04, 0.62, 0.23, 0.98],
  };

  // Framer Motion -- Answer Variants
  const AnswerVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  // Framer Motion -- Icon Variants
  const iconVariants = {
    open: { rotate: 45, originX: 0.5, originY: 0.5, y: 5 },
    closed: { rotate: 0, originX: 0.5, originY: 0.5, y: 5 },
  };

  return (
    <StyledFaq className={isToggled ? 'open' : 'closed'}>
      <div className="icon">
        <motion.div transition={transition} animate={isToggled ? 'open' : 'closed'} variants={iconVariants}>
          <a href="#" onClick={toggle}>
            <Icon name="plus" />
          </a>
        </motion.div>
      </div>
      <div className="content">
        <a href="#" className="question" onClick={toggle}>
          {question}
        </a>
        <motion.div
          transition={transition}
          className="answer"
          animate={isToggled ? 'open' : 'closed'}
          variants={AnswerVariants}
        >
          <p>{answer}</p>
        </motion.div>
      </div>
    </StyledFaq>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFaq = styled.div`
  display: flex;
  padding-bottom: 60px;

  .icon {
    margin-right: 10px;
  }

  .icon a {
    display: block;
  }

  .icon a svg {
    fill: ${(props) => props.theme.yellow};
    position: relative;
  }

  .question {
    font-family: ${(props) => props.theme.sansSerif};
    font-weight: ${(props) => props.theme.fontBlack};
    font-size: 3.6rem;
    color: ${(props) => props.theme.white};
    text-decoration: none;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.yellow};
    }
  }

  &.open .icon a svg,
  &.open a.question {
    color: ${(props) => props.theme.lavenderIndigo};
    fill: ${(props) => props.theme.lavenderIndigo};
  }

  .answer p {
    ${MixinBodyCopy};
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 25px;
  }
`;

export { Faq };

import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '~/components/Icon';

interface FaqProps {
  question: string;
  answer: [];
}

const Faq = ({ question, answer }: FaqProps) => {
  const [isToggled, setIsToggled] = useState(false);

  // toggle answer visibility
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
    <div className="flex pb-[60px]">
      <div className="icon">
        <motion.button
          className="border-none bg-transparent text-yellow relative transition-none hover:right-0 top-[10px]"
          onClick={toggle}
          type="button"
          transition={transition}
          animate={isToggled ? 'open' : 'closed'}
          variants={iconVariants}
        >
          <Icon name="plus" />
        </motion.button>
      </div>
      <div className="content">
        <button
          className="question border-none bg-transparent font-sans font-black text-[36px] text-white relative hover:text-yellow text-left transition-none hover:right-0 top-0"
          onClick={toggle}
          type="button"
        >
          {question}
        </button>
        <motion.div
          className="answer"
          transition={transition}
          animate={isToggled ? 'open' : 'closed'}
          variants={AnswerVariants}
        >
          <PortableText value={answer} />
        </motion.div>
      </div>
    </div>
  );
};

export { Faq };

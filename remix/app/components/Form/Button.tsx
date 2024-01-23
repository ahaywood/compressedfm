import { Icon } from '../Icon';

interface ButtonProps {
  label?: string;
}

const Button = ({ label = '' }: ButtonProps) => {
  return (
    <button type="submit" className="form-submit-button">
      {label}
      <Icon name="arrow" />
    </button>
  );
};

export { Button };

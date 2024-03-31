interface LinkedInProps {
  className?: string;
  size?: number;
}

const LinkedIn = ({ className = '', size = 32 }: LinkedInProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.2 3.4C7.2 5.3 5.8 6.8 3.5 6.8C1.4 6.8 0 5.3 0 3.4C0 1.5 1.4 0 3.6 0C5.9 0 7.2 1.5 7.2 3.4ZM0.2 31.6V9.6H7V31.6H0.2ZM11.1 16.6C11.1 13.9 11 11.6 10.9 9.6H16.8L17.1 12.7H17.2C18.1 11.3 20.3 9.1 24 9.1C28.5 9.1 31.9 12.1 31.9 18.6V31.6H25.1V19.4C25.1 16.6 24.1 14.6 21.6 14.6C19.7 14.6 18.6 15.9 18.1 17.2C18 17.6 18 18.2 18 18.9V31.6H11.2V16.6H11.1Z" />
  </svg>
);

export { LinkedIn };

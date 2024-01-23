interface TwitchProps {
  className?: string;
  size?: number;
}

const Twitch = ({ className = '', size = 32 }: TwitchProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.11411 0L1 5.47748V27.7718H8.68769L8.59159 31.9039L12.7237 32L16.8559 27.7718H23.1982L31.3664 19.5075V0H3.11411ZM28.6757 17.8739L23.6787 22.8709H16.2793L12.1471 27.003V22.7748H5.9009L5.70871 2.59459H28.6757V17.8739V17.8739Z" />
    <path d="M16.1832 8.36035H13.4926V16.6246H16.1832V8.36035Z" />
    <path d="M23.7748 8.36035H21.0841V16.6246H23.7748V8.36035Z" />
  </svg>
);

export { Twitch };

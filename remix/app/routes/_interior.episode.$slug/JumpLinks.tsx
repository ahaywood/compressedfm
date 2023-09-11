import { calculateTime } from "~/lib/timeHelpers";

interface JumpLinksProps {
  className: string;
  timeJump: TimeJump[];
  handleClick: (time: string) => void;
}

const JumpLinks = ({ className, timeJump, handleClick }: JumpLinksProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>, time: string) => {
    e.preventDefault();
    handleClick(time);
  };

  return (
    <div className={className}>
      <h4 className="heading">Jump Links</h4>
      <ul className="list-none m-0 p-0">
        {timeJump &&
          timeJump.map((one) => (
            <li key={one._key} className="mb-[15px]">
              <button
                type="button"
                onClick={(e) => onClick(e, one.time)}
                className="relative time-jump bg-transparent border-none cursor-pointer grid grid-cols-[60px_1fr] no-underline hover:left-0 left-0 top-0"
              >
                <div className="time-code text-yellow block font-sans text-lg font-black leading-none mr-[10px] relative text-center top-0 md:top-[5px]">
                  {calculateTime(parseInt(one.time))}
                </div>
                <div className="description text-white text-left leading-none mb-0 md:leading-normal">
                  {one.description}
                </div>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { JumpLinks };

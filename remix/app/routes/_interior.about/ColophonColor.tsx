interface ColophonColorProps {
  border?: string;
  color: string;
}

const ColophonColor = ({ border = '', color }: ColophonColorProps) => {
  return (
    <div className="font-mono text-lg text-center uppercase">
      <div
        className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] border-1 border-transparent rounded-full mt-0 mx-auto mb-4"
        style={{ backgroundColor: color, borderColor: border }}
      />
      <div className="none sm:block">{color}</div>
    </div>
  );
};

export default ColophonColor;

interface FancyLineProps {
  width?: string;
  className?: string;
}

export const FancyLine = ({
  width = "w-24",
  className = "",
}: FancyLineProps) => {
  return (
    <div
      className={`
        fancy-line
        ${width}
        ${className}
      `}
    />
  );
};

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ContainerMedium = ({ children, className = "" }: Props) => {
  return (
    <div className={`${className && className + " "}max-w-6xl mx-auto`}>
      {children}
    </div>
  );
};

export default ContainerMedium;

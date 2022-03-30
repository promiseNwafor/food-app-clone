import DesktopDisplay from "./DesktopDisplay";
import MobileDisplay from "./MobileDisplay";

type Props = {};

const LowerBar: React.FC<Props> = () => {
  return (
    <div
      className={`shadow-lg h-16 flex flex-col justify-center z-20
        `}
    >
      <DesktopDisplay />
      <MobileDisplay />
    </div>
  );
};

export default LowerBar;

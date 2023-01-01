import { Label } from "./AppLabelStyle";

interface AppLabelProps {
  htmlFor?: string;
  text?: React.ReactNode;
}

const AppLabel: React.FC<AppLabelProps> = ({ htmlFor, text }) => {
  return <Label htmlFor={htmlFor}>{text}</Label>;
};

export default AppLabel;

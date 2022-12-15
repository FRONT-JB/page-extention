import useAbout from "./hooks/useAbout";
import {
  useWeighingContext,
  WeighingContextType,
  WeighingProvider,
} from "./provider/about.provider";
import { Button } from "./ui";

const Index = () => {
  const { value } = useAbout();
  const { text } = useWeighingContext() as WeighingContextType;
  return (
    <div>
      <span>Index</span>
      <Button>{value}</Button>
      <p>{text}</p>
    </div>
  );
};

const IndexPage = () => (
  <WeighingProvider>
    <Index />
  </WeighingProvider>
);

export default IndexPage;

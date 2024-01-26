import Jumbo from "../components/Jumbo";
import Services from "../components/Services";
import Images from "../components/Images";
import SubscriptionCard from "../components/SubscriptionCard";

export default function Home() {
  return (
    <div>
      <Jumbo></Jumbo>
      <Services></Services>
      <Images></Images>
      <SubscriptionCard></SubscriptionCard>
    </div>
  );
}

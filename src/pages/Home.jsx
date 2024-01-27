import Jumbo from "../components/Jumbo";
import Services from "../components/Services";
import Images from "../components/Images";
import SubscriptionCard from "../components/SubscriptionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Home() {
  const subscriptionOptions = [
    {
      id: 1,
      title: "Silver",
      price: "4,99€",
      period: "/month",
      service: [
        "5 Match a day",
        "10 Messages a day",
        "10 Likes a day",
        "Email Support",
      ],
    },
    {
      id: 2,
      title: "Gold",
      price: "9,99€",
      period: "/month",
      service: [
        "Unlimited Matches",
        "Unlimited Messages",
        "20 Likes a day",
        "Priority Support",
      ],
    },
    {
      id: 3,
      title: "Platinum",
      price: "14,99€",
      period: "/month",
      service: [
        "All Gold features",
        "HD Quality",
        "30 Likes a day",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <div>
      <Jumbo />
      <Services />
      <Images />
      <div className="bg-gray-200 py-12 px-4 text-center">
        <h2 className="text-black text-4xl md:text-6xl mb-10">
          A plan for every player's needs.
        </h2>
        <div className="hidden lg:flex flex-wrap justify-center gap-10 px-4">
          {/* Subscription Cards in a row for desktop */}
          {subscriptionOptions.map((option) => (
            <SubscriptionCard key={option.id} cards={[option]} />
          ))}
        </div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mx-2 lg:hidden"
        >
          {subscriptionOptions.map((option) => (
            <SwiperSlide key={option.id}>
              <SubscriptionCard cards={[option]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

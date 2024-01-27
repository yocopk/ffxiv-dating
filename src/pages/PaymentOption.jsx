const PaymentOption = ({ title, price, features }) => (
  <div className="bg-white shadow p-6 rounded-md mb-4">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">${price} per month</p>
    <ul className="list-disc list-inside">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600">
          {feature}
        </li>
      ))}
    </ul>
    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Subscribe
    </button>
  </div>
);

const PaymentOptions = () => {
  const options = [
    {
      title: "Basic Plan",
      price: 9.99,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Standard Plan",
      price: 19.99,
      features: ["All Basic features", "HD Quality", "Feature 4"],
    },
    {
      title: "Premium Plan",
      price: 29.99,
      features: ["All Standard features", "4K Quality", "Feature 5"],
    },
  ];

  return (
    <div className="flex justify-center">
      {options.map((option, index) => (
        <PaymentOption key={index} {...option} />
      ))}
    </div>
  );
};

export default PaymentOptions;

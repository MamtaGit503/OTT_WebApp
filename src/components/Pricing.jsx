const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "9.99",
      period: "month",
      features: [
        "HD Streaming",
        "Access to basic content",
        "Single device at a time",
        "Limited downloads",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "14.99",
      period: "month",
      features: [
        "4K Ultra HD Streaming",
        "Access to all content",
        "Two devices simultaneously",
        "Unlimited downloads",
        "Early access to new releases",
      ],
      popular: true,
    },
    {
      name: "Family",
      price: "19.99",
      period: "month",
      features: [
        "4K Ultra HD Streaming",
        "Access to all content",
        "Four devices simultaneously",
        "Unlimited downloads",
        "Early access to new releases",
        "Up to 5 user profiles",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Subscription Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary transform md:-translate-y-4"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-1 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#ff0065] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-dark"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

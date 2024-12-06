import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          This is
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-value text-primary-content text-4xl font-bold tracking-widest">
              Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8  max-w-2xl mx-auto font-serif">
        <b className="flex flex-wrap justify-center">Welcome to our Royal furniture,Your One-Stop Furniture Destination!</b><br/>
        At Royal furniture, we believe your home deserves furniture that
        combines elegance, comfort, and functionality. Located in vijayawada,
        our store offers a carefully curated collection of high-quality
        furniture pieces designed to transform every room in your home. Whether
        you’re looking for a luxurious sofa, a chic dining set, or ergonomic
        office furniture, we have something to suit your style and budget. We
        take pride in offering a seamless shopping experience with excellent
        customer service. From personalized recommendations to doorstep delivery
        and installation, we’re here to make your furniture shopping
        hassle-free. Visit us today and explore our stunning range to create the
        home of your dreams!
      </p>
    </>
  );
};

export default About;

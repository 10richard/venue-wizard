const NewsLetter = () => {
  return (
    <section className="bg-primary py-20 px-10 flex justify-center border-t-4 border-pink">
      <div className="min-[1300px]:w-5/6 flex max-[1300px]:flex-col max-[1300px]:gap-20 items-center justify-between text-white">
        <div className="flex flex-col min-[1300px]:w-[450px] gap-6">
          <h1 className="text-3xl font-bold">Stay in the know</h1>
          <p className="text-lg max-[1300px]:text-base">
            Sign up for our newsletter to never miss out on any promotions or
            discounts
          </p>
        </div>

        <div className="sign-up flex max-[1300px]:flex-col max-[1300px]:gap-4 max-[1300px]:w-full">
          <input
            className="bg-white p-4 rounded-xl min-[1300px]:mr-4 min-[1300px]:w-[350px]"
            type="text"
            placeholder="Email Address"
          />
          <button className="bg-secondary p-4 rounded-xl">Join the List</button>
        </div>
      </div>
      {/* Sign up for our newsletter to never miss out on any promotions or discounts */}
    </section>
  );
};

export default NewsLetter;

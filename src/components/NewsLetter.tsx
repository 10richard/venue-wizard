const NewsLetter = () => {
  return (
    <section className="py-20 px-10 flex justify-center border-t-2 border-black">
      <div className="min-[1300px]:w-5/6 flex max-[1300px]:flex-col max-[1300px]:gap-20 items-center justify-between">
        <div className="flex flex-col min-[1300px]:w-[450px] gap-6">
          <h1 className="text-3xl font-bold">Stay in the know</h1>
          <p>
            Sign up for our newsletter to never miss out on any promotions or
            discounts
          </p>
        </div>

        <div className="sign-up flex max-[1300px]:flex-col max-[1300px]:gap-4 max-[1300px]:w-full">
          <input
            className="bg-white p-4 rounded-xl border-gray-400 border min-[1300px]:mr-4 min-[1300px]:w-[350px]"
            type="text"
            placeholder="Email Address"
          />
          <button className="bg-secondary p-4 rounded-xl text-white hover:brightness-[.85] duration-300">
            Join the List
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

const Result = () => {
  return (
    <section
      aria-labelledby="result"
      className="bg-linear-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] font-hanken rounded-2xl p-4 w-full sm:w-[40%] grid gap-4 justify-items-center pt-8 sm:pt-auto"
    >
      <p
        id="result"
        className="result__header text-gray-300 font-bold text-4xl"
      >
        Your Result
      </p>

      <div className="result__circle bg-linear-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] rounded-full p-12 px-16 grid justify-items-center gap-3">
        {/* calculated and replaced by state */}
        <h1 className="result__number font-extrabold text-7xl text-white">
          76
        </h1>

        <p className="result__total font-bold text-xl text-gray-300">of 100</p>
      </div>

      <div className="result__description grid justify-items-center gap-3 px-12">
        <p className="result__description__title text-white font-extrabold text-3xl">
          Greate
        </p>
        <p className="result__description__body text-gray-300 text-xl text-center">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};

export default Result;

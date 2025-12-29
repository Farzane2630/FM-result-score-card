const Result = () => {
  return (
    <section aria-label="result-section" id="result_container" className="bg-[#2e2be9] font-hanken">
      <p className="result__header">Your Result</p>

      <div className="result__circle">
        {/* calculated and replaced by state */}
        <h1 className="result__number">76</h1>

        <p className="result__total">of 100</p>
      </div>

      <div className="result__description">
        <p className="result__description__title">Greate</p>
        <p className="result__description__body">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};

export default Result;

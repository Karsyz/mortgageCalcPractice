import { useState, useEffect } from 'react';

const Index = () => {
  const [mortgageAmount, setMortgageAmount] = useState(100000);
  const [downPayment, setDownPayment] = useState(80000);
  const [apr, setApr] = useState(4.52);
  const [years, setYears] = useState(25);

  const [payment, setPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const loanAmount = mortgageAmount - downPayment

  function calculate() {
    const qtyOfPayments = years * 12;
    const payment =
      (loanAmount *
        ((apr / 100 / 12) * Math.pow(1 + apr / 100 / 12, qtyOfPayments))) /
      (Math.pow(1 + apr / 100 / 12, qtyOfPayments) - 1);
    const totalPayments = payment * 12 * years;
  
    const totalInterest = totalPayments - loanAmount;

    setPayment(Number(payment.toFixed(2)));
    setTotalPayment(Number(totalPayments.toFixed(2)));
    setTotalInterest(Number(totalInterest.toFixed(2)));
  }

  useEffect(() => {
    setPayment(0);
    setTotalPayment(0);
    setTotalInterest(0);
  }, [mortgageAmount, loanAmount, apr, years]);

  return (
    <div className="w-full min-h-screen p-10 bg-slate-800 flex flex-row justify-center">
      <div className="w-fit">
        <div className="flex flex-col gap-6 bg-slate-500/30 p-10 rounded-lg w-fit">
          <h1 className="text-amber-300 font-bold text-3xl">Inputs</h1>
          <label className=" text-slate-50 w-full flex flex-row justify-between">
            Mortgage Amount
            <input
              type="number"
              pattern="[0-9]+"
              value={mortgageAmount}
              className="bg-slate-50 ml-4 px-3 py-1 rounded-md text-slate-900"
              onChange={(e) => setMortgageAmount(Number(e.target.value))}
            />
          </label>
          <label className="text-slate-50 w-full flex flex-row justify-between">
            Downpayment
            <input
              type="number"
              pattern="[0-9]+"
              value={downPayment}
              className="bg-slate-50 ml-4 px-3 py-1 rounded-md text-slate-900"
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </label>
          <label className="text-slate-50 w-full flex flex-row justify-between">
            Annual Percentage Rate
            <input
              type="number"
              pattern="[0-9]+"
              value={apr}
              className="bg-slate-50 ml-4 px-3 py-1 rounded-md text-slate-900"
              onChange={(e) => setApr(Number(e.target.value))}
            />
          </label>
          <label className="text-slate-50 w-full flex flex-row justify-between">
            Term Length (years)
            <input
              type="number"
              pattern="[0-9]+"
              value={years}
              className="bg-slate-50 ml-4 px-3 py-1 rounded-md text-slate-900"
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </label>
          <button className="bg-blue-300 rounded-md py-2" onClick={calculate}>
            Calculate
          </button>
        </div>

        <div className="flex flex-col gap-4 bg-slate-500/30 p-10 rounded-lg w-full mt-10">
          <h2 className="text-amber-300 font-bold text-3xl">Outputs</h2>
          <p className="text-slate-50 font-semibold text-xl flex flex-row justify-between">
            <span>Monthly Mortgage Payment:</span>{' '}
            {payment > 0 && `$${payment}`}
          </p>
          <p className="text-slate-50 font-semibold text-xl flex flex-row justify-between">
            <span>Total Payment Amount:</span>{' '}
            {totalPayment > 0 && `$${totalPayment}`}
          </p>
          <p className="text-slate-50 font-semibold text-xl flex flex-row justify-between">
            <span>Total Interest Paid:</span>{' '}
            {totalInterest > 0 && `$${totalInterest}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

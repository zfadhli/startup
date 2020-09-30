const amounts = [
  { credit: 10000, price: 0.02, prepay: 200 },
  { credit: 20000, price: 0.01, prepay: 250 },
  { credit: 50000, price: 0.01, prepay: 500 },
  { credit: 75000, price: 0.01, prepay: 250 },
  { credit: 200000, price: 0.05, prepay: 500 },
]

export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">Pay as you go</h2>
          <div className="grid grid-cols-3 gap-16 mt-8">
            <table className="w-full col-span-2 table-fixed">
              <thead className="text-left border-b-2">
                <th className="py-2 text-sm font-bold text-gray-500 uppercase">Email Credit</th>
                <th className="py-2 text-sm font-bold text-gray-500 uppercase">Price per Email</th>
                <th className="py-2 text-sm font-bold text-gray-500 uppercase">Prepay Amount</th>
              </thead>
              <tbody>
                {amounts.map((amount) => (
                  <tr className="text-left border-b-2 border-gray-100" key={amount.credit}>
                    <th className="px-4 py-4 font-normal">{amount.credit}</th>
                    <th className="px-4 py-4 font-normal">{amount.price}</th>
                    <th className="px-4 py-4 font-normal">${amount.prepay}</th>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-8 bg-gray-100 rounded-lg shadow">
              <h3 className="font-bold">Easy Start</h3>
              <p className="mt-4 text-gray-500">
                To get started, you select the desired sample and base the entire website on it.
                It’s that simple!
              </p>
              <button className="px-6 py-3 mt-8 text-sm font-bold text-white bg-green-400 rounded-full shadow">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

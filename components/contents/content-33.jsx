const tables = [
  {
    feature: 'Add Files',
    description: 'Add anything from photos to spreadsheets',
    free: '5 Mb per File',
    pro: 'Unlimited',
  },
  {
    feature: 'Assign To-dos',
    description: 'Delegate responsibilities like a bos',
    free: '25 Assigns per List',
    pro: 'Unlimited',
  },
  {
    feature: 'Subtasks',
    description: 'Break down large goals into acionable to-dos',
    free: '25 per To-do',
    pro: 'Unlimited',
  },
  {
    feature: 'Backgrounds',
    description: 'Personalize your Wunderlist just the way you like',
    free: '20 Backgrounds',
    pro: '30 Backgrounds',
  },
  {
    feature: 'Team',
    description: 'Make best team in the world',
    free: '10 Members',
    pro: 'Unlimited',
  },
]

export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center">What’s Inside?</h2>
          <table className="w-full col-span-2 mt-8 table-fixed">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-4 text-sm font-bold text-gray-500 uppercase">Features</th>
                <th className="px-4 py-4 text-sm font-bold text-gray-500 uppercase"></th>
                <th className="px-4 py-4 text-sm font-bold text-gray-500 uppercase">Free</th>
                <th className="px-4 py-4 text-sm font-bold text-gray-500 uppercase">Pro</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((table, i) => (
                <tr
                  className={`text-left ${i % 2 == 0 ? 'bg-gray-100' : 'bg-white'}`}
                  key={table.feature}
                >
                  <th className="px-4 py-4 font-normal">{table.feature}</th>
                  <th className="px-4 py-4 font-normal">{table.description}</th>
                  <th className="px-4 py-4 font-normal">{table.free}</th>
                  <th className="px-4 py-4 font-normal">${table.pro}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

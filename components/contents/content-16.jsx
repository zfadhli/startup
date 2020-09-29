export default function content() {
  return (
    <>
      <div className="py-20 bg-indigo-700">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-16">
            <div className="flex items-center justify-center col-span-1 bg-gray-900 rounded-lg shadow">
              <div className="w-24 h-24 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-3 space-y-4">
              <p className="text-4xl font-bold text-white">Many Useful Components</p>
              <p className="text-gray-200">
                With Startup Framework, we don’t make you start from an empty slate. All you have to
                do is to pick the elements you like best and combine them together and we guarantee
                that it will look fantastic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

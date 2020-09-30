import bgImage from '@/assets/bg-02.jpg'

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-5 gap-16">
            <div className="col-span-2">
              <h3 className="text-xl font-bold">Many Blocks and Components</h3>
              <p className="mt-4 text-gray-500">
                Startup Framework contains components and complex blocks which can easily be
                integrated into almost any design.{' '}
              </p>
              <button className="px-6 py-2 mt-8 text-sm font-bold border-2 rounded-full">
                Explore
              </button>
            </div>
            <div className="col-span-3">
              <div
                className="relative w-full h-full bg-indigo-400 rounded-lg shadow"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundRepeat: 'no-repat',
                  backgroundSize: 'cover',
                  backgroundBlendMode: 'multiply',
                }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-16 h-16 text-white">
                    <Icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

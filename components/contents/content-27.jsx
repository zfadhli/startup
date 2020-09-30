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
      <div className="py-20 bg-indigo-700">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white">
            We’ve created the product that will <br /> help your startup look better
          </h2>
          <div
            className="relative w-full mt-8 bg-indigo-400 rounded-lg shadow-lg h-96"
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
        <div className="grid max-w-4xl grid-cols-2 gap-16 mx-auto mt-16">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase">Feel Our Design</h3>
              <p className="mt-4 text-gray-200">
                Startup Design Framework contains components which can easily be integrated into
                almost any design.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase">High Resolution</h3>
              <p className="mt-4 text-gray-200">
                We did a 2.5K size high resolution photo that will suit even for a very web site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

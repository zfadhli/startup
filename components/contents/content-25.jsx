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
      <div className="bg-white h-128">
        <div
          className="relative w-full h-full bg-indigo-400 shadow"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-32 h-32 text-white">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

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
      <div className="py-20 bg-white h-128">
        <div
          class="relative shadow bg-indigo-400 rounded-lg max-w-4xl mx-auto w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=75')",
            backgroundRepeat: 'no-repat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
          }}
        >
          <div className="absolute p-8">
            <span className="px-4 py-2 text-sm font-bold text-red-600 uppercase bg-white rounded shadow">
              zfadhli
            </span>
          </div>
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

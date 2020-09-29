export default function content() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute z-0 overlay">
          <img
            src={require('@/assets/bg-03.jpg')}
            alt="bg image"
            className="object-none"
            style={{
              objectPosition: '50% 100%',
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl py-20 mx-auto">
          <div className="grid grid-cols-5 gap-16">
            <div className="col-span-3 space-y-4">
              <p className="font-bold text-white">Components</p>
              <p className="text-gray-200">
                Startup Design Framework contains components and complex blocks which can easily be
                integrated into almost any design. All of these components are made in the same
                style, and can easily be integrated into projects, allowing you to create hundreds
                of solutions for your future projects. Also We prepared some high-quality photos
                that you can use in your projects.
              </p>
            </div>
            <div className="col-span-2">
              <div className="flex items-center justify-center w-full h-full bg-white rounded-lg">
                <div className="p-8">
                  <p className="font-medium text-center">
                    We haven’t forgotten about responsive layout. With Startup Framework, you can
                    create a website with full mobile support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

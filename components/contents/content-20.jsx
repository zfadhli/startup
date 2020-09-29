export default function content() {
  return (
    <>
      <div className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold">Easy steps</h2>

          <div className="relative mt-8 space-y-8">
            <div
              className="absolute top-0 h-full border-r-4 border-gray-200"
              style={{ left: '20px' }}
            ></div>
            <div className="relative z-10 space-y-12">
              <div className="flex">
                <div className="-mt-2">
                  <span className="flex items-center justify-center w-10 h-10 font-bold bg-gray-200 rounded-full">
                    1
                  </span>
                </div>
                <div className="ml-8 space-y-4">
                  <p className="font-bold">How Startup Framework works?</p>
                  <p className="text-gray-500">
                    The Generator App is an online tool that helps you to export ready-made
                    templates ready to work as your future website. It helps you to combine slides,
                    panels and other components and export it as a set of static files: HTML/CSS/JS.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="-mt-2">
                  <span className="flex items-center justify-center w-10 h-10 font-bold bg-gray-200 rounded-full">
                    2
                  </span>
                </div>
                <div className="ml-8 space-y-4">
                  <p className="font-bold">Twenty five awesome samples</p>
                  <p className="text-gray-500">
                    The most important part of the Startup Framework is the samples. The samples
                    form a set of 25 usable pages you can use as is or you can add new blocks from
                    UI Kit. By choosing one of the 25 configurations of the future startup, the
                    process of creation is simple and easy.
                  </p>
                  <div className="grid grid-cols-4 gap-8">
                    <div className="h-32 col-span-1 overflow-hidden rounded-lg shadow">
                      <img
                        src={require('@/assets/bg-04.jpg')}
                        alt="bg image"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="col-span-2 space-y-4">
                      <p className="text-sm font-bold uppercase">Fell our design</p>
                      <p className="text-gray-500">
                        Startup Design Framework contains components which can easily be inte-grated
                        into almost any design.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="-mt-2">
                  <span className="flex items-center justify-center w-10 h-10 font-bold bg-gray-200 rounded-full">
                    3
                  </span>
                </div>
                <div className="ml-8 space-y-4">
                  <p className="font-bold">Variety of designs</p>
                  <p className="text-gray-500">
                    You can decide whether to create your site using UI Kit blocks or samples. The
                    blocks can merge together in various combinations.
                  </p>
                  <button className="px-6 py-4 font-bold text-white bg-green-500 rounded-full shadow">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

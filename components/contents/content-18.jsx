import Accordion from '@/components/accordion'

export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto ">
          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-2">
              <Accordion
                title="Easy to Use"
                content="Startup Framework contains components and complex blocks which can easily be integrated into any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions."
              />
              <Accordion
                title="Variety of Designs"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis facere placeat accusamus ullam itaque natus quidem omnis doloremque fuga temporibus optio atque consectetur consequatur autem adipisci, ex nemo expedita."
              />
              <Accordion
                title="Feel our Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veritatis vitae sequi harum ipsam qui quisquam placeat, numquam corporis obcaecati voluptatibus suscipit aspernatur! Nesciunt eum, non explicabo amet eaque sequi!"
              />
            </div>
            <div>
              <div className="p-8 bg-gray-100 rounded-lg shadow">
                <h3 className="font-bold">Have a Question?</h3>
                <p className="mt-4 text-gray-500">
                  Startup Framework includes great form options for your startup projects.
                </p>
                <button className="px-6 py-3 mt-8 text-sm font-bold text-white bg-indigo-500 rounded-full shadow">
                  Get Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

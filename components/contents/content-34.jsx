import Highlight, { defaultProps } from 'prism-react-renderer'

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
)

const exampleCode = `
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
</head>
`.trim()

export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">How we did it</h2>
          <div className="grid grid-cols-3 gap-16 mt-8">
            <div className="col-span-2 p-8 bg-gray-100 rounded-lg shadow">
              <Highlight {...defaultProps} code={exampleCode} language="jsx">
                {({ style, tokens, getLineProps, getTokenProps }) => (
                  <pre className="px-4 py-8 overflow-x-scroll" style={style}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })} className="leading-normal">
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
              <div className="mt-4 prose">
                <pre>
                  {`
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
</head>
                `}
                </pre>
              </div>
            </div>
            <div className="">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold uppercase">Great Code</h3>
              </div>
              <p className="mt-4 text-gray-500">
                You’ll get a description of each component and learn how to connect and use them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

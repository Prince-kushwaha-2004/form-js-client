import Nav from "../components/nav/Nav"
const LandingPage = () => {
    const cards = [
        {
            title: "Reusable Forms",
            description: " Create forms once and reuse them anywhere in your project."
        },
        {
            title: "Seamless Integration",
            description: " Simply import the package and use it with an API key for fast implementation."
        },
        {
            title: "Customizable",
            description: " Tailor the forms to suit your design and functionality needs."
        },
        {
            title: "Effortless Sharing",
            description: " Generate unique links to share forms, making data collection a breeze."
        }
    ]
    return (
        <main className="w-screen h-screen flex flex-col">
            <Nav />
            <div className="bg-purple-700 flex-1 sm:m-4 sm:rounded-4xl  flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold">Create Custom Forms Effortlessly with Form JS</h1>
                <h1 className="text-xl lg:text-2xl text-purple-200">Build, Share, and Integrate Reusable Forms with Ease</h1>
                <div className="flex gap-4">
                    <button className="bg-white px-4 py-2 rounded font-bold">
                        Get Started
                    </button>
                    <button className="bg-black  text-white px-4 py-2 rounded font-bold">
                        Star on Github
                    </button>
                </div>
                <div className="flex gap-4 flex-wrap justify-center mt-16">
                    {cards.map((value, index) => {
                        return (
                            <div
                                className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-md border border-opacity-20 border-purple-400 w-88"
                                key={index}
                            >
                                <div className="flex items-start">
                                    <div
                                        className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center"
                                    >
                                        <span className="text-purple-800">✧</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3
                                            className="text-lg lg:text-xl xl:text-xl xl:text-neutral-800 xl:font-bold  font-medium mb-1"
                                        >
                                            {value.title}
                                        </h3>
                                        <p
                                            className="text-sm xl:text-lg leading-relaxed text-neutral-700"
                                        >
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <h1 className="text-xl lg:text-2xl text-center mt-8 text-purple-200">Start building smarter forms today with Form JS – the easiest way to integrate and manage forms in your project!                </h1> */}

            </div>
        </main>
    )
}

export default LandingPage

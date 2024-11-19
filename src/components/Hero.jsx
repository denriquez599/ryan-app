export default function Hero() {
    return (
      <section className="bg-gray-900 text-white">
        <div className="flex flex-col max-w-7xl mx-auto px-6 py-16 h-screen justify-center items-center text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Ryan's Web App
          </h1>
          <p className="text-lg mb-8">
            Building amazing experiences with Next.js, JavaScript, and Tailwind CSS.
          </p>
          <div className="space-x-4">
            <a
              href="#features"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  }
  
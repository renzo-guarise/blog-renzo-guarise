import Link from "next/link";


export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to My AI Blog
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Exploring the fascinating world of Artificial Intelligence and its impact on our future
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Post</h2>
          <article className="prose lg:prose-xl">
            <h3 className="text-xl font-semibold text-gray-900">
              The Future of AI: Opportunities and Challenges
            </h3>
            <p className="mt-2 text-gray-600">
              Explore the latest developments in AI technology and their potential impact on society...
            </p>
            <div className="mt-4">
              <Link
                href="/blog/future-of-ai"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Example posts - you'll replace these with real data */}
            <article className="prose">
              <h3 className="text-lg font-semibold text-gray-900">
                Machine Learning Basics
              </h3>
              <p className="mt-2 text-gray-600">
                A beginner-friendly introduction to machine learning concepts...
              </p>
              <Link
                href="/blog/machine-learning-basics"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </article>

            <article className="prose">
              <h3 className="text-lg font-semibold text-gray-900">
                Ethics in AI Development
              </h3>
              <p className="mt-2 text-gray-600">
                Exploring the ethical considerations in AI development...
              </p>
              <Link
                href="/blog/ethics-in-ai"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

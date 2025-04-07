export default function Blog() {
  // This would typically come from your CMS or database
  const posts = [
    {
      id: 1,
      title: "The Future of AI: Opportunities and Challenges",
      excerpt: "Explore the latest developments in AI technology and their potential impact on society...",
      date: "2024-03-24",
      slug: "future-of-ai",
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      excerpt: "A beginner-friendly introduction to machine learning concepts...",
      date: "2024-03-23",
      slug: "machine-learning-basics",
    },
    {
      id: 3,
      title: "Ethics in AI Development",
      excerpt: "Exploring the ethical considerations in AI development...",
      date: "2024-03-22",
      slug: "ethics-in-ai",
    },
    // Add more posts as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <time className="text-sm text-gray-500">{post.date}</time>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                {post.title}
              </h2>
              <p className="mt-3 text-gray-600">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 
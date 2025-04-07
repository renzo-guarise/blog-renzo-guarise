export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <section className="prose lg:prose-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Welcome to My Corner of the Internet
            </h2>
            <p className="text-gray-600">
              Hi! Im [Your Name], a passionate explorer of artificial intelligence and its potential to transform our world. 
              Through this blog, I share my insights, learnings, and thoughts about the rapidly evolving field of AI.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              My Background
            </h3>
            <p className="text-gray-600">
              [Add your background here - education, work experience, and what led you to be interested in AI]
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              What I Write About
            </h3>
            <p className="text-gray-600">
              On this blog, youll find articles about:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Latest developments in AI and machine learning</li>
              <li>Practical applications of AI in various industries</li>
              <li>Ethical considerations in AI development</li>
              <li>Tutorials and guides for understanding AI concepts</li>
              <li>Reviews of AI tools and technologies</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Connect With Me
            </h3>
            <p className="text-gray-600">
              I love connecting with fellow AI enthusiasts! You can find me on:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Twitter: [@YourHandle]</li>
              <li>LinkedIn: [Your LinkedIn Profile]</li>
              <li>GitHub: [Your GitHub Profile]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 
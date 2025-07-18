import MobileNav from "@/components/MobileNav";
import TypewriterText from "@/components/TypewriterText";
import { getPortfolioData, getColorClasses } from "@/utils/portfolio";

export default function Home() {
  const data = getPortfolioData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{data.navigation.brand}</div>
            <div className="hidden md:flex space-x-8">
              {data.navigation.links.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <MobileNav links={data.navigation.links} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {data.personal.initials}
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">{data.personal.name}</span>
            </h1>
            <div className="mb-8">
              <TypewriterText texts={data.personal.typewriterTexts} />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {data.personal.bio}
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View My Work
              </a>
              <a href="#contact" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {data.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.skills.categories.map((category) => {
              const colors = getColorClasses(category.color);
              return (
                <div key={category.name} className="text-center">
                  <div className={`w-16 h-16 mx-auto ${colors.bg} ${colors.darkBg} rounded-full flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.name}</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {data.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.items.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-48 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const colors = getColorClasses(tech.color);
                      return (
                        <span 
                          key={tech.name}
                          className={`px-3 py-1 ${colors.bg} ${colors.darkBg} ${colors.text} ${colors.darkText} text-sm rounded-full`}
                        >
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.links.demo} className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                    <a href={project.links.github} className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {data.experience.title}
          </h2>
          <div className="space-y-8">
            {data.experience.items.map((item) => {
              const colors = getColorClasses(item.color);
              return (
                <div key={item.id} className={`border-l-4 ${colors.border} pl-8`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.position}</h3>
                    <span className="text-gray-600 dark:text-gray-400">{item.period}</span>
                  </div>
                  <p className={`${colors.text.replace('800', '600')} ${colors.darkText.replace('200', '400')} font-medium mb-2`}>
                    {item.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {data.contact.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            {data.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${data.contact.email.address}?subject=${encodeURIComponent(data.contact.email.subject)}`}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>📧</span>
              Send Me an Email
            </a>
            <div className="flex gap-6">
              {data.contact.social.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            {data.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

import MobileNav from "@/components/MobileNav";
import TypewriterText from "@/components/TypewriterText";
import Icon from "@/components/Icon";
import { getPortfolioData, getColorClasses } from "@/utils/portfolio";
import Image from "next/image";

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
              <div className="w-32 h-32 mx-auto relative">
                <Image
                  src={data.personal.avatar}
                  alt={data.personal.name}
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                  sizes="128px"
                  priority
                />
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
                    <Icon name={category.icon} className="text-white text-2xl" />
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
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-10`}></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                  
                  {/* Links section moved to bottom and made conditional */}
                  <div className="mt-auto">
                    {(project.links?.demo || project.links?.github) && (
                      <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {project.links?.demo && (
                          <a 
                            href={project.links.demo} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1"
                          >
                            <Icon name="link" className="text-sm" />
                            Live Demo
                          </a>
                        )}
                        {project.links?.github && (
                          <a 
                            href={project.links.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline font-medium flex items-center gap-1"
                          >
                            <Icon name="github" className="text-sm" />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
            {data.experience.title}
          </h2>
          <div className="space-y-4">
            {data.experience.items.map((item) => {
              return (
                <div key={item.id} className="relative pl-6 pb-4 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0">
                  {/* Timeline dot */}
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  
                  {/* Content */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-0.5">{item.position}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full mt-1 sm:mt-0 sm:ml-4 flex-shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speaking & Workshops Section */}
      <section id="speaking" className="py-16 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {data.speaking.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.speaking.items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1">
                        <h3 className={`text-gray-900 dark:text-gray-100 font-bold text-lg mb-0 leading-tight`}>
                          {item.title}
                        </h3>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xs text-gray-500 dark:text-gray-500">{item.date}</div>
                        <div className={`text-xs text-gray-500 dark:text-gray-200 font-medium`}>{item.type}</div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <p className="text-gray-600 dark:text-gray-400 text-xs font-medium">
                        {item.role} • {item.organization}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={item.linkedinPost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0077B5] hover:text-[#005582] text-sm font-medium transition-colors"
                      >
                        <Icon name="linkedin" className="text-base" />
                        View Post
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {data.certifications.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.certifications.items.map((cert) => {
              // Define brand-specific icon colors
              const getIconStyle = (icon: string) => {
                switch (icon) {
                  case 'microsoft':
                    return 'bg-blue-600 dark:bg-blue-600';
                  case 'webflow':
                    return 'bg-purple-600 dark:bg-purple-600';
                  default:
                    return 'bg-gray-600 dark:bg-gray-600';
                }
              };

              return (
                <div
                  key={cert.id}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-10 h-10 ${getIconStyle(cert.icon)} rounded-lg flex-shrink-0 flex items-center justify-center`}>
                    <Icon name={cert.icon} className="text-white text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-1 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                      <span>Issued: <span className="text-gray-700 dark:text-gray-300 font-medium">{cert.issued}</span></span>
                      <span>Expires: <span className="text-gray-700 dark:text-gray-300 font-medium">{cert.expires}</span></span>
                    </div>
                    {cert.url && (
                      <div className="mt-2">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline text-xs font-medium transition-colors"
                        >
                          <Icon name="link" className="text-xs" />
                          View Credential
                        </a>
                      </div>
                    )}
                  </div>
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
              <Icon name="envelope" className="text-lg" />
              Send Me an Email
            </a>
            <div className="flex gap-6">
              {data.contact.social.map((social) => {
                const getIconName = (socialName: string) => {
                  switch (socialName.toLowerCase()) {
                    case 'linkedin':
                      return 'linkedin';
                    case 'github':
                      return 'github';
                    default:
                      return 'link';
                  }
                };
                
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={getIconName(social.name)} size="2x" />
                  </a>
                );
              })}
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

import { Briefcase, Code } from 'lucide-react';
import { User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {' '}
              CS Student & Aspiring Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science and Engineering student with a focus on
              building thoughtful, reliable, and user-friendly solutions. I
              enjoy solving real problems through clean code and continuous
              learning.
            </p>

            <p className="text-muted-foreground">
              I am passionate about learning new languages and constantly trying
              new things. I am working towards a career where I can grow as a
              developer and contribute to impactful real-world projects.
            </p>

            <p className="text-muted-foreground">
              I am building a strong foundation in software engineering with the
              future goal of working on real-time projects. I am interested
              specifically in frontend development and aim to grow in that
              direction.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="border-primary text-primary hover:bg-primary/10 rounded-full border px-6 py-2 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    {' '}
                    Frontend Development{' '}
                  </h4>
                  <p className="text-muted-foreground">
                    Learning to create with HTML, CSS, JavaScript, and React,
                    along with tools like Tailwind CSS and Git.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <User className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold"> CSE Student </h4>
                  <p className="text-muted-foreground">
                    Studying at the Ohio State University with a major in
                    Computer Science and Engineering and a minor in Business.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold"> IT Intern </h4>
                  <p className="text-muted-foreground">
                    {' '}
                    Currently interning at Wexner Medical Center, where I'm
                    getting hands-on experience with enterprise systems and
                    software tools.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

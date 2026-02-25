import imageProfile from '../images/dardar4.jpeg';
import '../css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logoHK from '../images/healthkathon-logo.png';
import logoUniair from '../images/logo-uniair.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faFigma,
  faPython,
  faLaravel,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPaintBrush, faVideo } from '@fortawesome/free-solid-svg-icons';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};



const skillCategories = [
  {
    category: "Frontend & UI",
    skills: [
      { name: 'HTML5', icon: faHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-500' },
      { name: 'JavaScript', icon: faJs, color: 'text-yellow-400' },
      { name: 'ReactJS', icon: faReact, color: 'text-cyan-400' },
      { name: 'Tailwind CSS', icon: faPaintBrush, color: 'text-teal-400' },
      { name: 'Bootstrap', icon: faBootstrap, color: 'text-purple-500' },
    ]
  },
  {
    category: "Backend & Core",
    skills: [
      { name: 'NodeJS', icon: faNodeJs, color: 'text-green-500' },
      { name: 'Python', icon: faPython, color: 'text-blue-400' },
      { name: 'Laravel', icon: faLaravel, color: 'text-red-500' },
      { name: 'SQL/DB', icon: faDatabase, color: 'text-gray-400' },
      { name: 'Git', icon: faGitAlt, color: 'text-orange-600' },
    ]
  },
  {
    category: "Design & Creative",
    skills: [
      { name: 'Figma', icon: faFigma, color: 'text-pink-400' },
      { name: 'Adobe Premiere Pro', icon: faVideo, color: 'text-purple-400' },
      { name: 'Adobe After Effects', icon: faVideo, color: 'text-purple-600' },
      { name: 'Photoshop & Illustrator', icon: faPaintBrush, color: 'text-blue-300' },
      { name: '3D Blender', icon: faPaintBrush, color: 'text-orange-300' },
    ]
  }
];

const AboutMe = ({ data, isPending, error }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.6 } },
    out: { opacity: 0, transition: { duration: 0.4 } },
  };

  const staggerSkills = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div ref={containerRef} initial="initial" animate="in" exit="out" variants={pageVariants} className="bg-cyber-black overflow-hidden relative">
      <div className="fixed inset-0 bg-cyber-grid opacity-10 pointer-events-none z-0 mix-blend-screen"></div>

      {/* Up */}
      <section className="w-100 flex flex-col justify-center items-center relative min-h-screen pt-24 pb-16 px-6 sm:px-12">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-neon-cyan rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-neon-purple rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="w-full max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#0a0a0a] border border-gray-800 cyber-card p-1">
              <img src={imageProfile} alt="Darren Ezra" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{ maxHeight: '600px' }} />

              {/* Social Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur border border-white/10 p-4 flex justify-around items-center rounded-sm">
                <a href="https://www.instagram.com/darrenezra_/" target="_blank" rel="noreferrer" className="text-xl text-gray-400 hover:text-fuchsia-400 hover:scale-110 duration-300">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/darren-ezra-9090/" target="_blank" rel="noreferrer" className="text-xl text-gray-400 hover:text-blue-500 hover:scale-110 duration-300">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/RenderDek90" target="_blank" rel="noreferrer" className="text-xl text-gray-400 hover:text-orange-500 hover:scale-110 duration-300">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:darrenezra902@gmail.com" className="text-xl text-gray-400 hover:text-cyan-400 hover:scale-110 duration-300">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500 dark:from-white dark:to-gray-600 tracking-tighter mb-4">I'm Darren.</h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple tracking-widest uppercase mb-6 font-mono">RPA Technical Lead</h2>

            <div className="flex gap-4 mb-8">
              <div className="h-[2px] w-24 bg-neon-cyan shadow-[0_0_10px_#00f3ff]"></div>
              <div className="h-[2px] w-12 bg-neon-pink shadow-[0_0_10px_#ff003c]"></div>
            </div>

            <div className="text-gray-300 text-lg leading-relaxed space-y-6 font-light">
              <p>
                Graduated from <a href="https://binus.ac.id/" target="_blank" rel="noreferrer" className="text-neon-cyan hover:underline decoration-neon-cyan/50 font-medium">Bina Nusantara University</a> with a degree in Computer Science (2024).
                I currently spearhead automation initiatives as an <strong className="text-white font-semibold">RPA Technical Lead</strong>, where I bridge the gap between complex engineering architectures and seamless business processes.
              </p>
              <p>
                My passion lies in architecting robust, scalable systems that merge technical complexity with elegant, user-centric design. Drawing from a diverse background in both software engineering and digital design, I pride myself on delivering comprehensive solutions that operate at the intersection of <em className="text-neon-pink not-italic font-medium">creativity</em> and <em className="text-neon-cyan not-italic font-medium">cutting-edge technology</em>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="p-10 min-h-screen bg-[#050505] text-white relative border-t border-gray-800" id="skillset">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
          <p className="text-center text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Skillset</p>
          <div className="bg-neon-cyan h-[2px] w-40 mx-auto mt-2 shadow-[0_0_10px_#00f3ff]"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto my-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {skillCategories.map((categoryGroup, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel p-8 cyber-card border border-gray-800 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold font-mono text-slate-800 dark:text-white mb-6 text-center group-hover:text-accent-primary transition-colors">{categoryGroup.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={skillItem}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/5 dark:bg-black/40 border border-slate-200 dark:border-white/5 hover:border-accent-primary/50 dark:hover:border-white/20 hover:bg-black/10 dark:hover:bg-black/60 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={skill.icon} className={`text-3xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-xs text-center text-slate-700 dark:text-gray-400 font-medium tracking-wide">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="w-full flex justify-center py-10">
          <Link to="/V2-DSITE/portfolio" className="glass-button px-8 py-3 rounded-full flex items-center justify-center gap-3 text-neon-cyan font-semibold tracking-wide hover:scale-105 group" onClick={scrollToTop}>
            <span>View My Portfolio</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Story */}
      {/* <section className="sm:p-10 px-2 py-5 h-100 lg:max-h-screen bg-white text-black" id="story">
        <p className="text-center text-3xl font-bold">My Story</p>
        <div className="bg-cyan-500 h-[2px] w-40 mx-auto mt-2"></div>

        <div className="lg:grid lg:grid-cols-2 block p-12 gap-10">
          <div className="Story">
            <p>
              When I was a kid, I don't know what my life would be about. I'm a proud Christian, so I just follow the path that <strong>God has given me</strong>. I'll share with you a little story about myself.
            </p>
            <br />
            <p>
              While being an <strong>average student </strong>at my school, turns out I'm a <strong>competitive person</strong>, that wanted to be the best at the class (But, I wasn't). But, I keep trusting myself to be the best I can be,
              and try to love learning new things. Just like Dory said, <i>"Just Keep Swimming"</i>, you'll never know what would you find.
            </p>
            <br />
            <p>
              I developed a lot of new skills during my childhood and I loved them. I love to play <strong>music instruments</strong> (Piano and Guitar), designing, and always have these curiosity when trying something new.
            </p>
            <br />
            <p>
              College went by, and it turns me upside down. I love to be in a community, love to teach someone, and find interesting to know about someone life and be part of their lives. Then I found these interesting technology world,
              where there are terms called <strong>Frontend-Backend</strong>, <strong>Machine Learning</strong>, <strong>Artificial Intelligence</strong>, and a lot of other tech-things.
            </p>
          </div>
          <div>
            <p>
              It enlightens me, and I found it interesting. So I try to learn to know more about Computer Science. Suddenly I love to learn how to be a <strong>Web Developer</strong>, <strong>Full Stack Engineer</strong>, and{' '}
              <strong>Mobile Programmer</strong>.
            </p>
            <br />
            <p>
              Therefore, I've experienced using <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>PHP</strong>, <strong>MySQL</strong>, PHP Framework (<strong>Laravel</strong>), CSS Framework (
              <strong>Tailwind, Bootstrap</strong>), and JS Framework (<strong>JQuery, AJAX, SwiperJS</strong>). I've started learning <strong>ReactJS</strong>, <strong>Flutter</strong>, <strong>MongoDB</strong>, <strong>NodeJS</strong>,{' '}
              <strong>ExpressJS</strong>, and still has the curiosity of learning other things.
            </p>
            <br />
            <p>
              Besides Coding, I have a creativity-side and had experienced using <strong>Adobe Premiere Pro</strong>, <strong>Adobe After Effects</strong>, <strong>Adobe Photoshop</strong>, <strong>Adobe Illustrator</strong>,{' '}
              <strong>Adobe Media Encoder</strong>, <strong>Figma</strong>, and <strong>3D Blender</strong>.
            </p>
            <br />
            <p>
              For me, <strong>Design</strong> and <strong>Coding</strong> skills are the best combination.
            </p>
          </div>
        </div>
      </section> */}

      {/* Experience */}
      <section className="p-10 max-w-6xl mx-auto h-fit text-primary relative" id="experience">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <p className="text-4xl font-bold tracking-tight text-gradient-primary">Experiences</p>
          <div className="bg-gradient-to-r from-transparent via-accent-primary to-transparent h-[2px] w-40 mx-auto mt-4 opacity-50"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto px-4 md:px-0">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] md:w-[3px] md:-translate-x-1/2 bg-slate-700 dark:bg-slate-300 md:bg-accent-primary opacity-30"></div>

          {/* Timeline Item 1 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mb-12 md:flex md:justify-between md:items-center w-full md:even:flex-row-reverse group">
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div className="z-20 absolute left-[16px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-6 h-6 bg-accent-primary rounded-full ring-4 ring-bg-primary shadow-[0_0_15px_var(--accent-primary)] group-hover:scale-125 transition-transform duration-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="order-1 glass-panel p-8 w-[calc(100%-3rem)] md:w-5/12 ml-[3rem] md:ml-0 relative overflow-hidden group-hover:border-accent-primary/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <img src={logoUniair} alt="" className="rounded-full bg-white p-2 w-16 h-16 shadow-lg object-contain" />
                <div>
                  <h3 className="font-bold text-2xl text-slate-800 dark:text-white">PT Uniair Cargo</h3>
                  <p className="font-medium text-lg text-accent-primary">Web Developer Intern <span className="text-slate-400">→</span> RPA Tech Lead</p>
                  <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider">Feb 2023 - present</p>
                </div>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-3 mt-4 text-sm font-light leading-relaxed list-disc list-inside">
                <li>Engineered and maintained the corporate website, ensuring high-performance responsiveness and an optimized cross-device user experience.</li>
                <li>Architected and deployed enterprise-grade Robotic Process Automation (RPA) workflows, slashing task completion times by over 50% across key departments.</li>
                <li>Spearheaded cross-company automation initiatives, streamlining document processing and significantly increasing operational efficiency.</li>
                <li>As an RPA Technical Lead, I set the strategic direction for automation, mentored development teams, and aligned technical deliverables with high-level business objectives.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Laravel', 'NodeJS', 'NextJS', 'Python', 'UIBot'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-700">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mb-12 md:flex md:justify-between md:items-center w-full md:even:flex-row-reverse group">
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div className="z-20 absolute left-[16px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-6 h-6 bg-accent-secondary rounded-full ring-4 ring-bg-primary shadow-[0_0_15px_var(--accent-secondary)] group-hover:scale-125 transition-transform duration-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="order-1 glass-panel p-8 w-[calc(100%-3rem)] md:w-5/12 ml-[3rem] md:ml-0 relative overflow-hidden group-hover:border-accent-secondary/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <img src={logoHK} alt="" className="rounded-full bg-white p-2 w-16 h-16 shadow-lg object-contain" />
                <div>
                  <h3 className="font-bold text-2xl text-slate-800 dark:text-white">Healthkathon 2023</h3>
                  <p className="font-medium text-lg text-accent-secondary">Full Stack Developer</p>
                  <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider">Sep 2023 - Nov 2023</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-light leading-relaxed mt-4">
                Spearheaded an AI innovation project aimed at enhancing the BPJS Kesehatan application. Translating user feedback into technical requirements, our team engineered a novel Deep Learning Model designed to provide highly accurate, contextualised medical information processing in the Indonesian language.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Laravel', 'Python', 'React-Native', 'Canva'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-700">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mb-12 md:flex md:justify-between md:items-center w-full md:even:flex-row-reverse group">
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div className="z-20 absolute left-[16px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-6 h-6 bg-accent-tertiary rounded-full ring-4 ring-bg-primary shadow-[0_0_15px_var(--accent-tertiary)] group-hover:scale-125 transition-transform duration-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="order-1 glass-panel p-8 w-[calc(100%-3rem)] md:w-5/12 ml-[3rem] md:ml-0 relative overflow-hidden group-hover:border-accent-tertiary/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-tertiary rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <img src="https://student-activity.binus.ac.id/himti/wp-content/uploads/sites/13/2017/01/LOGO-HIMTI-150x150.png" alt="" className="rounded-full bg-white p-2 w-16 h-16 shadow-lg object-contain" />
                <div>
                  <h3 className="font-bold text-2xl text-slate-800 dark:text-white">HIMTI 2022</h3>
                  <p className="font-medium text-lg text-accent-tertiary">Manager of Creative & Design</p>
                  <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider">Feb 2022 - Mar 2023</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-light leading-relaxed mt-4">
                Directed a cross-functional Creative and Design team across two major campuses. Fostered deep collaboration with the Web Development division to consistently deliver high-impact, visually compelling multimedia projects for university events.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Figma', 'Premiere Pro', 'After Effects', 'Photoshop', 'Blender'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-700">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default AboutMe;

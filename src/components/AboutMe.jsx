import imageProfile from '../images/dardar4.jpeg';
import '../css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logoHK from '../images/healthkathon-logo.png';
import logoUniair from '../images/logo-uniair.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { motion } from 'framer-motion';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

var removeData = [9990136, 9990151, 10];
var beginnerLevel = [3, 11, 13, 19, 9, 10];
var medLevel = [4, 5, 12];

const skillSets = [
  {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Javascript',
  },
  {
    id: 4,
    name: 'Jquery',
  },
  {
    id: 5,
    name: 'AJAX',
  },
  {
    id: 6,
    name: 'Bootstrap',
  },
  {
    id: 7,
    name: 'Tailwind',
  },
  {
    id: 8,
    name: 'Laravel',
  },
  {
    id: 9,
    name: 'ReactJS',
  },
  {
    id: 10,
    name: 'NodeJS',
  },
  {
    id: 11,
    name: 'NextJS',
  },
  {
    id: 12,
    name: 'Flutter',
  },
  {
    id: 13,
    name: 'Python',
  },
  {
    id: 14,
    name: 'Git',
  },
  {
    id: 15,
    name: 'Figma',
  },
  {
    id: 16,
    name: 'Canva',
  },
  {
    id: 17,
    name: 'Adobe Photoshop',
  },
  {
    id: 18,
    name: 'Adobe Illustrator',
  },
  {
    id: 19,
    name: 'Adobe Premiere Pro',
  },
  {
    id: 20,
    name: 'Adobe After Effects',
  },
  {
    id: 21,
    name: '3D Blender',
  },
];

const AboutMe = ({ data, isPending, error }) => {
  data = skillSets;

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 20 },
  };

  const staggerSkills = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.4 }} className="bg-cyber-black overflow-hidden">
      {/* Up */}
      <section className="w-100 flex flex-row justify-center items-center relative min-h-screen">
        {/* Abstract Cyberpunk Background Elements */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none z-0 mix-blend-screen"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neon-purple rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neon-cyan rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="mt-10 block text-white text-center max-w-[70vw] relative z-10">
          <div className="py-12" id="me">
            <p className="text-6xl font-bold">I'm Darren.</p>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-5 text-left items-center p-5" id="head-section">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7, ease: "easeOut" }} 
              className="w-100 md:pb-0 pb-6"
            >
              <div className="w-fit bg-[#050505] mx-auto picture-div cyber-card relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-cyan opacity-20 pointer-events-none"></div>
                <img src={imageProfile} alt="" className="profile h-[300px] md:h-[400px] mx-2 my-4 relative z-10 border border-gray-800 group-hover:border-neon-cyan transition-colors duration-300" />
                <div className="bg-[#111] h-[80px] flex flex-row justify-center items-center gap-4 sm:gap-5 relative z-10 border-t border-gray-800 group-hover:border-neon-cyan transition-colors duration-300" style={{ borderBottomLeftRadius: '2em', borderBottomRightRadius: '2em' }}>
                  <Link to="https://www.instagram.com/darrenezra_/" target="_blank" className="text-2xl hover:scale-110 duration-300 ease-in-out hover:text-fuchsia-400">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </Link>
                  <Link to="https://www.linkedin.com/in/darren-ezra-9090/" target="_blank" className="text-2xl hover:scale-110 duration-300 ease-in-out hover:text-blue-700">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </Link>
                  <Link to="https://github.com/RenderDek90" target="_blank" className="text-2xl hover:scale-110 duration-300 ease-in-out hover:text-orange-500">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </Link>
                  <Link to="mailto:darrenezra902@gmail.com" target="_blank" className="text-2xl hover:scale-110 duration-300 ease-in-out hover:text-cyan-500">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} 
              className="my-1 sm:my-3"
            >
              <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple tracking-widest uppercase text-glow-cyan">I'm a RPA Technical Lead</span>
              <div className="mt-2 h-[2px] w-[50%] bg-neon-cyan shadow-[0_0_10px_#00f3ff]"></div>
              <div className="mt-1 h-[2px] w-20 bg-neon-pink shadow-[0_0_10px_#ff003c]"></div>
              <p className="mt-5">
                Graduated from{' '}
                <a href="https://binus.ac.id/" target="_blank" className="text-cyan-500 hover:underline">
                    Bina Nusantara University
                </a>{' '}
                majoring in{' '}
                <a href="#computer" className="text-cyan-500 hover:underline">
                    Computer Science
                </a>{' '}
                in 2024. Currently working as an <span className="font-semibold">RPA Technical Lead</span>, 
                where I lead automation initiatives and integrate RPA with AI-driven solutions. 
                My passion for continuous learning drives me to explore new technologies, 
                from web development to intelligent automation. With a background in design, 
                I enjoy building creative and user-focused solutions that combine {" "}
                <span className="italic">creativity</span> and <span className="italic">technology</span>.
                </p>
              <br />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="p-10 min-h-screen bg-[#050505] text-white relative border-t border-gray-800" id="skillset">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
          <p className="text-center text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Skillset</p>
          <div className="bg-neon-cyan h-[2px] w-40 mx-auto mt-2 shadow-[0_0_10px_#00f3ff]"></div>
        </motion.div>

        <motion.div 
          variants={staggerSkills} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-3 mx-auto sm:max-w-[80%] max-w-full my-12"
        >
          {/* {isPending && <div>Loading...</div>} */}
          {/* {error && <div>Error catch API..</div>} */}
          {data &&
            data
              .filter((skill) => !removeData.includes(skill.id))
              .map((skill) => {
                var hover = 'hover:bg-cyan-500';

                if (beginnerLevel.includes(skill.id)) hover = 'hover:bg-green-500';

                if (medLevel.includes(skill.id)) hover = 'hover:bg-yellow-500';

                return (
                  <motion.div 
                    variants={skillItem}
                    className={`px-4 py-2 rounded-sm border border-gray-700 bg-black hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:text-neon-cyan duration-300 ease-in-out text-gray-300 hover:cursor-crosshair font-mono`} 
                    key={skill.id}
                  >
                    <p>{skill.name}</p>
                  </motion.div>
                );
              })}
        </motion.div>
        <div className="w-full relative py-5">
          <Link to="/V2-DSITE/portfolio" className="absolute right-10 hover:text-cyan-500 duration-300 ease-in-out hover:scale-105" onClick={scrollToTop}>
            <span>see my portfolio ---{'>'}</span>
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
      <section className="p-10 max-w-[90%] mx-auto h-fit bg-[#050505] text-white border-t border-gray-800 relative" id="experience">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-center text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Experiences</p>
          <div className="bg-neon-purple h-[2px] w-40 mx-auto mt-2 shadow-[0_0_10px_#b026ff]"></div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="sm:p-12 py-10 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 items-center cyber-card bg-[#111] my-10 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
          <img src={logoUniair} alt="" className="rounded-full p-5 mx-auto bg-black border border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.3)] w-auto h-[150px] sm:my-0 my-2" />
          <div>
            <p className="font-bold text-2xl text-neon-cyan">PT Uniair Cargo</p>
            <p className="font-medium text-xl text-gray-300">Web Developer Intern <span className="text-neon-pink">→</span> RPA Technical Lead</p>
            <p className="font-mono text-sm text-neon-pink mt-1">Feb 2023 - present</p>
            <br />
            <li className="pt-2">
            Developed and maintained the company website, ensuring responsive design,
            smooth performance, and user-friendly experience across all devices.
            </li>
            <li className="pt-2">
            Built and deployed <strong>Robotic Process Automation (RPA)</strong> programs,
            reducing task completion time in multiple departments by <strong>50%+</strong>.
            </li>
            <li className="pt-2">
            Collaborated with sister companies on automation projects to streamline 
            document workflows and increase efficiency.
            </li>
            <li className="pt-2">
            As <strong>RPA Technical Lead</strong>, directed automation initiatives, 
            provided technical guidance to the development team, and ensured solutions 
            aligned with company goals.
            </li>
            <li className="pt-2">
            Coordinated with multiple departments to identify automation opportunities, 
            define requirements, and oversee successful project delivery.
            </li>
            <div className="skill-include-phone md:skill-include mt-5">
              <p>Laravel</p>
              <p>NodeJS</p>
              <p>NextJS</p>
              <p>Python (Flask | FastAPI)</p>
              <p>UIBot Creator</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="sm:p-10 sm:py-5 py-10 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 items-center cyber-card bg-[#111] my-10 relative border-l-[4px] border-neon-pink">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50"></div>
          <img src={logoHK} alt="" className="rounded-full p-5 mx-auto bg-black border border-neon-pink shadow-[0_0_15px_rgba(255,0,60,0.3)] w-auto h-[150px] sm:my-0 my-2" />
          <div>
            <p className="font-bold text-2xl text-neon-pink">Healthkathon 2023</p>
            <p className="font-medium text-xl text-gray-300">Full Stack Developer</p>
            <p className="font-mono text-sm text-neon-cyan mt-1">Sep 2023 - Nov 2023</p>
            <br />
            <p>
              Participating as a team in a Hackathon event in 2023, we engaged in a competition involving an innovative artificial intelligence project related to the BPJS Kesehatan application. Addressing real-life feedback and events
              collected through surveys, our focus was on creating a novel Deep Learning Model aimed at delivering enhanced information within the Indonesian language context in the field of the medical industry.
            </p>
            <div className="skill-include-phone md:skill-include mt-5">
              <p>Laravel</p>
              <p>Python</p>
              <p>React-Native</p>
              <p>Canva</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="sm:p-10 sm:py-5 py-10 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 items-center cyber-card bg-[#111] my-10 relative border-l-[4px] border-neon-purple">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
          <img src="https://student-activity.binus.ac.id/himti/wp-content/uploads/sites/13/2017/01/LOGO-HIMTI-150x150.png" alt="" className="rounded-full p-5 mx-auto bg-black border border-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.3)] h-[150px] w-auto sm:my-0 my-2" />
          <div>
            <p className="font-bold text-2xl text-neon-purple">HIMTI 2022</p>
            <p className="font-medium text-xl text-gray-300">Manager of Creative & Design [Alam Sutera - Kemanggisan]</p>
            <p className="font-mono text-sm text-neon-cyan mt-1">Feb 2022 - Mar 2023</p>
            <br />
            <p>Manage a Creative and Design team, and worked with other division. But mostly worked with Web Development Team to achieve a successfull and interesting project.</p>
            <div className="skill-include-phone md:skill-include mt-5">
              <p>Figma</p>
              <p>Adobe Premiere Pro</p>
              <p>Adobe After Effects</p>
              <p>Adobe Illustrator</p>
              <p>Adobe Photoshop</p>
              <p>3D Blender</p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default AboutMe;

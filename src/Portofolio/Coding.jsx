import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const Coding = ({ title }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const projects = [
    {
      link: "https://dsite.netlify.com",
      title: "DSITE",
      desc: "My personal branding portfolio website built from scratch. Designed with pure CSS framework integration (Bootstrap 5) to showcase custom UI/UX capabilities without relying on templates.",
      skills: ["HTML", "CSS", "Netlify"]
    },
    {
      link: "https://github.com/RenderDek90/ProjectAMDP1",
      title: "Medicare Website",
      desc: "An IT Division training project at Bina Nusantara University. Focused on fundamental web technologies to build a responsive, static landing page.",
      skills: ["HTML", "CSS", "Javascript"]
    },
    {
      link: "https://websitecreativekidsgideon.dere1.repl.co",
      title: "Creative Kids Website",
      desc: "A custom 4-week project designed and built for a Sunday School community. Utilized Figma for prototyping and Bootstrap 5 for rapid UI development.",
      skills: ["HTML", "CSS", "Bootstrap 5", "Netlify"]
    },
    {
      link: "https://github.com/RenderDek90/BigiaryWebsite",
      title: "Bigiary",
      desc: "A blog posting platform developed to master full-stack integration. Features secure frontend-to-backend connection using PHP and custom form validation.",
      skills: ["HTML", "CSS", "PHP", "Javascript"]
    },
    {
      link: "https://github.com/RenderDek90/FaceRecognizer",
      title: "Face Recognizer",
      desc: "A Python-based facial recognition system using OpenCV and Haarcascade. Built to train datasets and perform real-time face detection.",
      skills: ["Python 3.7.6", "OpenCV", "Haarcascade"]
    },
    {
      link: "https://github.com/RenderDek90/MaiBoutique",
      title: "MaiBoutique",
      desc: "A fully functional e-commerce platform built with Laravel. Implements secure user authentication, shopping carts, and dynamic product catalogs.",
      skills: ["PHP", "Laravel", "Tailwind", "Git"]
    },
    {
      link: "https://github.com/RenderDek90/E-Grocery",
      title: "E-Grocery",
      desc: "An online grocery application featuring secure session management, cart functionality, and mandatory user authentication.",
      skills: ["PHP", "Laravel", "Tailwind"]
    },
    {
      link: "https://github.com/RenderDek90/GiantBookSupplierr",
      title: "Giant Book Supplier",
      desc: "A comprehensive digital bookstore system handling multiple textbook categories, detailed publisher information, and dynamic routing.",
      skills: ["PHP", "Laravel", "Bootstrap"]
    }
  ];

  return (
    <>
      <div className="h-[100px]" id="website"></div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl w-fit flex flex-row gap-2"
      >
        <p>💻</p>
        <div>
          <p className="font-bold tracking-widest uppercase text-gradient-primary">{title}</p>
          <div className="ml-5 bg-gradient-to-r from-accent-primary to-transparent h-[2px] w-100 my-2 opacity-50"></div>
        </div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-12"
      >
        {projects.map((proj, idx) => (
          <motion.div variants={cardVariants} key={idx} className="h-full group">
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col h-full p-8 bg-white/60 dark:bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-accent-primary/50 dark:hover:border-accent-primary/50 hover:bg-white/80 dark:hover:bg-[rgba(15,23,42,0.8)] rounded-2xl transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-primary rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <FontAwesomeIcon icon={faCode} className="text-xl text-accent-primary" />
                </div>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-slate-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <div className="flex-grow relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-accent-primary transition-colors duration-300">{proj.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">{proj.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8 relative z-10">
                {proj.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[11px] font-mono px-3 py-1.5 bg-slate-200/50 dark:bg-black/50 border border-slate-300 dark:border-white/5 text-slate-600 dark:text-slate-300 rounded-full group-hover:border-accent-primary/30 group-hover:text-accent-primary transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Coding;

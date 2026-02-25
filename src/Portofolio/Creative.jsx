import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import image1 from './portfolio-images/poster1.png';
import image2 from './portfolio-images/feeds1.png';
import image3 from './portfolio-images/English6 1.png';
import uiImage from './portfolio-images/Preload 1.png';

const Creative = ({ title }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const creativeWorks = [
    {
      img: image1,
      type: "Poster",
      title: "Sports Day Poster",
      client: "HIMTI Binus University",
      link: "https://ofog.himti.or.id/",
      desc: "Designed an energizing poster for HIMTI activists, aimed at encouraging participation in an exhilarating sports event while promoting a healthy work-life balance."
    },
    {
      img: image2,
      type: "Instagram Feed",
      title: "Independence Day Feed",
      client: "Sunday School Creative Kids Gideon",
      link: "https://www.instagram.com/creativekidsgpdigideon/",
      desc: "Developed a cohesive 3x3 Instagram grid design layout uniting the Sunday School community to commemorate Independence Day."
    },
    {
      img: image3,
      type: "Article Visuals",
      title: "SDC Management Article",
      client: "Student Development Center, BINUS",
      link: "https://student.binus.ac.id/student-development-center/",
      desc: "Crafted engaging visual assets for an article tailored to Binus freshmen, focusing on strategies for enhancing personal and professional management skills."
    },
    {
      img: uiImage,
      type: "UI/UX Design",
      title: "Medstore Kiosk Application",
      client: "BINUS University Project",
      link: "https://student.binus.ac.id/student-development-center/",
      desc: "Designed an intuitive, user-friendly kiosk interface (UI) to streamline the process of purchasing medicine, ensuring a frictionless user experience."
    }
  ];

  return (
    <>
      <div className="h-[100px]" id="creative"></div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl w-fit flex flex-row gap-2"
      >
        <p>🎨</p>
        <div>
          <p className="font-bold tracking-widest uppercase text-gradient-primary">{title}</p>
          <div className="ml-5 bg-gradient-to-r from-accent-primary to-transparent h-[2px] w-100 my-2 opacity-50"></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 mb-8 mt-4 glass-panel border-l-4 border-l-accent-secondary"
      >
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">Welcome to a showcase of my best creative works. From striking posters and modern UI designs to engaging social media feeds, each piece represents a fusion of technical proficiency and artistic vision.</p>
        <p className="mt-4">
          <a href="https://www.figma.com/proto/uxJsatAP8GmU82l1KEWRPE/Darren's-Portofolio?node-id=2-68&starting-point-node-id=2%3A68&mode=design&t=JynJisriQkbIQyZq-1" target="_blank" rel="noreferrer" className="text-accent-secondary hover:text-accent-primary font-mono text-sm tracking-wide duration-300 transition-colors flex items-center gap-2 group">
            <span className="w-0 group-hover:w-4 h-[1px] bg-accent-secondary transition-all duration-300"></span>
            See my full design portfolio <span className="text-accent-primary">→</span>
          </a>
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6"
      >
        {creativeWorks.map((work, idx) => (
          <motion.div variants={cardVariants} key={idx} className="group relative rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 h-[400px]">
            {/* Background Image Wrapper */}
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" src={work.img} alt={work.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent-secondary/20 flex items-center justify-center border border-accent-secondary/50 backdrop-blur-sm">
                    <FontAwesomeIcon icon={faPaintBrush} className="text-accent-secondary text-sm" />
                  </div>
                  <span className="uppercase tracking-widest text-xs text-accent-secondary font-mono bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/5">{work.type}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>

                <a href={work.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-4 transition-colors font-mono">
                  {work.client} <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
                </a>

                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed font-light mt-4 border-t border-white/10 pt-4">
                  {work.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Creative;

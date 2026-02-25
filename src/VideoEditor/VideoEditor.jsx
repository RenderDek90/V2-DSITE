import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faVideo } from '@fortawesome/free-solid-svg-icons';
import openingCeremony from '../Portofolio/portfolio-images/image 15.png';
import videoKenangan from '../Portofolio/portfolio-images/image 18.png';

const VideoEditor = ({ title }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const videos = [
    {
      link: "https://youtu.be/sIqjmqC7ejg",
      img: openingCeremony,
      title: "Opening Ceremony for Freshmen Partner",
      desc: "As a pivotal member of the opening ceremony committee for incoming freshmen, I spearheaded the direction and editing of an engaging opening sequence. Coordinated across multiple divisions to deploy a visually captivating video that successfully set the event's energetic tone.",
      skills: ["Adobe Premiere Pro", "3D Blender"]
    },
    {
      link: "https://youtu.be/9WRuzLsY3i4",
      img: videoKenangan,
      title: "Memorable Video HIMTI 2021",
      desc: "Directed and edited a touching tribute video for the HIMTI Farewell committee. Focused on narrative storytelling through video editing to capture the emotional journey of the community, delivering a highly impactful goodbye message.",
      skills: ["Adobe Premiere Pro", "3D Blender"]
    }
  ];

  return (
    <>
      <div className="h-[100px]" id="video-editor"></div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl w-fit flex flex-row gap-2"
      >
        <p>📽️</p>
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
        className="grid grid-cols-1 gap-8 py-12"
      >
        {videos.map((vid, idx) => (
          <motion.div variants={cardVariants} key={idx} className="group">
            <a
              href={vid.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col md:flex-row bg-white/60 dark:bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-accent-tertiary/50 dark:hover:border-accent-tertiary/50 hover:bg-white/80 dark:hover:bg-[rgba(15,23,42,0.8)] rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] relative"
            >
              {/* Background Glow */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-tertiary rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>

              <div className="md:w-5/12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a]/20 transition-colors duration-500 z-10 pointer-events-none"></div>
                <img src={vid.img} alt={vid.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out min-h-[250px]" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-accent-tertiary group-hover:border-transparent group-hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(167,139,250,0.6)] transition-all duration-500">
                    <FontAwesomeIcon icon={faPlay} className="text-white text-xl ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-8 md:w-7/12 flex flex-col relative z-20 justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-tertiary/10 flex items-center justify-center border border-accent-tertiary/20">
                    <FontAwesomeIcon icon={faVideo} className="text-accent-tertiary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-accent-tertiary transition-colors duration-300">{vid.title}</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300 mb-8">
                  {vid.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {vid.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[11px] font-mono px-3 py-1.5 bg-slate-200/50 dark:bg-black/50 border border-slate-300 dark:border-white/5 text-slate-600 dark:text-slate-300 rounded-full group-hover:border-accent-tertiary/30 group-hover:text-accent-tertiary transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default VideoEditor;

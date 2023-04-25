import { motion } from 'framer-motion';
import { Rock_Salt } from 'next/font/google';

import { containerVariants, animateNameVariants , positionNameVariants} from '../utils/motion';

const rockSalt = Rock_Salt({ subsets: ['latin'], weight: '400'});

const Navbar = () => {
  const firstName = "ANTONIO";
  const lastName = "PASTORIZA";

  return (
    <motion.div 
      variants={positionNameVariants}
      initial="before"
      animate="after"
      className={`${rockSalt.className} flex h-screen max-w-screen`}
      aria-label="logo"
    >
        <motion.div 
            variants={containerVariants} 
            className='p-2 md:p-4'
        >
          <div className='text-center'>
            <div>
              {firstName.split('').map((letter, index) => (
              <motion.span key={index} variants={animateNameVariants}>{letter}</motion.span>
              ))}
            </div>
            <div>
              {lastName.split('').map((letter, index) => (
              <motion.span key={index} variants={animateNameVariants}>{letter}</motion.span>
              ))}
            </div>
          </div>        
        </motion.div>
    </motion.div>
    
  );
};

export default Navbar;

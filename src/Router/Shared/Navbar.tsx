import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
];

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(navLinks[0]);
  const [click, setClick] = useState(navLinks[0]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const modalVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "tween", // Set transition type to 'tween'
        duration: 0.3, // Specify duration
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 0.1,
        ease: "easeOut", // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <nav className="px-4 py-4 text-black ">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="text-xl font-bold text-black">Logo</div>
        <ul className="flex items-center gap-6 text-black cursor-pointer">
          {navLinks.map((navLink, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setHovered(navLink)}
              onHoverEnd={() => setHovered(click)}
              onClick={() => setClick(navLink)}
              className="relative hidden px-5 py-2 text-gray-400 capitalize duration-300 md:block group font-extralight hover:text-gray-200">
              {navLink.title}
              {hovered === navLink && (
                <motion.span
                  layoutId="background"
                  className="absolute inset-0 rounded-md bg-zinc-800 bg-opacity-10"></motion.span>
              )}
            </motion.div>
          ))}
          <div className="md:hidden">
            <FaBars onClick={toggleModal} />
          </div>
        </ul>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <FaTimes
              className="absolute text-white cursor-pointer top-6 right-4"
              onClick={toggleModal}
              style={{ fontSize: "16px" }}
            />
            <motion.div
              className="relative w-full bg-gray-900"
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
              <div className="flex flex-col items-center justify-center h-full gap-8 ">
                {navLinks.map((link, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl font-light text-white cursor-pointer"
                    variants={linkItemVariants}>
                    {link.title}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

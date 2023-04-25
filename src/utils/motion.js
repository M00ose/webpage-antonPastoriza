const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.05 } }
  };
  
const animateNameVariants = {
    before: { opacity: 0, y: 20},
    after: { opacity: 1, y: 0 }
};

const positionNameVariants = {
    before: { 
      justifyContent: "center",
      alignItems: "center",
      fontSize: "8rem",
      "@media (max-width: 640px)": {
        fontSize: "5rem"},
    },
    after: {
      justifyContent: "start",
      alignItems: "start",
      fontSize: "0.875rem",
      transition: {
        delay: 3,
        duration: 1,
      },
    },
}

export {
  animateNameVariants,
  containerVariants,
  positionNameVariants
}
const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      // transform: `translateY(3rem)`,
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      // transform: `translateY(0)`,
      opacity: 1,
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      // transform: `translateY(3rem)`,
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle

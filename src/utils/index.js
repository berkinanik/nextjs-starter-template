export const scrollToTop = (top = 0, left = 0) => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.scroll({ top, left, behavior: 'smooth' });
    }, 100);
  }
};

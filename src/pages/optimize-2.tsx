import { useEffect, useState } from 'react';
import { CenteredLayout } from '~/components';

// TODO how can we optimize, prevent re-rendering ExpensiveComponent
// by changing component structure ?

const debounce_leading = (func: Function, timeout = 300) => {
  let timer: any;
  return (...args: any) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

const ExpensiveComponent = () =>  {
  const now = performance.now();
  debounce_leading(() => {while (performance.now() - now < 100) {}}, 200)
  return <div>Ohh.. so expensive</div>;
  /*
  if this loop is a mock for very expensive calculations,
   we can use debounce to interrupt calculations.
    So calculations only will be executed if all page is re-rendered at moment.
   */
};

export const Optimize2 = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-[1000vh] bg-gradient-to-tr from-gray-100 to-gray-200 bg-repeat bg-[length:100%_8px]">
      <CenteredLayout className="gap-4 fixed top-0 left-1/2 -translate-x-1/2">
        <div className="text-3xl">See the code</div>
        <div>{scrollTop} px</div>
        <ExpensiveComponent />
      </CenteredLayout>
    </div>
  );
};

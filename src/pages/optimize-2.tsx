import React, { useEffect, useMemo, useState } from 'react';
import { CenteredLayout } from '~/components';

// TODO how can we optimize, prevent re-rendering ExpensiveComponent
// by changing component structure ?

const ExpensiveComponent = () => {
  const now = performance.now();
  while (performance.now() - now < 100) {}
  return <div>Ohh.. so expensive</div>;
};

const ScrollableArea = ({children}: {children: React.ReactNode}) => {
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
    <CenteredLayout className="gap-4 fixed top-0 left-1/2 -translate-x-1/2">
      <div className="text-3xl">See the code</div>
      <div>{scrollTop} px</div>
      {children}
    </CenteredLayout>
  );
}

export const Optimize2 = () => {
  const MemoizedExpensiveComponent = useMemo(() => ExpensiveComponent, [])
  return (
    <div className="h-[1000vh] bg-gradient-to-tr from-gray-100 to-gray-200 bg-repeat bg-[length:100%_8px]">
      <ScrollableArea>
        <MemoizedExpensiveComponent />
      </ScrollableArea>
    </div>
  );
  /*
  We can calculate Expensive Component at higher level and pass it as children to the scrollable area.
  So, this component will not re-render after scrolling
   */
};

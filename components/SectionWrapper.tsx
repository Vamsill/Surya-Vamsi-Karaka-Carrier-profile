
import React, { forwardRef, ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(({ id, title, children }, ref) => {
  return (
    <section id={id} ref={ref} className="py-20 md:py-28 section-fade-up">
      <h2 className="text-3xl font-bold font-heading text-text-primary mb-12 text-center">
        {title}
      </h2>
      {children}
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;

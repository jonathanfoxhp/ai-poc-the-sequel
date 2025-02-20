import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AnimatedLines = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    console.log('AnimatedLines mounted, container:', containerRef.current);

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Observer callback fired', entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Element is intersecting');
            const elements = [];
            
            const walker = document.createTreeWalker(
              entry.target,
              NodeFilter.SHOW_ELEMENT,
              {
                acceptNode: (node) => {
                  if (
                    (node.classList.contains('text-base') && node.tagName === 'DIV') ||
                    node.tagName === 'LI'
                  ) {
                    return NodeFilter.FILTER_ACCEPT;
                  }
                  return NodeFilter.FILTER_SKIP;
                }
              }
            );

            let currentNode = walker.currentNode;
            while (currentNode) {
              elements.push(currentNode);
              currentNode = walker.nextNode();
            }

            console.log('Found elements:', elements);

            // Set initial styles
            elements.forEach(element => {
              element.style.opacity = '0';
              element.style.transform = 'translateX(-20px)';
              element.style.transition = 'all 0.5s ease-out';
            });

            // Animate elements with delay
            elements.forEach((element, index) => {
              console.log(`Animating element ${index}:`, element);
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
              }, index * 200); // 200ms delay between each element
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      {children}
    </div>
  );
};

AnimatedLines.propTypes = {
  children: PropTypes.node.isRequired
};

export default AnimatedLines; 
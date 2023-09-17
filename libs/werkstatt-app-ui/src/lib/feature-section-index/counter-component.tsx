import { Text } from '@mantine/core';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function CounterComponent({
  value,
  direction = 'up',
}: {
  value: number;
  direction?: 'up' | 'down';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return (
    <Text
      size={40}
      mt="sm"
      weight={500}
      style={{ lineHeight: 1 }}
      ref={ref}
    ></Text>
  );
}

import {useEffect, useCallback, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';

/*
 * useInterval
 * @param callback function to be called
 * @param delay in milliseconds
 * @returns void
 * @description
 * useInterval is a custom hook that allows you to use setInterval in a React component.
 * It is a combination of the useInterval hook from Dan Abramov's blog post
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * and the useFocusEffect hook from React Navigation
 * https://reactnavigation.org/docs/use-focus-effect/
 * useFocusEffect is used to ensure that the interval is cleared when the component is not focused.
 * This is important because if the component is not focused, the interval will continue to run
 * and the callback will continue to be called. This can cause memory leaks and other issues.
 */
const useInterval = (callback: CallableFunction, delay: number): void => {
  const savedCallback = useRef<CallableFunction | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useFocusEffect(
    useCallback(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }

      if (delay === null) {
        return () => {
          /* do nothing */
        };
      }

      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]),
  );
};

export default useInterval;

import { useEffect, MutableRefObject } from 'react';

type RefType =
  | MutableRefObject<HTMLElement | null>
  | MutableRefObject<HTMLElement | null>[];

export const useOutsideClick = (
  relativeRef: RefType,
  handler: (event: Event) => void
) => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        if (Array.isArray(relativeRef)) {
          for (let index = 0; index < relativeRef.length; index += 1) {
            const ref = relativeRef[index] as MutableRefObject<HTMLElement>;
            if (!ref.current || ref.current.contains(event.target as Node)) {
              return;
            }
          }
        } else if (
          !relativeRef.current ||
          relativeRef.current.contains(event.target as Node)
        ) {
          return;
        }

        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    [relativeRef, handler]
  );
};

export default useOutsideClick;

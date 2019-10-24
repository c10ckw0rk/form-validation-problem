import * as React from 'react';

const counts = {};
/**
 * Generates and returns a unique id by appending an incrementing counter to the given prefix string.
 *
 * Can be used to apply unique ids to input elements to support `htmlFor` labelling, or for applying ids to svg elements like gradients.
 *
 * The counter is only incremented once per component instance, so the generated id will remain the same for the life of the component.
 *
 * @param {string} prefix
 * @returns {string} unique id consisting of the the prefix with a counter appended
 */
export default function useUniqueId(prefix: string) {
  const ref = React.useRef('');
  if (!ref.current) {
    if (!counts[prefix]) counts[prefix] = 0;
    ref.current = `${prefix}-${counts[prefix]++}`;
  }
  return ref.current;
}

import { useReducer } from 'react'

export function useObjectState<T>(init: T) {
  return useReducer((s: T, patch: T) => {
    const changed = Object.entries(patch)
      .some(([k, v]) => (s as any)[k] !== v);
    return changed ? { ...s, ...patch } : s;
  }, init);
}
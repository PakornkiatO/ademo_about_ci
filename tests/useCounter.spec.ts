import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize count to 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should initialize val to 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val (default 1)', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should increment count by custom val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should allow setting val to negative and incrementing', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(-2);
      result.current.increment();
    });
    expect(result.current.count).toBe(-2);
  });

  it('should allow setting val to zero and incrementing', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(0);
      result.current.increment();
    });
    expect(result.current.count).toBe(0);
  });

  it('should keep val state between increments', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(2);
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(4);
  });
});
'use client';

import useScrollToTop from "../hooks/useScrollToTop";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  useScrollToTop();
  return <>{children}</>;
}

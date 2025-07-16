//This ensures that every page opens to the top and not relative to a previous page's scroll

'use client';

import useScrollToTop from "../hooks/useScrollToTop";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  useScrollToTop();
  return <>{children}</>;
}

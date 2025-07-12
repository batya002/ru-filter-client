import { Suspense, lazy } from "react";

interface Props {
  isMobile: boolean;
}

export default function Header({ isMobile }: Props) {
  const Component = isMobile
    ? lazy(() => import("../mobile/MobileHeader"))
    : lazy(() => import("../desktop/DesktopHeader"));

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

import { Suspense, lazy } from "react";

interface Props {
  isMobile: boolean;
}

export default function Main({ isMobile }: Props) {
  const Component = isMobile
    ? lazy(() => import("../mobile/main/MobileLanding"))
    : lazy(() => import("../desktop/main/DesktopLanding"));

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

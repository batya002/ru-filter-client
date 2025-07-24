import { useDeviceStore } from "@/store/useDeviceStore";
import { useDetectDevice } from "@/hooks/useDetectDevice";
import { Header, Footer } from "@/components/layout";
import { Main } from "@/pages/landing/main";
import { Route, Routes } from "react-router-dom";

export default function App() {
  useDetectDevice();

  const isMobile = useDeviceStore((state) => state.isMobile);

  if (isMobile === null) {
    return <p>Загрузка...</p>;
  }

  return (
    <>
      <Header isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Main isMobile={isMobile} />}  />
      </Routes>
      <Footer isMobile={isMobile} />
    </>
  );
}

import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        OncoVision.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Una herramienta impulsada por inteligencia artificial para la detección de cáncer de pulmón utilizando{" "}
        <a
          href="https://www.cancerimagingarchive.net/collection/lidc-idri/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          LIDC-IDRI
        </a>{" "}
        y{" "}
        <a
          href="https://docs.ultralytics.com/models/yolo12/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          YOLOv12
        </a>.
      </h4>
    </section>
  );
}

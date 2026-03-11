/**
 * PHOTO GALLERY
 * =============
 * To add or change photos:
 * 1. Add .jpg or .webp files to /public/photos/
 * 2. Update the `photos` array below with the filename, alt text, and label.
 * 3. The current 3 church photos (church-1.jpg, church-2.jpg, church-3.jpg) are already loaded.
 */

import Image from "next/image";

const photos = [
  {
    src: "/photos/church-1.jpg",
    alt: "Sand Springs Methodist Church",
    label: "Our Church",
    span: "md:col-span-2",
  },
  {
    src: "/photos/church-2.jpg",
    alt: "Church life at Sand Springs Methodist",
    label: "Church Life",
    span: "",
  },
  {
    src: "/photos/church-3.jpg",
    alt: "Sand Springs Methodist community",
    label: "Community",
    span: "",
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Community
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
            Life at Sand Springs Methodist
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            We are more than a Sunday service — we are a family.
          </p>
        </div>

        {/* Photo grid — first photo spans 2 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              {/* Label overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-serif font-semibold text-lg">
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-slate-400 text-sm">
          Add more photos to{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono text-xs">
            /public/photos/
          </code>{" "}
          and update the array in{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono text-xs">
            app/components/PhotoGallery.tsx
          </code>
        </p>
      </div>
    </section>
  );
}

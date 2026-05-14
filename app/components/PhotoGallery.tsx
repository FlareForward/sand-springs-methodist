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

        <div className="text-center mt-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-blue-900">
            Youth Group
          </h3>
          <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our youth director is dedicated to a youth ministry of fun, worship, fellowship, and practical life applications. Every Wednesday at 4 pm the youth rooms are open for the kids to hang out, play games, watch movies, or learn; Dinner starts at 6:30, and then there is worship and a Bible lesson. There is free time after the lesson for the kids to just play games and have fun. We have active church camps and other activities. There are also mission opportunities as well. Hope to see you there! Parents are welcome to hang out or volunteer.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
export default function StickyScroll() {
  return (
    <section className="text-white   w-full bg-slate-950  ">
      <div className="grid grid-cols-2">
        <div className="sticky top-0 h-screen gap-5 flex flex-col items-center justify-center">
          <p className="border border-slate-400 text-slate-50 px-4 py-[.5rem] rounded-full">
            Our Process
          </p>
          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            This is what you get when working with ClickWise
          </h1>
          <button className="bg-blue-500 px-3 py-[.6rem] rounded-md">
            Apply To work with Us
          </button>
        </div>
        <div className="grid gap-2 overflow-hidden">
          <figure className="grid place-content-center -skew-x-12">
            <img
              src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
              alt=""
              className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
            />
          </figure>
          <figure className="grid place-content-center skew-x-12">
            <img
              src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
              alt=""
              className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
            />
          </figure>
          <figure className="grid place-content-center -skew-x-12">
            <img
              src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
              alt=""
              className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
            />
          </figure>
          <figure className="grid place-content-center skew-x-12">
            <img
              src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
              alt=""
              className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

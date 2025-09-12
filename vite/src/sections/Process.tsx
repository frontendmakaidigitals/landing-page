import { ArrowRight } from "lucide-react";
const Process = () => {
  return (
    <section className="my-20">
      <div className="container">
        <h1 className="text-5xl font-[600] text-slate-50 text-center">
          After you Book a call...
        </h1>

        <ul className="grid mt-14 p-5 lg:p-0 text-slate-50 mx-auto grid-cols-1 lg:grid-cols-3 gap-10 max-w-4xl">
          <li className="gradient-shadow">
            <div className=" w-full rounded-lg bg-black p-4 border border-slate-50/20">
              <div className="h-[230px] rounded-lg overflow-hidden w-full">
                <img
                  src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-xl mt-4">
                We will audit your current strategy & ad accounts for free
              </p>
            </div>
          </li>
          <div className="w-full rotate-[90deg] lg:rotate-0 h-full flex justify-center items-center">
            <ArrowRight className="size-32 text-slate-200" />
          </div>
          <li className="gradient-shadow">
            <div className="bg-black w-full h-full rounded-lg p-4 border border-slate-50/20">
              <div className="h-[230px] rounded-lg overflow-hidden w-full">
                <img
                  src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-xl mt-4">We offer a risk free investment.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Process;

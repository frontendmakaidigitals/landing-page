const Process = () => {
  return (
    <section className="my-20">
      <div className="container ">
        <h1 className="text-5xl font-[600] text-slate-50 text-center">
          After you Book a call...
        </h1>
        <ul className="grid mt-8 text-slate-50 mx-auto grid-cols-1 lg:grid-cols-2 gap-10 max-w-2xl">
          <li className="w-full rounded-lg p-4 border border-slate-50/20">
            <div className="h-[230px] rounded-lg overflow-hidden w-full bg-red-500">
              <img
                src={
                  "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg"
                }
                className="w-full h-full object-cover"
                alt={""}
              />
            </div>
            <p className="text-2xl mt-4">
              We will audit your current strategy & ad accounts for free
            </p>
          </li>
          <li className="w-full rounded-lg p-4 border border-slate-50/20">
            <div className="h-[230px] rounded-lg overflow-hidden w-full bg-red-500">
              <img
                src={
                  "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg"
                }
                className="w-full h-full object-cover"
                alt={""}
              />
            </div>
            <p className="text-2xl mt-4">We offer a risk free investment. </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Process;

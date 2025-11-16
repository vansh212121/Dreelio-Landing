import Image from "next/image";
import { CheckSquare, Clock, FileText, BarChart2 } from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";

const FeatureBadge = ({ icon: Icon, text }) => (
  <div className="flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white p-4 shadow-sm">
    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
    <span className="text-md text-primary font-semibold">{text}</span>
  </div>
);

const ProjectManagement = () => {
  return (
    <section id="features" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative rounded-3xl bg-cover bg-center w-[520px] h-[700px] p-6 md:p-10 mx-auto"
            style={{ backgroundImage: "url('/assets/Picture2.png')" }}
          >
            <div className="relative w-full h-full p-6 md:p-8">
              <Image
                src="/assets/Picture.png"
                alt="Freelio UI mockup"
                fill
                className="object-cover rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_40px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 lg:p-7 lg:gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-[13px] font-semibold uppercase font-open-runde tracking-widest text-amber-950">
                project management
              </p>
              <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.01em] text-primary md:text-5xl lg:text-6xl">
                Keep every project moving forward
              </h2>
              <p className="text-xl leading-relaxed text-secondary">
                <strong className="font-semibold text-secondary">
                  Plan, assign, and deliver your work
                </strong>{" "}
                - all in one place. With smart task tracking, deadlines, and
                real-time progress, you stay organized and clients stay
                confident.
              </p>
            </div>
            <AnimatedButton className="rounded-full text-md font-semibold h-14 px-6 bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
              Try Dreelio free
            </AnimatedButton>
            <div className="grid w-full grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <FeatureBadge icon={CheckSquare} text="Tasks" />
              <FeatureBadge icon={Clock} text="Time tracking" />
              <FeatureBadge icon={FileText} text="Timesheets" />
              <FeatureBadge icon={BarChart2} text="Reports" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;

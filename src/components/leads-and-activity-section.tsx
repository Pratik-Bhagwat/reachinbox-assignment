import LeadDetail from "./lead-detail";
import emaildark from "@/assets/email-dark.png";
import send from "@/assets/send.png";

const LeadsAndActivitySection = () => {
  return (
    <section className="h-full md:w-1/4 lg:w-1/5">
      <div className="h-full space-y-5 border-r p-4 dark:border-[#353533] dark:bg-[#000000]">
        {/* lead details */}
        <div className="w-full">
          <div className="w-full rounded-md bg-[#ECEFF3] px-2 py-2 dark:bg-[#353533]">
            <h4 className="font-inter font-semibold text-[#454F5B] dark:text-[#FFFFFF] md:text-xs lg:text-sm">
              Lead Details
            </h4>
          </div>
          <div className="flex w-full flex-col space-y-3 px-1 py-3">
            <LeadDetail label="Name" content="Orlando" />
            <LeadDetail label="Contact No" content="+54-9062827869" />
            <LeadDetail label="Email ID" content="orlando@gmail.com" />
            <LeadDetail label="Linkedin" content="linkedin.com/in/timvadde/" />
            <LeadDetail label="Company Name" content="Reachinbox" />
          </div>
        </div>
        {/* activities */}
        <div className="w-full">
          <div className="rounded-md bg-[#ECEFF3] px-2 py-2 dark:bg-[#353533]">
            <h4 className="font-inter font-semibold text-[#454F5B] dark:text-[#FFFFFF] md:text-xs lg:text-sm">
              Activites
            </h4>
          </div>
          <div className="mt-4 flex flex-col space-y-5 p-2">
            <h5 className="font-openSans font-semibold text-[#172B4D] dark:text-[#FFFFFF] md:text-xs lg:text-[15px]">
              Campaign Name
            </h5>
            <div className="flex flex-col justify-center space-y-4">
              <p className="font-openSans font-semibold dark:text-[#FFFFFF] md:text-[10px] lg:text-xs">
                3 Steps <span className="dark:text-[#403F3F]"> | </span> 5 Days
                in Sequence
              </p>
              <div className="flex items-center space-x-6">
                {/* steps icons */}
                <div className="relative flex items-center self-start">
                  <div className="flex flex-col justify-center space-y-8 self-start ">
                    <div className="z-10 flex size-7 items-center justify-center rounded-full border border-[#DFE3E8] bg-[#EEF1F4] dark:border-[#41464B] dark:bg-[#23272C]">
                      <img src={emaildark} className="size-5" alt="email png" />
                    </div>
                    <div className="z-10 flex size-7  items-center justify-center rounded-full border border-[#DFE3E8] bg-[#EEF1F4] dark:border-[#41464B] dark:bg-[#23272C]">
                      <img src={emaildark} className="size-5" alt="email png" />
                    </div>
                    <div className="z-10 flex size-7 items-center justify-center rounded-full border border-[#DFE3E8] bg-[#EEF1F4] dark:border-[#41464B] dark:bg-[#23272C]">
                      <img src={emaildark} className="size-5" alt="email png" />
                    </div>
                    <div className="absolute bottom-1 left-3 h-[80%] self-start border dark:border-[#403F3F]" />
                  </div>
                </div>
                {/* email steps */}
                <div className="flex flex-col justify-center space-y-3">
                  <div className="flex flex-col justify-center space-y-2">
                    <h5 className="font-openSans font-semibold text-[#172B4D] dark:text-[#FFFFFF] md:text-xs lg:text-[13px]">
                      Step 1: Email
                    </h5>
                    <div className="flex items-center space-x-2">
                      <img src={send} alt="send png" className="size-3" />
                      <p className="font-semibold dark:text-[#B9B9B9] md:text-[7px] lg:text-[10px]">
                        <span className="font-inter font-normal">Sent</span>{" "}
                        3rd, Feb
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-2">
                    <h5 className="font-openSans font-semibold text-[#172B4D] dark:text-[#FFFFFF] md:text-xs lg:text-[13px]">
                      Step 2: Email
                    </h5>
                    <div className="flex items-center space-x-2">
                      <img src={send} alt="send png" className="size-3" />
                      <p className="font-semibold dark:text-[#B9B9B9] md:text-[7px] lg:text-[10px]">
                        <span className="font-inter font-normal">Sent</span>{" "}
                        3rd, Feb
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-2">
                    <h5 className="font-openSans font-semibold text-[#172B4D] dark:text-[#FFFFFF] md:text-xs lg:text-[13px]">
                      Step 3: Email
                    </h5>
                    <div className="flex items-center space-x-2">
                      <img src={send} alt="send png" className="size-3" />
                      <p className="font-semibold dark:text-[#B9B9B9] md:text-[7px] lg:text-[10px]">
                        <span className="font-inter font-normal">Sent</span>{" "}
                        3rd, Feb
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsAndActivitySection;

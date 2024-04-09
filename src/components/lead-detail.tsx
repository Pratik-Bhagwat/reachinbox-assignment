interface LeadDetailProps {
  label: string;
  content: string;
}

const LeadDetail = ({ label, content }: LeadDetailProps) => {
  return (
    <div className="flex w-full items-center justify-between space-x-3">
      <div>
        <span className="w-14 font-inter text-[#637381] dark:text-[#FFFFFF] md:text-[10px] lg:text-xs">
          {label}
        </span>
      </div>
      <div>
        <span className="w-14 font-inter text-[#000000] dark:text-[#B9B9B9] md:text-[12px] lg:text-sm">
          {content}
        </span>
      </div>
    </div>
  );
};

export default LeadDetail;

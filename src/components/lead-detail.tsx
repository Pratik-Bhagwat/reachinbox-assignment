interface LeadDetailProps {
  label: string;
  content: string;
}

const LeadDetail = ({ label, content }: LeadDetailProps) => {
  return (
    <div className="grid grid-cols-2 overflow-hidden">
      <span className="grid-cols-1 dark:text-[#FFFFFF] md:text-[10px] lg:text-xs">
        {label}
      </span>
      <span className="grid-cols-1 dark:text-[#B9B9B9] md:text-[10px] lg:text-xs">
        {content}
      </span>
    </div>
  );
};

export default LeadDetail;

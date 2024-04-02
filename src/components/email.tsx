const Email = () => {
  return (
    <>
      {/* email div or thread div */}
      <div className="mt-2 min-h-60 w-full rounded-sm border p-3 dark:border-[#343A40] dark:bg-[#141517]">
        <div className="flex h-full w-full flex-col justify-center space-y-4">
          {/* email header */}
          <div className="flex h-2/5 flex-col justify-center space-y-2 px-2 py-1">
            <div className="flex items-center justify-between">
              {/* subject */}
              <h4 className="font-semibold dark:text-[#F8FAFC] md:text-xs lg:text-sm">
                New Product Launch
              </h4>
              {/* date and time */}
              <p className="dark:text-[#7F7F7F] md:text-xs lg:text-sm">
                20 june 2022 : 9:16AM
              </p>
            </div>
            {/* from email*/}
            <p className="dark:text-[#AEAEAE] md:text-xs lg:text-sm">
              from : jeanne@icloud.com cc : lennon.j@mail.com
            </p>
            {/* to email*/}
            <p className="dark:text-[#AEAEAE] md:text-xs lg:text-sm">
              to : lennon.j@mail.com
            </p>
          </div>
          {/* email message */}
          <div className="h-3/5 px-2 py-1">
            <p className="dark:text-[#E1E0E0] md:text-xs lg:text-sm">
              Hi {"FIRST_NAME"}, I would like to introduce you to SaaSgrow, a
              productized design service specifically tailored for saas
              startups. Our aim is to help you enhance the user experience and
              boost the visual appeal of your software products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;

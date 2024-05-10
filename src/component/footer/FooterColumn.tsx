const FooterColumn = ({ heading, links, active, toggleAccordion }: any) => {
  return (
    <div className="text-white space-y-4 ml-4 md:ml-0">
      <h2 className="font-semibold md:font-extrabold md:text-xl cursor-pointer" onClick={() => toggleAccordion(heading)}>
        {heading}
      </h2>
      <div className={`${active ? 'block' : 'hidden'} md:block space-y-2`} aria-hidden={active ? "false" : "true"}>
        {links.map((link: string, index: number) => (
          <p key={index} className="text-sm text-gray-400">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;

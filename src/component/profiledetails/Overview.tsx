
const Overview = ({ project }: { project: any}) => {
  return (
    <>
      <p className='mt-8 text-sm md:text-base lg:text-lg leading-relaxed'>
        {project.overview}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
        <img src={project.screenshots[0]} className='rounded-md w-full md:w-auto' />
        <img src={project.screenshots[0]} className='rounded-md w-full md:w-auto' />
        <img src={project.screenshots[0]} className='rounded-md w-full md:w-auto' />
      </div>
    </>
  );
};

export default Overview;

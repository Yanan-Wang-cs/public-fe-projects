export default function Banner () {
  return (
    <div className='flex flex-col items-center justify-around min-h-[500px] sm:flex-row'>
      {/* <img className='w-[200px]' src={Profile} alt="profile" /> */}
      <div dangerouslySetInnerHTML={{__html:cv_index.banner.profile}} />
      <div className='w-[50%] flex flex-col items-center'>
        <h1 className='mb-7 text-3xl'>{cv_index.banner.title}</h1>
        <p>{cv_index.banner.position}</p>
        <p>{cv_index.banner.institute}</p>
        <div dangerouslySetInnerHTML={{__html:cv_index.banner.email}} />
        <p className="w-[80%] flex flex-row flex-nowrap justify-between" dangerouslySetInnerHTML={{__html:cv_index.banner.links}} />
      </div>
    </div>
  )
}
import React from 'react';


const Banner = ({ onChange }) => {


  return (
    // <div className='h-[70vh] bg-slate-200' style={{ backgroundImage: "url('../../../../public/Resources/Rectangle-4281.png')", backgroundSize: 'cover', overflow: 'hidden' }} >
    <div className='h-[70vh] relative'>
      <div className="absolute inset-0" style={{ position: 'relative' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/Resources/Rectangle-4281.png')",
          opacity: 0.2,
        }}></div>
        <div className='text-center py-80'>
          <h1 className='text-black text-6xl relative z-10'>I Grow By Helping People In Need</h1>
          <div className='flex justify-center gap-4 pt-5 relative z-10'>
            <div>
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div>
              <button className="btn btn-secondary relative z-10">Secondary</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
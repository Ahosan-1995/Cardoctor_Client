import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className=' '>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={img1}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
           <div className='ml-10'>
            <h2 className='text-6xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h2>
            <p className='mb-7'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full  rounded-xl"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
           <div className='ml-10'>
            <h2 className='text-6xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h2>
            <p className='mb-7'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full  rounded-xl"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
           <div className='ml-10'>
            <h2 className='text-6xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h2>
            <p className='mb-7'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full  rounded-xl"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slid3" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
           <div className='ml-10'>
            <h2 className='text-6xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h2>
            <p className='mb-7'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

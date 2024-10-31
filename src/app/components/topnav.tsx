import Link from 'next/link';
import Button from './Button';
import homeImg from './../assets/Group 112.png';
import ss1 from './../assets/ss1.png';


const TopNav = () => {
  return (
    <>
    <nav className="flex items-center justify-between px-8 py-4 bg-white " style={{ fontFamily: 'Mada, sans-serif' }}>
      <div className="text-xl font-semibold">
        <a
          href="/"
          style={{
            fontSize: '28px',
            fontWeight: 800,
            lineHeight: '36.4px',
            textAlign: 'left',
            background: 'white',
            color: '#2C2C2C', // Assuming you want white text on the dark background
            padding: '8px 12px', // Optional padding for better spacing
            borderRadius: '4px', // Optional for rounded corners
            display: 'inline-block', // Ensures padding is applied
          }}
        >
          EzSignature
        </a>
      </div>
      <div 
        className="flex space-x-8"
        style={{
          width: '508px',
          height: '23px',
          fontSize:"18px",
         fontWeight:600,
          background: 'white',
          lineHeight:"23.4px",
          opacity: 1, // Set to 1 for visibility
          color: '#FFFFFF', // Set text color to white for contrast
        }}
      >
        <a href="/features" style={{ color: '#2C2C2C' }}>Features</a>
        <a href="/pricing" style={{ color: '#2C2C2C' }}>Pricing</a>
        <a href="/help-center" style={{ color: '#2C2C2C' }}>Help Center</a>
        <a href="/developer" style={{ color: '#2C2C2C' }}>Developer</a>
      </div>
      <div className="flex space-x-4"
      >
        <Button className='bg-white outline w-[149px] h-[63px]'>
          <Link href='/login'>Login</Link>  
        </Button>
        <Button className='bg-[#21D0B3] w-[149px] h-[63px]'>
        <Link href='/signup'>Sign Up</Link>  
        </Button>
      </div>
    </nav>

    {/* //home section */}
    <div className='flex mx-7 px-7'>
        <div className='flex flex-col mt-8'>
          <h2 className='text-[55px] font-[800] leading-[110.5px]'>Free electronic <br/> signatures at work, at <br/> home or on the go.</h2>
          <p className='text-[22px] leading-[28.6px] weight-[600]'>Securely approve, send and sign documents online with EzSignature</p>
          <div className='flex space-x-4 py-5'>
          <Button className='bg-[#21D0B3] w-[251px] h-[75px] text-[#FFFFFF]'>
         <Link href='/signup'>Sign Up for free</Link>  
        </Button>
          <Button className='bg-white outline w-[206px] h-[75px]'>
          <Link href='/login'>Take a tour</Link>  
          </Button>
          </div>
        </div>
        <div className=''>
          <img src={homeImg.src} alt="home Image" width='591.72px' height='553.16px' />
        </div>
    </div>
{/* card section */}
<div className='mx-8'>
  <div className='ml-[77px] m'>
    <h1 className='font-[700] text-[64px] leading-[83.2px] '>Easy to use, reliable, And completely secure</h1>
    <p className='font-[500] text-[26px] leading-[33.8px] '>It is a long established fact that a reader will be distracted by the readable <br/>
    content of a page when looking at its layout.</p>
  </div>
  <div className='flex flex-row m-[119px] space-x-7'>
    <div className='flex'>
      <div className='w-[539px] flex flex-col justify-center p-[46px] rounded-[57px] border outline-[#CCCCCC] '>
        <h3 className='font-[700] text-[44px] leading-[57.2px] '>eSign from anywhere</h3>
        <p className='font-[500] text-[20px] leading-[26px] pt-3 pb-8 '>Upload documents from device or cloud and your signature
        with ease : draw: upload. or type it on your mobile</p>
        <img src={ss1.src} alt="" />
      </div>
    </div>
    <div className='flex'>
      <div className='w-[539px] flex flex-col justify-center p-[46px] rounded-[57px] border outline-[#CCCCCC] '>
        <h3 className='font-[700] text-[44px] leading-[57.2px] '>eSign from anywhere</h3>
        <p className='font-[500] text-[20px] leading-[26px] pt-3 pb-8 '>Upload documents from device or cloud and your signature
        with ease : draw: upload. or type it on your mobile</p>
        <img src={ss1.src} alt="" />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default TopNav;

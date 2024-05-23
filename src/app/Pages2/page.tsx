import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RootLayout, { metadata } from '@/app/layout';



const Page: React.FC = () => {
  const pageStyle = {
    
    backgroundImage: `url('/bg.png')`,   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <main style={pageStyle} className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div style={ { width: 60 } } className="logo">
<Image
      src="/logoo.png"
      alt="back"
      width={80}
      height={80}  
    />  
</div>




<div className="BusForYou">
<div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
<Image
      src="/autobus.png"
      alt="Bus Image"
      width={40}
      height={40}
    />
    
    <div style={{ width: 350 }} className="BusForYou-text" >
    

    Bus 2  Places vacantes : 20
    </div>  
  </div>
</div>

<div    className="YourBusPosition">
<div className="YourBusPosition">    
<Image
      src="/position.png"
      alt="Bus Image"
      width={180}
      height={180}
    />
  </div>
</div>

<div style={ { width: 30 } } className="Button">
<div style={{ width: 350,  }} className="Button-text">

<Link href="./"> 
<Image
      src="/direction-gauche.png"
      alt="back"
      width={40}
      height={40}
    />Home
    </Link></div>
</div>  
      </main>
  );
};

export { metadata };
export default Page;

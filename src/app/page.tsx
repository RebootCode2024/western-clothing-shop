import Frame1Homepage from './components/Frame-1-Homepage';
import Frame2Homepage from './components/Frame-2-Homepage';
import Navbar from './components/Navbar'; // Import the Navbar component
import BrandsLogos from './components/Brands-Logos'; // Import the new BrandsLogos component

export default function Home() {
  return (
    <main style={{ padding: '0' }}>
      {/* Include the Frame1Homepage component */}
      <Frame1Homepage />
      
      {/* Include the Navbar component */}
      <Navbar />
      
      {/* Include the Frame2Homepage component */}
      <Frame2Homepage />
      
      {/* Include the BrandsLogos component */}
      <BrandsLogos />
      
      {/* Other sections or components */}
    </main>
  );
}

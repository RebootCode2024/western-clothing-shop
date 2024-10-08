import Frame1Homepage from './components/Frame-1-Homepage';
import Frame2Homepage from './components/Frame-2-Homepage';
import Navbar from './components/Navbar'; // Import the Navbar component
import BrandsLogos from './components/brands-logos';  // Import the new BrandsLogos component
import NewArrivals from './components/NewArrivals'; // Import the NewArrivals component
import TopSelling from './components/TopSelling'; // Import the TopSelling component
import BrowseByDressStyle from './components/BrowseByDressStyle'; // Import the BrowseByDressStyle component
import HappyCustomers from './components/HappyCustomers'; // Import the HappyCustomers component
import NewsletterSubscribe from './components/NewsletterSubscribe'; // Import the NewsletterSubscribe component
import Footer from './components/Footer'; // Import the Footer component

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
      
      {/* Include the NewArrivals component */}
      <NewArrivals />

      {/* Include the TopSelling component */}
      <TopSelling />

      {/* Include the BrowseByDressStyle component */}
      <BrowseByDressStyle />
      
      {/* Include the HappyCustomers component */}
      <HappyCustomers /> 

      {/* Include the NewsletterSubscribe component */}
      <NewsletterSubscribe />

      {/* Include the Footer component */}
      <Footer />

      {/* Other sections or components */}
    </main>
  );
}

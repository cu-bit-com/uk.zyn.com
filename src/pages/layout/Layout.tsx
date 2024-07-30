import { Outlet } from 'react-router-dom';
import Header from '../../components/common/header/Index';
import Footer from '../../components/common/footer/Index';
import { Helmet } from 'react-helmet';
import React, {useEffect} from 'react';


const Layout: React.FC = () => {
	useEffect(() => {
	  // Create and insert the GTM <noscript> part into the body
	  const noScript = document.createElement('noscript');
	  noScript.innerHTML = `
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBLNKVH"
		height="0" width="0" style="display:none;visibility:hidden"></iframe>
	  `;
	  document.body.insertBefore(noScript, document.body.firstChild);
  
	  // Clean up the <noscript> part when the component unmounts
	  return () => {
		if (noScript.parentNode) {
		  noScript.parentNode.removeChild(noScript);
		}
	  };
	}, []);
  
	return (
	  <>
		<Helmet>
		  <script>
			{`
			  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			  })(window,document,'script','dataLayer','GTM-WBLNKVH');
			`}
		  </script>
		</Helmet>
		
		<Header />
		<Outlet />
		<Footer />
	  </>
	);
  };
  
  export default Layout;
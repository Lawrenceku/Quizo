const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p size="sm" className="text-gray-400">
            &copy; {new Date().getFullYear()} Curanet. All rights reserved.
          </p>
          <div className="mt-4">
            <p
              href="/privacy-policy"
              className="text-gray-400 hover:text-white mx-2 underline"
            >
              Privacy Policy
            </p>
            <p
              href="/terms-of-service"
              className="text-gray-400 hover:text-white mx-2 underline"
            >
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
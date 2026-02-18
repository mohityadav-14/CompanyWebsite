function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white mt-20 w-full fixed bottom-0 left-0">
      <div className="py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} DevCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

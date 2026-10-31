function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="bg-sage-medium py-4 text-center">
      <p className="text-xl font-bold font-display">
        &copy;{year} Heather Meyer Fine Art
      </p>
    </div>
  );
}

export default Footer;

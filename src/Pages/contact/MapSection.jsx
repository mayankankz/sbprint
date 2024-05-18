import React from "react";

const MapSection = () => {
  return (
    <div className="map">
      <iframe
        className="w-100 h-100 border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921"
        allowFullScreen=""
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default MapSection;

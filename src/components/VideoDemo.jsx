const VideoDemo = () => {
  return (
    <section id="demo" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Preview Video
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our quick demo to see how Vidflix works
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/dhh2aIucDSE?si=uLKAEsEGTvDV9r53"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;

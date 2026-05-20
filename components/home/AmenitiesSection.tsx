const amenities = [
  { iconClass: "fa-water-ladder", title: "Swimming Pool" },
  { iconClass: "fa-volleyball", title: "Indoor Games" },
  { iconClass: "fa-dumbbell", title: "Fully Equipped Gym" },
  { iconClass: "fa-road", title: "Walking/Jogging Track" },
  { iconClass: "fa-spa", title: "Spa & Salon" },
  { iconClass: "fa-film", title: "Home Theatre" },
  { iconClass: "fa-children", title: "Kids Play Area" },
  { iconClass: "fa-book", title: "Library" },
  { iconClass: "fa-gamepad", title: "Arcade & Billiards" },
  { iconClass: "fa-parking", title: "Basement Parking" },
  { iconClass: "fa-person-biking", title: "Cycling Track" },
  { iconClass: "fa-campground", title: "Yoga & Meditation" },
];

export default function AmenitiesSection() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-dark mb-4">
            Lifestyle Amenities
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Premium facilities designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card-light">
              <div className="amenity-icon mx-auto mb-3">
                <i className={`fa-solid ${amenity.iconClass} text-xl`}></i>
              </div>
              <h3 className="text-sm font-medium text-dark">{amenity.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/amenities"
            className="cta-button-large inline-flex items-center"
          >
            <i className="fa-solid fa-building text-sm"></i>
            <span>View All Amenities</span>
          </a>
        </div>
      </div>
    </section>
  );
}

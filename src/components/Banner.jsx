function Banner({ eventName, location, date }) {
  // If there's no eventName, return null so nothing renders in the DOM
  if (!eventName) return null;

  return (
    <div className="text-center py-1 bg-accent-warm text-xl font-semibold">
      <h2>
        Upcoming Event: "{eventName}" - {location}, {date}
      </h2>
    </div>
  );
}

export default Banner;

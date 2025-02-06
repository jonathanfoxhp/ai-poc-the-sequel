function Calendar({ ...other }) {
  const getCurrentTime = (additionalHours = 0) => {
    const now = new Date();
    now.setHours(now.getHours() + additionalHours); // Add the specified number of hours

    let hours = now.getHours(); // Get the hour (0-23)
    const minutes = now.getMinutes(); // Get the minutes (0-59)
    const ampm = hours >= 12 ? "PM" : "AM"; // Determine am/pm

    hours = hours % 12; // Convert to 12-hour format
    hours = hours || 12; // Replace 0 with 12 for midnight
    // const formattedMinutes = minutes.toString().padStart(2, "0"); // Ensure two-digit minutes

    return `${hours}:00 ${ampm}`;
  };

  return (
    <div className="calendar" {...other}>
      <div className="calendar__fancyBar">
        <time>{getCurrentTime()}</time>
        <div />
      </div>
      <div className="calendar__bar">
        <time>{getCurrentTime(1)}</time>
        <div />
      </div>
      <div className="calendar__bar">
        <time>{getCurrentTime(2)}</time>
        <div />
      </div>
      <div className="calendar__bar">
        <time>{getCurrentTime(3)}</time>
        <div />
      </div>
      <div className="calendar__event">
        <span>Weekly Design Review</span>
        <time>
          <time>{getCurrentTime(2)}</time>
        </time>
      </div>
    </div>
  );
}

export default Calendar;

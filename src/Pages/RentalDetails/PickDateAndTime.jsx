import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

export default function PickDateAndTime() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Select Date and Time then Booked
        </h2>
        <div className="mb-6 bg-green-400 p-5 text-xl font-bold">
          <DateTimePicker onChange={handleDateChange} value={selectedDate} />
        </div>

        {/* Display the selected date/time */}
        <p className="text-gray-700">
          Selected Date and Time: {selectedDate?.toString()}
        </p>
        <button className="btn my-2 bg-green-500 text-white mx-auto">
          Booked
        </button>
      </div>
    </div>
  );
}

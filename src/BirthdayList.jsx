import { useState } from "react";
import data from "./data";
import Birthday from "./Birthday";

function BirthdayList() {
  const [birthdays, setBirthdays] = useState(data);

  function deleteBirthdays() {
    setBirthdays(null);
  }

  return (
    <div>
      <main>
        {birthdays ? (
          <section className="container">
            <h3>{birthdays.length} Birthdays Today</h3>
            {birthdays.map((birthday) => {
              return <Birthday key={birthday.id} {...birthday} />;
            })}
            <button className="btn btn-block" onClick={deleteBirthdays}>
              Clear The List
            </button>
          </section>
        ) : (
          <section className="container">
            <h3>0 Birthdays Today</h3>
          </section>
        )}
      </main>
    </div>
  );
}
export default BirthdayList;

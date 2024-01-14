import './../styles/scheduleItem.css'
import React, { useState, useEffect } from "react";

const ScheduleItem = ({ schedule }) => {
    const [schedule_item, setSchedule_item] = useState(schedule);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    // useEffect(() => {
    //   fetchScheduleItem();
    // }, []);

  
    function handleDropdownItemClick(value) {
      setSchedule_item(prevState => ({
        ...prevState,
        status: value
      }));
    }
  
    function handleDeleteFunction() {
      setIsPopupOpen(true);
    }
  
    function handleCancel() {
      setIsPopupOpen(false);
    }
  
    function handleConfirm(schedule_id) {
      if (schedule.id === schedule_id) {
        setSchedule_item(prevState => ({
          ...prevState,
          id: null,
          Room: "",
          Doctor: "",
          Date: "",
          Time: "",
          Status: ""
        }));
        console.log(schedule_item);
        handleCancel();
      } else {
        handleCancel();
      }
    }
  
    const rowClassName = schedule_item === null ? "schedule_item-tr-hidden" : "schedule_item-tr";
  
    return (
      <>
        {!isPopupOpen &&
          <tr className={rowClassName} key={schedule.id}>
            <td>{schedule_item?.Room}</td>
            <td>{schedule_item?.DoctorCategory_id}</td>
            <td>{schedule_item?.Date}</td>
            <td>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button-d" data-bs-toggle="dropdown" aria-expanded="false">
                  {schedule_item?.Status}
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => handleDropdownItemClick('Работает')}>Работает</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleDropdownItemClick('Не работает')}>Не работает</a></li>
                </ul>
              </div>
            </td>
          </tr>
        }
      </>
    );
  };
 
export default ScheduleItem;
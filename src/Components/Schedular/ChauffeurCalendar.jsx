import React, { useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import ChauffeurContext from '../Chauffeurs/ChauffeurContext';
import { SlotProvider } from './SlotContext';

const localizer = momentLocalizer(moment);

// Function to generate a random hexadecimal color


const ChauffeurCalendar = () => {
  const { items } = useContext(ChauffeurContext);

  const events = items.flatMap((chauffeur) => {
    const eventsForMonth = [];
    const startOfMonth = moment().startOf('month');
    const endOfMonth = moment().endOf('month');

    for (let date = moment(startOfMonth); date <= endOfMonth; date.add(1, 'day')) {
      const startHour = chauffeur.startWork.split(':')[0];
      const startMinute = chauffeur.startWork.split(':')[1];
      const endHour = chauffeur.endWork.split(':')[0];
      const endMinute = chauffeur.endWork.split(':')[1];

      const start = date.clone().set({ hour: startHour, minute: startMinute });
      const end = date.clone().set({ hour: endHour, minute: endMinute });

      eventsForMonth.push({
        id: chauffeur.id,
        title: chauffeur.nom,
        start: start.toDate(),
        end: end.toDate(),
        color: chauffeur.color
      });
    }
    return eventsForMonth;
  });

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px', color: 'black'  }}
        eventPropGetter={(chauffeur) => {
          return {
            style: {
              backgroundColor: chauffeur.color,
            },
          };
        }}
        selectable
        onSelectSlot={(slotInfo) => console.log(slotInfo)}
        onSelectEvent={(event) => console.log(event)} // Handle event selection as needed
      />
    </div>
  );
};

const WrappedChauffeurCalendar = () => {
  return (
    <SlotProvider>
      <ChauffeurCalendar />
    </SlotProvider>
  );
};

export default WrappedChauffeurCalendar;

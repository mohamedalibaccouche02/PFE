import React, { useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import ChauffeurContext from '../Chauffeurs/ChauffeurContext';
import { SlotProvider } from './SlotContext';
import { fetchAllChauffeurs } from '../../api/chauffeur_api';

const localizer = momentLocalizer(moment);

const ChauffeurCalendar = () => {
  const { items } = useContext(ChauffeurContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data from your database
    const fetchEvents = async () => {
      try {
        // Perform API call to fetch chauffeur data
        // Replace 'fetchChaufeursFromDatabase' with your actual fetch function
        const chauffeurs = await fetchAllChauffeurs();
        
        // Process fetched data to generate events
        const eventsData = chauffeurs.flatMap(chauffeur => {
          // Logic to generate events for each chauffeur
          const eventsForChauffeur = [];

          // Here you can customize how events are generated based on chauffeur data
          // Example logic:
          const start = moment(chauffeur.startWork, 'HH:mm');
          const end = moment(chauffeur.endWork, 'HH:mm');

          // Assuming events are daily recurring for the whole month
          const startOfMonth = moment().startOf('month');
          const endOfMonth = moment().endOf('month');
          for (let date = moment(startOfMonth); date <= endOfMonth; date.add(1, 'day')) {
            const startDateTime = date.clone().set({ hour: start.hour(), minute: start.minute() });
            const endDateTime = date.clone().set({ hour: end.hour(), minute: end.minute() });

            eventsForChauffeur.push({
              id: chauffeur.id,
              title: chauffeur.nom,
              start: startDateTime.toDate(),
              end: endDateTime.toDate(),
              color: chauffeur.color
            });
          }

          return eventsForChauffeur;
        });

        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching chauffeurs:', error);
      }
    };

    fetchEvents();
  }, [items]);

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px', color: 'black' }}
        eventPropGetter={(chauffeur) => ({
          style: {
            backgroundColor: chauffeur.color,
          },
        })}
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

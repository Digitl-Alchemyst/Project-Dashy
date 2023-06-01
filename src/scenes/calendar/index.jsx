import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    if (title) {
      setCurrentEvents([...currentEvents, { title, date: selected.dateStr }]);
    }
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: "${selected.dateStr}-${title}", // use a unique id like guid or date-time-string
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Interactive Calendar & Event Tracker" />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="end"
        
      >
        {/* Calendar Sidebar */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          borderRadius="10px"
          p="10px"
          width="175px"
          height="76.5vh"
          boxShadow="0 2px 5px rgba(0, 0, 0, 0.3)"
        >
          <Typography variant="h5">Upcoming Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[600],
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: colors.greenAccent[800],
                  boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.60)",
                  margin: "10px 0px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar Body */}
        <Box
                    sx={{
                      ".fc-toolbar.fc-header-toolbar": {
                        backgroundColor: colors.primary[900],
                        color: colors.primary[50],
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        margin: "-8px",
                        padding: "3px",
                        
                      }
                    }}
          flex="1 1 100%"
          ml="15px"
          backgroundColor={colors.primary[400]}
          borderRadius="10px"
          padding="8px"
          boxShadow="0 2px 5px rgba(0, 0, 0, 0.3)"
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right:
                "dayGridMonth,timeGridWeek,timeGridDay,listMonth,listWeek,listDay",
            }}

            // events={currentEvents}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            // weekends={true}
            initialEvents={[
              {
                id: "1",
                title: "All Day Event",
                date: "2023-05-14T10:30:00",
                end: "2023-05-14T12:80:00",
              },
              {
                id: "2",
                title: "Timed Event",
                date: "2023-05-15T10:30:00",
                end: "2023-05-15T12:80:00",
              },
            ]} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateClick}
            // eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
                          eventAdd={function(){}}
                          eventChange={function(){}}
                          eventRemove={function(){}}
                          */
          />
        </Box>
        {/* Calendar Footer */}
      </Box>
    </Box>
  );
};

export default Calendar;

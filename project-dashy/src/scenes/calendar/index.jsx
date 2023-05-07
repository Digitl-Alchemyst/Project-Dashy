import { useState } from 'react';
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt('Please enter a new title for your event');
        if (title) {
            setCurrentEvents([
                ...currentEvents,
                { title, date: selected.dateStr }
            ]);
        }
        const calendarApi = selected.view.calendar;
            calendarApi.unselect(); // clear date selection

            if (title) {
                calendarApi.addEvent({
                    id: '${selected.dateStr}-${title}', // use a unique id like guid or date-time-string
                    title,
                    start: selected.startStr,
                    end: selected.endStr,
                    allDay: selected.allDay
                });
            }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="Fully interactive calendar" />

            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" component="h2">Events</Typography>
                <Typography variant="h6" component="h2">Today</Typography>
                {/* Calendar Sidebar */}
                <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" backgroundColor={colors.primary[400]} borderRadius="10px" p="10px" width="200px" height="300px">
                    <Typography variant="h5">Upcoming Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{ 
                                    backgroundColor: colors.greenAccent[500], 
                                    borderRadius: '10px', 
                                    margin: '10px 0px',
                                }}
                            >
                                <ListItemText 
                                    primary={event.title} 
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {  
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })
                                            }
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            ))}
                    </List>
                </Box>    
                {/* Calendar Topbar */}
                {/* Calendar Body */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        // events={currentEvents}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        // weekends={true}
                        initialEvents={[
                            {id: '1', title: 'All Day Event', date: "2023-05-14T10:30:00", end: "2023-05-14T12:80:00"},
                            {id: '2', title: 'Timed Event', date: "2023-05-15T10:30:00", end: "2023-05-15T12:80:00"},
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
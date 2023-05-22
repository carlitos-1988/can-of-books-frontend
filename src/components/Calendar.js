import "../App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Component } from "react";
import moment from "moment";

const locales = {
  "en-us": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

class EmployeeSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shifts: [],
      dayShiftPeople: [],
      midShiftPeople: [],
      nightShiftPeople: [],
      dayShiftPeopleSecond: [],
      midShiftPeopleSecond: [],
      nightShiftPeopleSecond: []
    };
    this.refreshInterval = null;
    this.refreshIntervalDuration = 5 * 60 * 1000; // 5 minutes in miliseconds
  }

  componentDidMount() {
    this.getSchedule();

   this.interval = setInterval(() => {
    console.log('5 min refresh interval started');
    this.getSchedule();
   }, this.refreshIntervalDuration);
  }
 
  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  sendEmail = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/emailemployees`;
      let urlData = await axios.get(url);
      console.log(urlData);
    } catch (error) {
      console.log(error.message);
    }
  }

  getSchedule = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/test2`;
      let urlData = await axios.get(url);
      const shifts = urlData.data;
      console.log(shifts);
      const dayShiftPeople = [];
      const midShiftPeople = [];
      const nightShiftPeople = [];
      const dayShiftPeopleSecond = [];
      const midShiftPeopleSecond = [];
      const nightShiftPeopleSecond = [];

      shifts[0].dayShift.forEach(employee => {
        dayShiftPeople.push(employee);
      });
      console.log(dayShiftPeople);
      shifts[0].midShift.forEach(employee => {
        midShiftPeople.push(employee);
      });
      console.log(midShiftPeople);
      shifts[0].nightShift.forEach(employee => {
        nightShiftPeople.push(employee);
      });
      console.log(nightShiftPeople);

      shifts[1].dayShift.forEach(employee => {
        dayShiftPeopleSecond.push({
          firstName: employee.firstName,
          lastName: employee.lastName,
          level: employee.level
        });
      });
      console.log(dayShiftPeopleSecond);
      shifts[1].midShift.forEach(employee => {
        midShiftPeopleSecond.push({
          firstName: employee.firstName,
          lastName: employee.lastName,
          level: employee.level
        });
      });
      console.log(midShiftPeopleSecond);
      shifts[1].nightShift.forEach(employee => {
        nightShiftPeopleSecond.push({
          firstName: employee.firstName,
          lastName: employee.lastName,
          level: employee.level
        });
      });
      console.log(nightShiftPeopleSecond);

      this.setState({ shifts, dayShiftPeople, midShiftPeople, nightShiftPeople, dayShiftPeopleSecond, midShiftPeopleSecond, nightShiftPeopleSecond });
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSendEmailClick = () => {
    this.sendEmail();
  }

  handleGenerateScheduleClick = () => {
    this.getSchedule();
  };

  render() {
    return (
      <div>
        <CalendarApp
          dayShiftPeople={this.state.dayShiftPeople}
          midShiftPeople={this.state.midShiftPeople}
          nightShiftPeople={this.state.nightShiftPeople}
          dayShiftPeopleSecond={this.state.dayShiftPeopleSecond}
          midShiftPeopleSecond={this.state.midShiftPeopleSecond}
          nightShiftPeopleSecond={this.state.nightShiftPeopleSecond}
        />
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px" }}>
        <Button
        onClick={this.handleGenerateScheduleClick}
        style={{
          padding: "12px 24px",
          background: "linear-gradient(45deg, #FF8A00, #FF0080)",
          color: "#fff",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          marginLeft: "20px",
          transform: "scale(1)",
        }}
        onMouseDown={() => this.setState({ isPressed: true })}
onMouseUp={() => this.setState({ isPressed: false })}
onTouchStart={() => this.setState({ isPressed: true })}
onTouchEnd={() => this.setState({ isPressed: false })}
>
<span
  style={{
    display: "inline-block",
    transform: this.state.isPressed ? "scale(0.95)" : "scale(1)",
    transition: "transform 0.3s ease",
  }}
>
  Generate Schedule
</span></Button>
        <Button
        onClick={this.handleSendEmailClick}
          style={{
            padding: "12px 24px",
            background: "linear-gradient(45deg, #00FFA6, #00FFD4)",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginLeft: "20px",
            transform: "scale(1)",
          }}
          onMouseDown={() => this.setState({ isPressed: true })}
  onMouseUp={() => this.setState({ isPressed: false })}
  onTouchStart={() => this.setState({ isPressed: true })}
  onTouchEnd={() => this.setState({ isPressed: false })}
>
  <span
    style={{
      display: "inline-block",
      transform: this.state.isPressed ? "scale(0.95)" : "scale(1)",
      transition: "transform 0.3s ease",
    }}
  >
    Send Schedule
  </span>
  </Button>
      </div>
      </div>
    )
  }
}

const eventStyleGetter = (event, start, end, isSelected) => {
  let backgroundColor, borderColor;

  if (event && event.color === "blue") {
    backgroundColor = "#a300ff";
    borderColor = "#a300ff";
  } else if (event && event.color === "green") {
    backgroundColor = "#FF9800";
    borderColor = "#F57C00";
  } else if (event && event.color === "orange") {
    backgroundColor = "#4CAF50";
    borderColor = "#388E3C";
  }

  return {
    style: {
      backgroundColor,
      backgroundImage: `linear-gradient(45deg, ${backgroundColor}, ${borderColor})`,
      borderColor,
    },
  };
};

const styles = {
  event: {
    backgroundColor: '#007acc',
    color: '#fff',
    borderRadius: '0px',
    border: 'none',
    margin: '0',
    padding: '5px',
    fontSize: '16px',
  },
  agenda: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  agendaTime: {
    fontWeight: 'bold',
    color: '#3174ad',
  },
  agendaTitle: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todayButton: {
    backgroundColor: '#3174ad',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  dayHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '10px',
    textAlign: 'center',
  }
};

function CalendarApp({ dayShiftPeople, midShiftPeople, nightShiftPeople, dayShiftPeopleSecond, midShiftPeopleSecond, nightShiftPeopleSecond }) {

  const events = [];

  for (let i = 1; i <= 30; i += 2) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dayShiftPeople.forEach(employeeId => {
      events.push(
        {
          title: `Day Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          description: "Yo",
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          color: "blue",
        });
    });
    midShiftPeople.forEach(employeeId => {
      events.push(
        {
          title: `Mid Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 0),
          color: "green",
        });
    });
    nightShiftPeople.forEach(employeeId => {
      events.push(
        {
          title: `Night Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          color: "orange",
        });
    });
  }

  for (let i = 0; i <= 30; i += 2) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dayShiftPeopleSecond.forEach(employeeId => {
      events.push(
        {
          title: `Day Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          description: "Yo",
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          color: "blue",
        });
    });
    midShiftPeopleSecond.forEach(employeeId => {
      events.push(
        {
          title: `Mid Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 0),
          color: "green",
        });
    });
    nightShiftPeopleSecond.forEach(employeeId => {
      events.push(
        {
          title: `Night Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          color: "orange",
        });
    });
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        eventComponent={Event}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh', width: '100%', padding: '20px' }}
        eventPropGetter={
        eventStyleGetter
        }
        components={{
          dayHeader: ({ label }) => (
            <div style={styles.dayHeader}>(label)</div>
          ),
          agenda: {
            event: ({ event }) => (
              <div style={styles.agenda}>
                <div style={styles.agendaTime}>
                  {moment(event.start).format('h:mm a')}
                </div>
                <div style={styles.agendaTitle}>{event.title}</div>
              </div>
            ),
          },
        }}
      />

    </div>
  );
}

export default EmployeeSchedule;

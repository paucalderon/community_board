import './App.css'
import elpasoImage from './assets/elpasojpg.png'

function EventCard(props) {
  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>📍 {props.location}</p>
      <p>📆 {props.date}</p>
      <p>⏰ {props.time}</p>
      <a href={props.link} target="_blank">
        <button>View Event</button>
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <img className="header-image" src={elpasoImage} alt="Greetings from El Paso mural" />
      <h1>El Paso Events</h1>

      <div className="card-container">

        <EventCard
          title="Stress Relief Through Arts: The Weight We Carry"
          description="The annual exhibit brings together artwork created by current/retired first responders and their immediate family members, offering the community an opportunity to experience another side of those who serve, not through uniforms or titles, but through what they create."
          location="International Museum of Art"
          date="September 12 - October 4, 2026"
          time="12:00 PM - 5:00 PM"
          link="https://visitelpaso.com/events/stress-relief-through-arts-the-weight-we-carry-an-annual-first-responder-art-exhibit"
        />

        <EventCard
          title="Woz Art: A Solo Show by Michael Woznicki"
          description="The International Museum of Art is proud to welcome local artist, Michael Woznicki, for his first solo showcase, Woz Art."
          location="International Museum of Art"
          date="September 12 - October 4, 2026"
          time="12:00 PM - 5:00 PM"
          link="https://visitelpaso.com/events/woz-art-a-solo-show-by-michael-woznicki"
        />

        <EventCard
          title="Geeks Who Drink Pub Quiz"
          description="In-person Pub Quiz events across the United States. Think you’re Clever? Try Us 😎."
          location="Evaga Desert Kitchen"
          date="September 22, 2026"
          time="7:00 PM - 9:00 PM"
          link="https://visitelpaso.com/events/geeks-who-drink-pub-quiz-at-the-elmont-2026-09-22"
        />

        <EventCard
          title="Neighborhoods and Shared Memories: Austin Terrace"
          description="Join us as we celebrate the opening of our exhibition Neighborhoods and Shared Memories: Austin Terrace."
          location="El Paso Museum of History"
          date="September 23, 2026"
          time="10:00 AM - 6:00 PM"
          link="https://visitelpaso.com/events/neighborhoods-and-shared-memories-austin-terrace-2026-09-23"
        />

        <EventCard
          title="Blast: Trancazos de la Vida Real"
          description="Blast confronts the tension between desire, survival, and overindulgence in contemporary American culture. This body of work lives in the space between aspiration and disillusionment."
          location="El Paso Museum of Art"
          date="September 23, 2026"
          time="10:00 AM - 6:00 PM"
          link="https://visitelpaso.com/events/blast-trancazos-de-la-vida-real-exhibition-2026-09-23"
        />

        <EventCard
          title="Creative Outlets: Acting Sessions"
          description="Join us for some theatrical fun! Feel like stretching your creative muscles? Join us for some scene work, monologues, duets, etc.! No experience required. Just come out and join in the fun and meet some new people!"
          location="Mountain Star Brewing"
          date="September 23, 2026"
          time="6:00 PM - 8:00 PM"
          link="https://visitelpaso.com/events/creative-outlets-acting-sessions-2026-09-23"
        />

        <EventCard
          title="Faculty Recital Series: Dr. Arturo Galvan"
          description="Join us for an evening of classical music for tuba and euphonium."
          location="Fox Fine Arts Recital Hall"
          date="September 23, 2026"
          time="7:30 PM - 9:00 PM"
          link="https://visitelpaso.com/events/faculty-recital-series-dr-arturo-galvan-tuba"
        />

        <EventCard
          title="Free Yoga Thursdays"
          description="Get your Zen on with our hour-long yoga session led by Jose S. Casillas."
          location="El Paso Museum of History"
          date="September 24, 2026"
          time="5:30 PM - 6:30 PM"
          link="https://visitelpaso.com/events/free-yoga-thursdays-2026-09-24"
        />

        <EventCard
          title="Boombox Bingo"
          description="It’s bingo, but with music! Come out tonight for great food, drinks, music, and prizes 🎶🍻"
          location="Evaga Desert Kitchen"
          date="September 24, 2026"
          time="7:00 PM - 9:00 PM"
          link="https://visitelpaso.com/events/boombox-bingo-the-elmont-2026-09-24"
        />

        <EventCard
          title="Opera UTEP: ¡Celebración!"
          description="Opera UTEP’s annual celebration of Hispanic composers features singers from UTEP’s Opera Workshop class and Dr. Esequiel Meza, Jr., piano."
          location="Fox Fine Arts Recital Hall"
          date="September 24, 2026"
          time="7:30 PM - 9:00 PM"
          link="https://visitelpaso.com/events/opera-utep-celebracion-hispanic-heritage-month-concert"
        />
      </div>
    </>
  );
}

export default App

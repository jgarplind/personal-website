import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CV = () => (
  <Layout>
    <SEO title="CV" />
    <h1>
      CV{" "}
      <span role="img" aria-label="notepad">
        📝
      </span>
    </h1>
    <p>Find me on:</p>
    <ul>
      <li>
        <a href="https://twitter.com/jgarplind">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/jgarplind">Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/joel-garplind/">LinkedIn</a>
      </li>
    </ul>
    <h2>Intro</h2>
    <p>
      Visit LinkedIn for buzzwords. I like solving problems. I like
      collaborating. I enjoy working as a front end developer but it is really
      just one of many domains in which I enjoy to solve problems.
    </p>
    <h2>
      Work Experience{" "}
      <span role="img" aria-label="hacker">
        👨🏼‍💻
      </span>
    </h2>
    <h3>Front end developer, Forefront</h3>
    <p>May 2019 - present</p>
    <p>
      Doing consulting work as a front end developer. Working with React and
      Azure and related ecosystems on a daily basis. Frequently endorsed for my
      ability to pick new things up, pass the knowledge along, and perhaps most
      importantly - solve business problems efficiently.
    </p>
    <h3>Tech Architecture Delivery (Senior) Analyst, Accenture</h3>
    <p>August 2017 - May 2019</p>
    <p>
      Did system design, extending and utilizing out of box functionality in an
      Oracle propriatary billing system for a telecommunications company. Spent
      6 months in Bangalore, India, working with functional software testing.
      Played a crucial role in bridging the gap between product owners and
      offshore developers.
    </p>
    <h2>
      Education{" "}
      <span role="img" aria-label="student">
        👨🏼‍🎓
      </span>
    </h2>
    <h3>
      MSc. Industrial Engineering and Management, Linköping University, Sweden
    </h3>
    <p>
      Graduated June 2017. Technical specialization: Computer Science.
      Economical specialization: Strategy &amp; Management. GPA: 4.29 [5.0] Some
      particularily interesting courses include:
    </p>
    <ul>
      <li>Cybersecurity</li>
      <li>Game development</li>
      <li>Website programming</li>
      <li>
        Math and engineering courses en masse, which I still enjoy frequently
      </li>
    </ul>
    <h3>
      Exchange studies, Korean Advanced Institution of Science and Technology
    </h3>
    <p>
      Exchange studies on one of the worlds leading engineering universities
      corresponding to the 3rd year of my degree. Some interesting courses
      include:
    </p>
    <ul>
      <li>Databases</li>
      <li>Algorithms (Java programming)</li>
      <li>Candidate project - eCommerce website</li>
      <li>Computer architecture</li>
    </ul>
    <h2>
      Side activities{" "}
      <span role="img" aria-label="football">
        ⚽️
      </span>
    </h2>
    <h3>Board member of tenant owners' association</h3>
    <p>October 2019 - present</p>
    <p>
      Learning more about the inner workings of the community where I live while
      making the community where I live a better place to live. Live.
    </p>
    <h3>Volunteering</h3>
    <p>
      Long background in volunteering, though currently no active recurring
      engagements. I have been a Math Coach, General Tutor, Programming Tutor,
      and a Swedish buddy for two boys who had just immigrated to Sweden.
    </p>
    <h3>Sportsing</h3>
    <p>
      I enjoy sportsing, a lot. Mostly football since it is easy to find people
      to play with, but most sports, e-sports, chess (is not a sport, right?),
      and other similar activities catch my interest. So much that I have been
      coaching/refereeing on several occassions, mostly football and floorball.
      Most memorably, I co-coached an international football team while i Korea,
      bringing 10+ nationalities together and travelling across the (small)
      country to play tournaments.
    </p>
    <h2>
      Certificates and awards{" "}
      <span role="img" aria-label="trophy">
        🏆
      </span>
    </h2>
    <p>
      I don't value certificates highly, since I believe they only show a
      miniscule subset of the skills I and others possess. But others think
      differently, so here goes:
    </p>
    <h3>Certified SAFe 4 Practitioner</h3>
    <p>(read as: "I know agile")</p>
    <p>
      On the other hand, I would argue that I do have a lot of knowledge about
      working in agile environments, both from school projects (shoutout to
      "Programvaruutveckling/PUMen") but increasingly from work experience on a
      daily basis since graduation. Agile to me is a mindset and a philosophy
      more so than a cadence based work schedule, and I am happy to discuss it.
      Final note: I do think that SAFe does bring up a lot of good points, but I
      don't think that a certificate says much of anything.
    </p>
    <h3>Oracle Cloud Infrastructure 2018 Certified Associate Architect</h3>
    <p>(read as: "I know cloud")</p>
    <p>
      Sarcasm aside, I did learn a lot when studying for the certificate as I
      had to learn cloud concepts for the very first time. Furthermore, I can
      now complement the theoretical knowledge with practical experience from
      Azure which gives me a solid understanding of cloud architecture
      independent of the vendor providing the services.
    </p>
    <h3>Scholarship, Technology Doctor Erik Johnsson’s Fund.</h3>
    <p>
      SEK 50 000 for exchange studies. Selection based on good study results.
    </p>
    <h3>Scholarship, The Swedish Association of Graduate Engineers</h3>
    <p>
      SEK 8 500 for exchange studies. Selection based on good study results.
    </p>
    <h2>
      Languages{" "}
      <span role="img" aria-label="shouting person">
        🗣
      </span>
    </h2>
    <p>Swedish – the language I dream in.</p>
    <p>English – the language I work in.</p>
    <p>Spanish – the language I learned in a school bench and never applied.</p>
    <p>Korean – the language I briefly learned and try to not forget.</p>
    <h2>
      Personal{" "}
      <span role="img" aria-label="nerdface">
        🤓
      </span>
    </h2>
    <p>
      Too many things to write in too little space. Right now I am enjoying
      Civilization VI (computer game). Good balance of strategy, historical
      accuracy and plain good gameplay.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CV

import React from 'react';
import 'bulma/css/bulma.css';

export const firstArticle = {
  title: 'Electric-propulsion startup Orbion raises $9.2 million Series A',
  date: new Date('2019-08-30'),
  // eslint-disable-next-line max-len
  text: 'WASHINGTON — Orbion Space Technology announced Aug. 28 it raised a $9.2 million Series A round to develop and mass produce Hall-effect plasma thrusters for small satellites. Material Impact, a venture capital firm focused on early-stage investments, led the round, with Invest Michigan, Invest Detroit, Wakestream Ventures, Ann Arbor Spark, and Boomerang Catapult also participating. Orbion, a Houghton, Michigan-based company founded in 2016, joins a list of firms that have secured investor dollars for electric smallsat propulsion systems over the past two years, including Accion Systems in Boston, Indian startup Bellatrix Aerospace, and French startups ExoTrail and ThrustMe. Orbion’s distinction is in its approach to manufacturing, CEO Brad King said in an interview. The company is modelling its Aurora thruster production after the approach defense contractors use to build tactical missiles, he said.',
};

const today = new Date();
const dateISO = today.toISOString().slice(0, 10);
const dateLocaleString = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>

      {/* Add an <Article /> and pass `title`, `text` and `date` from the `article` object as props */}
      <div className="box">
        <h2 className="title" data-cy="title">
          Put title here
        </h2>

        <p className="subtitle">
          <time dateTime={dateISO} data-cy="date">
            {dateLocaleString}
          </time>
        </p>

        <p data-cy="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          assumenda magni adipisci esse quidem ratione ipsa labore vero illo
          optio.
        </p>
      </div>
    </div>
  </div>
);

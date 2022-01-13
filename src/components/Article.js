import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'Electric-propulsion startup Orbion raises $9.2 million Series A',
  date: `WASHINGTON — Orbion Space Technology announced Aug. 28 it raised a $9.2 million Series A round to
  develop and mass produce Hall-effect plasma thrusters for small satellites. Material Impact, a venture
  capital firm focused on early-stage investments, led the round, with Invest Michigan, Invest Detroit,
  Wakestream Ventures, Ann Arbor Spark, and Boomerang Catapult also participating. Orbion, a Houghton,
  Michigan-based company founded in 2016, joins a list of firms that have secured investor dollars for
  electric smallsat propulsion systems over the past two years, including Accion Systems in Boston, Indian
  startup Bellatrix Aerospace, and French startups ExoTrail and ThrustMe. Orbion’s distinction is in its
  approach to manufacturing, CEO Brad King said in an interview. The company is modelling its Aurora thruster
  production after the approach defense contractors use to build tactical missiles, he said.`,
  text: 'August 30, 2019',
};

export default Article;

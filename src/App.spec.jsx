/* eslint-disable max-len */

import React from 'react';
import { mount } from '@cypress/react';
import { App } from './App';

describe('App', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('should have 1 article', () => {
    cy.getByDataCy('title').should('have.length', 1);
  });

  it('should have a correct title', () => {
    cy.getByDataCy('title').should(
      'have.text',
      'Electric-propulsion startup Orbion raises $9.2 million Series A',
    );
  });

  it('should have a correct date', () => {
    cy.getByDataCy('date')
      .should('have.text', 'August 30, 2019')
      .and('have.attr', 'datetime', '2019-08-30');
  });

  it('should have correct text', () => {
    const EXPECTED_TEXT = `WASHINGTON — Orbion Space Technology announced Aug. 28 it raised a $9.2 million Series A round to develop and mass produce Hall-effect plasma thrusters for small satellites. Material Impact, a venture capital firm focused on early-stage investments, led the round, with Invest Michigan, Invest Detroit, Wakestream Ventures, Ann Arbor Spark, and Boomerang Catapult also participating. Orbion, a Houghton, Michigan-based company founded in 2016, joins a list of firms that have secured investor dollars for electric smallsat propulsion systems over the past two years, including Accion Systems in Boston, Indian startup Bellatrix Aerospace, and French startups ExoTrail and ThrustMe. Orbion’s distinction is in its approach to manufacturing, CEO Brad King said in an interview. The company is modelling its Aurora thruster production after the approach defense contractors use to build tactical missiles, he said.`;

    cy.getByDataCy('text').should('have.text', EXPECTED_TEXT);
  });
});

/* eslint-env jest */
import React from 'react';

import {
  MultiSelect,
  DefaultSnapShot,
  LockedSnapShot,
  DisabledSnapShot,
  SelectedSnapShot,
  MultiSelectedSnapShot,
  GrabbedSnapShot,
  MovedInSnapShot,
  DroppedSnapShot,
  MoveToSnapShot
} from '../';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default dueling picklist', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={DefaultSnapShot} />));

it('renders a dueling picklist with a required option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={LockedSnapShot} />));

it('renders a disabled dueling picklist', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={DisabledSnapShot} disabled />));

it('renders a dueling picklist with a selected option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={SelectedSnapShot} />));

it('renders a dueling picklist with multiple selected options', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={MultiSelectedSnapShot} />));

it('renders a dueling picklist with a grabbed option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={GrabbedSnapShot} />));

it('renders a dueling picklist with an option that was moved', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={MovedInSnapShot} />));

it('renders a dueling picklist with a dropped option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={DroppedSnapShot} />));

it('renders a dueling picklist with an option that was moved to another list', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={MovedInSnapShot} />));

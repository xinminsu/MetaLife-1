import React from 'react';
import { CardBody, CardCustomHeader, CardDefaultHeader, CardFooter } from './card-examples';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultCard: ComponentShowcaseItem = {
  props: {
    children: <CardBody/>,
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'DAO',
  items: [
    defaultCard,
  ],
};

const cardDefaultHeader: ComponentShowcaseItem = {
  props: {
    children: <CardBody/>,
    header: CardDefaultHeader,
  },
};

const cardDefaultHeaderSection: ComponentShowcaseSection = {
  title: 'NFT',
  items: [
    cardDefaultHeader,
  ],
};

const cardCustomHeader: ComponentShowcaseItem = {
  props: {
    children: <CardBody/>,
    header: CardCustomHeader,
  },
};

const cardCustomHeaderSection: ComponentShowcaseSection = {
  title: 'Play to earn',
  items: [
    cardCustomHeader,
  ],
};

const footerCard: ComponentShowcaseItem = {
  props: {
    children: <CardBody/>,
    footer: CardFooter,
  },
};

const footerSection: ComponentShowcaseSection = {
  title: 'VISwap',
  items: [
    footerCard,
  ],
};

const headerFooterCard: ComponentShowcaseItem = {
  props: {
    children: <CardBody/>,
    header: CardDefaultHeader,
    footer: CardFooter,
  },
};

const headerFooterSection: ComponentShowcaseSection = {
  title: 'Featured Content',
  items: [
    headerFooterCard,
  ],
};

export const cardShowcase: ComponentShowcase = {
  title: 'Discover',
  sections: [
    defaultSection,
    cardDefaultHeaderSection,
    cardCustomHeaderSection,
    footerSection,
    headerFooterSection,
  ],
};

export const cardSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'outline',
  },
  {
    propertyName: 'appearance',
    value: 'filled',
  },
  {
    propertyName: 'status',
    value: 'basic',
  },
  {
    propertyName: 'status',
    value: 'primary',
  },
  {
    propertyName: 'status',
    value: 'success',
  },
  {
    propertyName: 'status',
    value: 'info',
  },
  {
    propertyName: 'status',
    value: 'warning',
  },
  {
    propertyName: 'status',
    value: 'danger',
  },
  {
    propertyName: 'status',
    value: 'control',
  },
];

import React from 'react';
import { registerRootComponent } from 'expo';

import Routes from './Routes'

function App () {
  return <Routes />
}

registerRootComponent(App);
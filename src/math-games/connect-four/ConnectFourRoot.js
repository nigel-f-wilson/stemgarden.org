import React from 'react'

import { ConnectFourContextProvider } from "./ConnectFourContext";
import ConnectFourController from './ConnectFourController';

export default function ConnectFourRoot() {
  return (
    <ConnectFourContextProvider >
      <ConnectFourController />
    </ConnectFourContextProvider>
  )
}
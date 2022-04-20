import React from 'react'

import { ConnectFourContextProvider } from "./ConnectFourContext";
import ConnectFourGame from './ConnectFourGame';

export default function ConnectFourRoot() {
  return (
    <ConnectFourContextProvider >
      <ConnectFourGame />
    </ConnectFourContextProvider>
  )
}
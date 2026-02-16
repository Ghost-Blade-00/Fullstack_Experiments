import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { lazy,Suspense } from 'react';
import './App.css'
import Dashboard from './components/Dashboard';

const Dash = lazy(()=>import('./components/Dashboard'))
function App() {
  return(
    <Suspense fallback={<h1>loading....</h1>}>
      <Dash/>
    </Suspense>
  )
}

export default App

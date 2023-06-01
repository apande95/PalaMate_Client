import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route, Link, Navigate  } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NoMatch from './pages/NoMatch.jsx'
import Layout from './pages/Layout.jsx'
import Players from './pages/Players.jsx'
import Modal from './components/Modal.jsx'
import Weather from './pages/Weather.jsx'
import Player from './pages/Player.jsx'


function App() {
  return (
    <>
    {/* Routes */}
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {/* Landing page */}
        <Route index element={<Navigate to="/home" />} />

        {/* Home and nested routes */}
        <Route path="/home" element={<Home />}>
          <Route path="players" element={<Players />} />
          <Route path="player/:id" element={<Player />} />
          <Route path="modal" element={<Modal />} />
          <Route path="weather" element={<Weather />} />
        </Route>

        {/* Other routes */}
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Catch-all route */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>

    </>
  )
}

export default App

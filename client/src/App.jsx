import { Box } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatAppBar from './components/ChatAppBar'
import ChatList from './components/Chatlist'
import Chat from './components/Chat'

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <ChatAppBar />
        <Routes>
          <Route exact path="/" element={<ChatList />} />
          <Route path="/chat/:chatId" element={<Chat />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import NewsArticle from './pages/NewsArticle'
import SignInForm from './auth/forms/SignInForm'
import SignUpForm from './auth/forms/SignUpForm'

function App() {
  return (
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/news" element={<NewsArticle />}/>

           <Route path="/sign-in" element={<SignInForm />} />
           <Route path="/sign-up" element={<SignUpForm />} />
         </Routes>
      </BrowserRouter>
  )
}

export default App

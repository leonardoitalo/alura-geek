import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

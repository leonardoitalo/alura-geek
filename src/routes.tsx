import Header from 'components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

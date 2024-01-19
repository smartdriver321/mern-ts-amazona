import { Container, Nav, Navbar } from 'react-bootstrap'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='d-flex flex-column h-full'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>TS Amazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href='/cart' className='nav-link'>
              Cart
            </a>
            <a href='/signin' className='nav-link'>
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className='text-center'>All right reserved</div>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import { FiMenu, FiX, FiSearch, FiLogOut } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container, Menu } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../Footer'
import { Link } from 'react-router-dom'

export function Header({isAdmin = true, total}){
  const [open, setOpen] = useState(false);
  total = 0
  const handleMenuToggle = () => {
    setOpen(!open);
  };
  return(
    <Container $isadmin={isAdmin}>
      <Menu data-open-menu={open}>
        <header>
          <FiX 
            onClick={handleMenuToggle}
          />
          <span>Menu</span>
        </header>
        <div className="search-wrapper">
          <Input
            icon={FiSearch}
            placeholder='Busque por pratos ou ingredientes'
          />

          {
            isAdmin && 
            <ButtonText
              title='Novo prato'
              onClick={handleMenuToggle}
            />
          }
          <ButtonText
            title='Sair'
            onClick={handleMenuToggle}
          />
        </div>

        <Footer />
      </Menu>
      <FiMenu
        className='menu-icon'
        onClick={handleMenuToggle}
      />
      <div className="logo">
        <Logo/>
      </div>
      <div className="desktop-header">
        <Input 
          icon={FiSearch}
          placeholder='Busque por pratos ou ingredientes'
        />
       {
         isAdmin?
        <Link to={'/newdish'}>
          <Button
            className='desktop-orders-button'
            title="Novo prato"
          />
        </Link>
       :
        <Button
          className='desktop-orders-button'
          icon={PiReceipt}
          title={`Pedidos (${total})`}
        />
       }
        <ButtonText 
          icon={FiLogOut}
        />
      </div>
      {
        !isAdmin &&
        <div className="mobile-orders-button">
          <button>{total}</button>
          <PiReceipt />
        </div>
      }
    </Container>
  )
}
import { useState } from 'react'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container, Menu } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../Footer'

export function Header({isAdmin = false}){
  const [open, setOpen] = useState(false);

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
      <Logo />
      {
        isAdmin && <PiReceipt />
      }
    </Container>
  )
}
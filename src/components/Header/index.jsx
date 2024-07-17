import { useState } from 'react'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container, Menu } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function Header(){
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };
  return(
    <Container>
      <Menu data-openMenu={open}>
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

          <ButtonText
            title='Sair'
            onClick={handleMenuToggle}
          />
        </div>
      </Menu>
      <FiMenu
        className='menu-icon'
        onClick={handleMenuToggle}
      />
      <Logo />
      <PiReceipt />
    </Container>
  )
}
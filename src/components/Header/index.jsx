import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import { FiMenu, FiX, FiSearch, FiLogOut } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container, Menu } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../Footer'
import { Link, useNavigate } from 'react-router-dom'

import { AlertDialog } from '../AlertDialog'

export function Header({isAdmin = true, total, onSearch}){
  const {signOut, user} = useAuth();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  isAdmin = user.role === "admin"

  const navigate = useNavigate();


  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    navigate('/');
    signOut();
  }

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
            onChange={onSearch}
          />

          {
            isAdmin && 
            <ButtonText
              title='Novo prato'
              to='/newdish'
            />
          }
          <ButtonText
            title='Sair'
            onClick={signOut}
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
          onChange={onSearch}
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
          onClick={() => setOpenAlert(true)}
        />

        <AlertDialog 
          isOpen={openAlert}
          message="Tem certeza que deseja sair?"
          onConfirm={handleSignOut}
          onCancel={() => setOpenAlert(false)}
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
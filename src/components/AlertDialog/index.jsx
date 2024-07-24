import { Container } from './styles'
export function AlertDialog({isOpen=false, message, onConfirm, onCancel}) {
  return (
    <Container 
      data-open={isOpen}
    >
      <div className="wrapper">
        <div className="alert-dialog">
          <p>{message}</p>
          <div className="btn-wrapper">
            <button onClick={onCancel}>Cancelar</button>
            <button onClick={onConfirm}>Confirmar</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

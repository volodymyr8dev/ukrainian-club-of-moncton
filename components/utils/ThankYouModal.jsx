import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

export const ThankYouModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <div>
      <Button onClick={ handleOpen }>
        open
      </Button>
      <Modal
        open={ open}
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ style }>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Love you!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for your donation.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
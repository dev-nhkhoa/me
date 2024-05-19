import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TypographyTitle({ text }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="title" sx={{ textAlign: 'left', color: 'primary.text.primary', textDecoration: 'underline', cursor: 'pointer', ':hover': { color: 'primary.text.third' } }}>
        {text}
      </Typography>
      <Typography sx={{ color: 'primary.text.primary' }}>:</Typography>
    </Box>
  )
}

export default TypographyTitle

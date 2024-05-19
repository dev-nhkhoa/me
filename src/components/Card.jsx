import Typography from '@mui/material/Typography'

function Card(props) {
  const { name, color, bgColor } = props
  return (
    <Typography
      sx={{
        px: '8px',
        py: '3px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '8px',
        color: color,
        backgroundColor: bgColor,
        cursor: 'pointer',
        fontSize: '12px'
      }}
    >
      {name}
    </Typography>
  )
}

export default Card

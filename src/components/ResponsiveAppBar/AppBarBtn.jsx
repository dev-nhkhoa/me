import Box from '@mui/material/Box'

function AppBarBtn(props) {
  const { children, onClick, ariaLabel, ariaControls, ariaHaspopup, color, borderColor, backgroundColor } = props

  return (
    <Box
      sx={{ width: '32px', height: '32px', border: '1px solid', borderColor: borderColor, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', color: color, backgroundColor: backgroundColor || '' }}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-haspopup={ariaHaspopup}
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

export default AppBarBtn

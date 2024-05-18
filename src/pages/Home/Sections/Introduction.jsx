import { Box, Typography } from '@mui/material'
import { SETTING } from '~/settings'
import TypographyTitle from '~/components/TypographyTitle'
import { INFO } from '~/components/Infomation'

const Introduction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TypographyTitle text="INTRODUCE" />
      <Typography
        variant="desc"
        sx={{
          textAlign: 'justify',
          pl: SETTING.paddingLeft,
          textIndent: SETTING.textIndent,
          color: 'primary.text.secondary'
        }}
      >
        {INFO.introduction}
      </Typography>
    </Box>
  )
}

export default Introduction

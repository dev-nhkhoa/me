import { Box } from '@mui/material'
import { SETTING } from '~/settings'
import Card from '~/components/Card'
import TypographyTitle from '~/components/TypographyTitle'
import { INFO } from '~/components/Infomation'

const WhatILove = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TypographyTitle text="INTERESTED" />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          gap: '6px',
          pl: SETTING.paddingLeft
        }}
      >
        {INFO.love.map((l, i) => {
          return <Card key={i} name={l} color="primary.button.text" bgColor="primary.button.bg" />
        })}
      </Box>
    </Box>
  )
}

export default WhatILove

import Box from '@mui/material/Box'
import Card from '~/components/Card'

import { SETTING } from '~/settings'
import { PROFILE_CONFIG } from '~/config/profile.jsx'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function WhatILove() {
  const { interests } = PROFILE_CONFIG

  return (
    <BackgroundSection>
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
        {interests.map((interest, i) => {
          return <Card key={i} name={interest} color="primary.button.text" bgColor="primary.button.bg" />
        })}
      </Box>
    </BackgroundSection>
  )
}

export default WhatILove

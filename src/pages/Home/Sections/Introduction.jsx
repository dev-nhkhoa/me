import Typography from '@mui/material/Typography'

import { SETTING } from '~/settings'
import { PROFILE_CONFIG } from '~/config/profile.jsx'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function Introduction() {
  const { introduction } = PROFILE_CONFIG

  return (
    <BackgroundSection>
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
        {introduction}
      </Typography>
    </BackgroundSection>
  )
}

export default Introduction

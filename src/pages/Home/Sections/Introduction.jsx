import Typography from '@mui/material/Typography'

import { SETTING } from '~/settings'
import { INFO } from '~/components/Infomation'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function Introduction() {
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
        {INFO.introduction}
      </Typography>
    </BackgroundSection>
  )
}

export default Introduction

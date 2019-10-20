import * as React from 'react'
import { globalStyle } from './styles/global'
import { Global, css } from '@emotion/core'

import 'modern-normalize/modern-normalize.css'

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <div
        css={css`
          color: blue;
        `}
      >
        hello
      </div>
    </>
  )
}

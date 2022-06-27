import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakPoint = keyof DefaultBreakpoints

export type MediaMatchPops = {
  lessThan?: breakPoint
  greaterThan?: breakPoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakPoint) => css`
    ${media.lessThan(size)`display: block`}
  `,

  greaterThan: (size: breakPoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export const MediaMatch = styled.div<MediaMatchPops>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)};
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)};
  `}
`

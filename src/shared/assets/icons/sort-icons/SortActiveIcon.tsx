import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'6'}
    viewBox={'0 0 8 6'}
    width={'8'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path d={'M4 6L0.535898 1.5L7.4641 1.5L4 6Z'} fill={'white'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SortActiveIcon = memo(ForwardRef)

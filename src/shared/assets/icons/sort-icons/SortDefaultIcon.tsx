import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'12'}
    viewBox={'0 0 8 12'}
    width={'8'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path d={'M4 0L7.4641 4.5H0.535898L4 0Z'} fill={'#4C4C4C'} />
    <path d={'M4 12L0.535898 7.5L7.4641 7.5L4 12Z'} fill={'#4C4C4C'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SortDefaultIcon = memo(ForwardRef)

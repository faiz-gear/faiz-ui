import { forwardRef } from '@faiz-ui/system'
import { UseRippleProps, useRipple, TRipple, UseRippleReturn } from './use-ripple'
import { animated, useSpring } from '@react-spring/web'

export interface RippleProps extends UseRippleProps {}

const RippleItem = (props: { ripple: TRipple; onClear: UseRippleReturn['onClear'] }) => {
  const { ripple, onClear } = props
  const rippleSprings = useSpring({
    from: { opacity: 0.5, transform: 'scale(0)' },
    to: { opacity: 0, transform: 'scale(1)' },
    onRest: () => onClear(ripple.key)
  })
  return (
    <animated.span
      key={ripple.key}
      style={{
        position: 'absolute',
        backgroundColor: '#333',
        borderRadius: '100%',
        transformOrigin: 'center',
        pointerEvents: 'none',
        zIndex: 10,
        cursor: 'pointer',
        width: ripple.size + 'px',
        height: ripple.size + 'px',
        left: ripple.x + 'px',
        top: ripple.y + 'px',
        ...rippleSprings
      }}
    />
  )
}

const Ripple = forwardRef<'div', RippleProps>((props, ref) => {
  const { ripples, onClear } = useRipple({ ...props, ref })

  return (
    <>
      {ripples.map((ripple) => (
        <RippleItem key={ripple.key} ripple={ripple} onClear={onClear} />
      ))}
    </>
  )
})

Ripple.displayName = 'Ripple'

export default Ripple

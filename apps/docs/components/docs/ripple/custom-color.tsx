'use client'
import { useRef } from "react"
import { Ripple } from "@faiz-ui/react"

export default function CustomColor() {
	// @ts-ignore
	const rippleRef = useRef<any>(null)
	// @ts-ignore
  const handleClick = (e: any) => {
    rippleRef.current?.addRipple?.(e)
  }
  return (
    <div
      className="relative font-semibold text-white py-1 px-3 rounded-xl active:opacity-80 border-solid border-2 border-blue-500 inline-flex overflow-hidden"
      onClick={handleClick}
    >
      button
      <Ripple ref={rippleRef} color="#227eff"/>
    </div>
  )
}

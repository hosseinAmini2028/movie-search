"use client"
export default function ClientOnlyComponent({children} : {children : React.ReactNode}){
    return typeof window === "undefined" || typeof document==="undefined" ? null : children
}
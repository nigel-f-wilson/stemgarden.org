import { useState, useEffect } from 'react'

// May want to change these hooks to use the Client Height property of the root <html> element.  
// I think that the window.innerHeight currently used is counting height I don't actually want. 
// document.documentElement.clientWidth & document.documentElement.clientHeight
export default function useScreenHeight() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleScreenSizeChange = () => setScreenHeight(window.innerHeight)
        window.addEventListener('resize', handleScreenSizeChange)
        return () => window.removeEventListener('resize', handleScreenSizeChange)
    }, []);

    return screenHeight;
}
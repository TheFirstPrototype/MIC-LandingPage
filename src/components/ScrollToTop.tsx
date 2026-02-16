// src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scrolls to the top instantly on route change
        window.scrollTo(0, 0);

        // For a smooth, animated scroll, use:
        // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]); // This effect runs whenever the pathname changes

    return null; // This component doesn't render anything
}
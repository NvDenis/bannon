import { useEffect, useState } from 'react';

function useOnScreen(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
        observer.observe(ref.current);
        // Clean up
        return () => {
            observer.disconnect();
        };
    }, []);

    return isIntersecting;
}

export default useOnScreen
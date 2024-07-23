import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation.tsx";
import { useMediaQuery } from 'react-responsive';

const Menu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: isMobile ? `circle(${height * 2 + 200}px at calc(100% - 80px) 40px)` : `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: isMobile ? "circle(24px at calc(100% - 80px) 44px)" : "circle(30px at calc(100% - 80px) 90px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            style={{
                position: 'absolute',
            }}
        >
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default Menu;

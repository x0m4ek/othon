import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Button from "../Button/Button.tsx";

const variants1 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i} key={i} name={i} />
        ))}
        <motion.div className='btn_contact' variants={variants1}>
            <p>Contact Us</p>
        </motion.div>
    </motion.ul>
);

const itemIds = ['Home', 'About', 'Services', 'Careers'];

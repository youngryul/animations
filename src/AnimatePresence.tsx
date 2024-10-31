import styled from "styled-components";
import {AnimatePresence, motion, useMotionValue, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(135deg,#e09,#d0e);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;



const Circle = styled(motion.div)`
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    height: 70px;
    place-self: center;
    width: 70px;
    border-radius: 35px;
`;

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255,255,255,0.4);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const boxVariants = {
    initial: {opacity:0, scale: 0},
    visible: {opacity:1, scale: 1, rotateZ: 360},
    leaving: {opacity:0, y: 20, scale:0}
};



const svg = {
    start: { pathLength: 0, fill: "rgba(255,255,255,0)"},
    end: { pathLength: 1, fill: "rgba(255,255,255,1)"}
}

function App() {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev)
    return (
        <Wrapper>
            <button onClick={toggleShowing}>Click</button>
            <AnimatePresence>{showing ?
                <Box
                    variants={boxVariants}
                    initial="initial"
                    animate="visible"
                    exit="leaving"
                />: null}</AnimatePresence>
        </Wrapper>
    );
}

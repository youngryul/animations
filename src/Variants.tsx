import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255,255,255,0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const myVars = {
//     start: { scale: 0 },
//     end : {scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5}}
// }

const Circle = styled(motion.div)`
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    height: 70px;
    place-self: center;
    width: 70px;
    border-radius: 35px;
`;

const boxVariants = {
    start: {
        opacity: 0,
        scale: 0,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.2,  // 따로 계산하지 않고 차례로 계산해줌
        },
    },
};

// const circleVariants = {
//     start: {
//         scale: 0
//     },
//     end: {
//         scale: 2,
//         transition: {
//             type: "spring",
//             bounce: 0.8,
//             duration: 5
//         }
//     }
// }

const circleVariants = {
    start: {
        opacity: 0,
        y: 10
    },
    end: {
        opacity: 1,
        y: 0
        // transition: {
        //    delay: 0.5
        // }
    }
}

function App() {
    return (
        <Wrapper>
            {/*<Box transition={{duration: 3}} animate={{borderRadius: "100px"}}/>*/}
            {/*  <Box variants={myVars} initial="start" animate="end"/>*/}
            <Box variants={boxVariants} initial="start" animate="end">
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
            </Box>
        </Wrapper>
    );
}



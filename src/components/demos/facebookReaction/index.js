import React, { useState } from "react";
import { AnimatedBlock, useAnimatedValue, interpolate } from "react-uicomp";
import {
  AiFillLike,
  AiFillHeart,
  FaLaughSquint,
  FaSadCry,
  FaAngry,
} from "react-icons/all";

const AnimatedReaction = () => {
  const [reactionVisible, setReactionVisible] = useState(false);
  const reactionFive = useAnimatedValue(0, {
    animationType: "elastic",
  });
  const reactionFour = useAnimatedValue(0, {
    animationType: "elastic",
    listener: function (value) {
      reactionFive.value = value;
    },
  });
  const reactionThree = useAnimatedValue(0, {
    animationType: "elastic",
    listener: function (value) {
      reactionFour.value = value;
    },
  });
  const reactionTwo = useAnimatedValue(0, {
    animationType: "elastic",
    listener: function (value) {
      reactionThree.value = value;
    },
  });
  const reactionOne = useAnimatedValue(0, {
    animationType: "elastic",
    listener: function (value) {
      reactionTwo.value = value;
    },
  });
  const containerOpacity = useAnimatedValue(reactionVisible, {
    animationType: "elastic",
    listener: function (value) {
      reactionOne.value = value;
    },
  });

  return (
    <div
      style={styles.container}
      onMouseLeave={() => setReactionVisible(false)}
    >
      <div style={styles.reaction}>
        <div
          onMouseEnter={() => setReactionVisible(true)}
          style={styles.button}
        >
          Hover Me
        </div>

        <AnimatedBlock
          style={{
            ...styles.reactionContainer,
            tranformOrigin: "0% 100%",
            opacity: containerOpacity.value,
          }}
        >
          <AnimatedBlock
            style={{
              ...styles.reactionItem,
              backgroundColor: "#31A2FC",
              opacity: reactionOne.value,
              transform: interpolate(reactionOne.value, {
                inputRange: [0, 1],
                outputRange: ["translateY(20px)", "translateY(0px)"],
              }),
            }}
          >
            <AiFillLike />
          </AnimatedBlock>
          <AnimatedBlock
            style={{
              ...styles.reactionItem,
              backgroundColor: "#F4405B",
              opacity: reactionTwo.value,
              transform: interpolate(reactionTwo.value, {
                inputRange: [0, 1],
                outputRange: ["translateY(20px)", "translateY(0px)"],
              }),
            }}
          >
            <AiFillHeart />
          </AnimatedBlock>
          <AnimatedBlock
            style={{
              ...styles.reactionItem,
              backgroundColor: "#FCD55E",
              opacity: reactionThree.value,
              transform: interpolate(reactionThree.value, {
                inputRange: [0, 1],
                outputRange: ["translateY(20px)", "translateY(0px)"],
              }),
            }}
          >
            <FaLaughSquint />
          </AnimatedBlock>
          <AnimatedBlock
            style={{
              ...styles.reactionItem,
              backgroundColor: "#FCD55E",
              opacity: reactionFour.value,
              transform: interpolate(reactionFour.value, {
                inputRange: [0, 1],
                outputRange: ["translateY(20px)", "translateY(0px)"],
              }),
            }}
          >
            <FaSadCry />
          </AnimatedBlock>
          <AnimatedBlock
            style={{
              ...styles.reactionItem,
              backgroundColor: "#EB6012",
              opacity: reactionFive.value,
              transform: interpolate(reactionFive.value, {
                inputRange: [0, 1],
                outputRange: ["translateY(20px)", "translateY(0px)"],
              }),
            }}
          >
            <FaAngry />
          </AnimatedBlock>
        </AnimatedBlock>
      </div>
    </div>
  );
};

export default AnimatedReaction;

const styles = {
  container: {
    margin: "30px 0px",
    display: "inline-block",
  },
  button: {
    outline: "none",
    border: "1px solid #e1e1e1",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 4,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.12)",
    width: 120,
    textAlign: "center",
    fontFamily: "Arial",
    display: "block",
    cursor: "pointer",
    fontSize: 18,
    margin: "auto",
    position: "relative",
  },
  reaction: {
    width: 130,
    position: "relative",
  },
  reactionContainer: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    bottom: "120%",
    left: -30,
  },
  reactionItem: {
    fontSize: 26,
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    margin: "0px 10px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.12)",
  },
};

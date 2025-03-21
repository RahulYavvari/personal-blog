"use client";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
    texts: string[];
    speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting && charIndex < texts[textIndex].length) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, speed);
        } else if (!isDeleting) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            }, speed / 2);
        } else {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, textIndex, texts, speed, isDeleting]);

    return <span>{displayedText}|</span>;
};


export default Typewriter;
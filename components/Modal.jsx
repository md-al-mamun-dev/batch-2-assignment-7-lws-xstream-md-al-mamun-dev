"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";

export default function Modal({ children }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10 backdrop-blur-sm"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="absolute top-[40px] left-1/2 -translate-x-1/2  w-max bg-color-bg rounded-lg drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]"
            >
              
                {children}
                <button onClick={onDismiss} className="text-white h-6 w-6 absolute top-0 left-[calc(100%+16px)]">
                  <Image src="/assets/x.svg" alt="" fill />
                </button>
            </div>
        </div>
    );
}
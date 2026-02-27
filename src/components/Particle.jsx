import {useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle({darkMode}) {
  const [init, setInit] = useState(false);
  const [bgColor, setBgColor] = useState(darkMode ? "#000033" : "#e0f7fa");
  const [enableParticles, setEnableParticles] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setEnableParticles(!mediaQuery.matches);
    };
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (!enableParticles) return;
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [enableParticles]);

  // Khi darkMode thay đổi, cập nhật màu nền
  useEffect(() => {
    setBgColor(darkMode ? "#000033" : "#e0f7fa");
  }, [darkMode]);


  if (!enableParticles) {
    return null;
  }

  return (
      <>
        {init && (
            <Particles
                id="tsparticles"
                style={{ zIndex: -1 }}
                options={{
                  background: {
                    color: {
                      value: bgColor,
                    },
                  },
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      // Khi di chuột vào, hạt sẽ bị đẩy ra.
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 150,
                        duration: 0.3,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: ["#00bcd4"],
                    },
                    links: {
                      color: "#00bcd4",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 1.2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 160,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,
                }}
            />
        )}
      </>
  );
}

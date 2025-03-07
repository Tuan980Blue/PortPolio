import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);
  const [bgColor, setBgColor] = useState("#e0f7fa"); // Màu nền mặc định

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Lắng nghe kích thước màn hình để thay đổi màu nền
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgColor("#000033");
      } else {
        setBgColor("#000033");
      }
    };

    handleResize(); // Gọi ngay khi component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


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
                        distance: 200,
                        duration: 0.4,
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

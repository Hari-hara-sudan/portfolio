
export const particlesConfig = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 3,
      },
      grab: {
        distance: 200,
        links: {
          opacity: 0.8,
        },
      },
    },
  },
  particles: {
    color: {
      value: ["#8b5cf6", "#06b6d4", "#f59e0b", "#ef4444", "#10b981", "#f97316", "#ec4899"],
    },
    links: {
      color: {
        value: ["#8b5cf6", "#06b6d4", "#f59e0b"],
      },
      distance: 200,
      enable: true,
      opacity: 0.4,
      width: 1.5,
      triangles: {
        enable: true,
        opacity: 0.1,
      },
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: {
        default: "out" as const,
      },
      random: true,
      speed: {
        min: 0.5,
        max: 2,
      },
      straight: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 600,
      },
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 120,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.8,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
      },
    },
    shape: {
      type: ["circle", "triangle", "polygon"],
      options: {
        polygon: {
          sides: 6,
        },
      },
    },
    size: {
      value: {
        min: 1,
        max: 4,
      },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
      },
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  detectRetina: true,
  smooth: true,
};

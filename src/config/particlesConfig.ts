export const particlesConfig = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
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
      value: ["#8b5cf6", "#06b6d4", "#f59e0b"],
    },
    links: {
      color: {
        value: ["#8b5cf6", "#06b6d4"],
      },
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
      triangles: {
        enable: false,
        opacity: 0.1,
      },
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: {
        default: "out" as const,
      },
      random: false,
      speed: {
        min: 0.3,
        max: 1,
      },
      straight: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
    },
    opacity: {
      value: {
        min: 0.2,
        max: 0.6,
      },
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
      },
    },
    shape: {
      type: ["circle"],
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        enable: false,
        speed: 2,
        minimumValue: 0.5,
      },
    },
    twinkle: {
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  detectRetina: false,
  smooth: true,
};

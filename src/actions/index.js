export const menuOpen = () => {
  return {
    type: "TOGGLE_MENU",
  };
};

export const desRotarKnob = () => {
  return {
    type: "DESROTAR_KNOB",
  };
};

export const rotarKnob = () => {
  return {
    type: "ROTAR_KNOB",
  };
};

export const chooseSite = (thePosition) => {
  if (thePosition > 0 && thePosition < 14) {
    return {
      type: "MIXMASTER",
    };
  }

  if (thePosition > 20 && thePosition < 28) {
    return {
      type: "DJ",
    };
  }
  if (thePosition > 36 && thePosition < 46) {
    return {
      type: "MYMUSIC",
    };
  }
  if (thePosition > 52 && thePosition < 66) {
    return {
      type: "COMPOSITIONS",
    };
  }
  if (thePosition > 68 && thePosition < 82) {
    return {
      type: "SDESIGN",
    };
  }
  if (thePosition > 84 && thePosition < 96) {
    return {
      type: "ABOUTME",
    };
  }
  return {
    type: "",
  };
};

import React, { useEffect, useRef } from 'react';

const TypedText = () => {
  const textArray = ['RPA Tech Lead', 'Web Developer', '2D/3D Designer', 'Video Editor'];
  const elementRef = useRef(null);

  useEffect(() => {
    const txtType = {
      toRotate: textArray,
      el: elementRef.current,
      loopNum: 0,
      period: 2000,
      txt: '',
      isDeleting: false,
    };

    const tick = function () {
      const i = txtType.loopNum % txtType.toRotate.length;
      const fullTxt = txtType.toRotate[i];

      if (txtType.isDeleting) {
        txtType.txt = fullTxt.substring(0, txtType.txt.length - 1);
      } else {
        txtType.txt = fullTxt.substring(0, txtType.txt.length + 1);
      }

      if (elementRef.current) {
        elementRef.current.innerHTML = `<span class="wrap">${txtType.txt}</span>`;
      }

      let delta = 200 - Math.random() * 100;

      if (txtType.isDeleting) {
        delta /= 2;
      }

      if (!txtType.isDeleting && txtType.txt === fullTxt) {
        delta = txtType.period;
        txtType.isDeleting = true;
      } else if (txtType.isDeleting && txtType.txt === '') {
        txtType.isDeleting = false;
        txtType.loopNum++;
        delta = 500;
      }

      txtType.timeoutId = setTimeout(() => {
        tick();
      }, delta);
    };

    tick();
    return () => {
      clearTimeout(txtType.timeoutId);
    };
  }, []);

  return (
    <span className="typewrite" data-period="2000">
      <span className="wrap text-blue-500" ref={elementRef}></span>
    </span>
  );
};

export default TypedText;

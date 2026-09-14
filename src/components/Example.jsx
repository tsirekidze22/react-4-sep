import { useRef, useState } from "react";

const Example = () => {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  const handleMeasure = () => {
    console.log(boxRef.current.offsetWidth, boxRef.current.offsetWidth > 500);
    setWidth(boxRef.current.offsetWidth);
  };

  return (
    <div>
      <div ref={boxRef} className="max-w-[600px] border-5 border-red-500 p-5">
        Hello
      </div>

      {width > 500 ? <div>Some section</div> : null}
      <button onClick={handleMeasure}>Get width</button>
    </div>
  );
};

export default Example;

import { useEffect, useRef, useState } from "react";
import jsImg from "/images/js.png";
import pyImg from "/images/py.png";
import reactImg from "/images/react.png";
import mysqlImg from "/images/mysql.png";
import htmlImg from "/images/html.png";
import cssImg from "/images/css.png";

// Parámetros
const GRAVITY = 0.3;
const RADIUS = 25;
const AREA_WIDTH = 350;
const AREA_HEIGHT = 400;

const getRandomVelocity = () => ({
  vx: (Math.random() - 0.5) * 20,
  vy: -Math.random() * 15 - 5,
});

const DragZone = () => {
  const [items, setItems] = useState([
    { id: "img1", x: 30, y: 0, vx: 0, vy: 0, img: jsImg },
    { id: "img2", x: 120, y: 0, vx: 0, vy: 0, img: pyImg },
    { id: "img3", x: 200, y: 0, vx: 0, vy: 0, img: reactImg },
    { id: "img4", x: 200, y: 0, vx: 0, vy: 0, img: mysqlImg },
    { id: "img5", x: 200, y: 0, vx: 0, vy: 0, img: htmlImg },
    { id: "img6", x: 200, y: 0, vx: 0, vy: 0, img: cssImg },
  ]);

  const requestRef = useRef();

  const updatePositions = () => {
    setItems((prev) =>
      prev.map((item) => {
        let { x, y, vx, vy } = item;

        vy += GRAVITY;
        x += vx;
        y += vy;

        // Colisiones
        if (x < 0) {
          x = 0;
          vx *= -0.6;
        }

        // COLISIÓN DERECHA AJUSTADA
        if (x + RADIUS * 2 > AREA_WIDTH) {
          x = AREA_WIDTH - RADIUS * 2;
          vx *= -0.6;
        }

        // SUELO
        if (y + RADIUS * 2 > AREA_HEIGHT) {
          y = AREA_HEIGHT - RADIUS * 2;
          vy *= -0.6;
          if (Math.abs(vy) < 1) vy = 0;
        }

        return { ...item, x, y, vx, vy };
      })
    );

    requestRef.current = requestAnimationFrame(updatePositions);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleExplode = () => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        ...getRandomVelocity(),
      }))
    );
  };

  return (
    <div className="flex flex-col items-center mt-16"> {/* margen superior real */}

      {/* Contenedor visible */}
      <div
        className="relative border-2 border-black rounded-lg overflow-hidden bg-white box-border"
        style={{ width: `${AREA_WIDTH}px`, height: `${AREA_HEIGHT}px` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute rounded-full shadow-lg overflow-hidden"
            style={{
              width: `${RADIUS * 2}px`,
              height: `${RADIUS * 2}px`,
              top: item.y,
              left: item.x,
            }}
          >
            <img
            src={item.img}
            alt={item.id}
            className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Botón explosión */}
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        onClick={handleExplode}
      >
        Explosión
      </button>
    </div>
  );
};

export default DragZone;

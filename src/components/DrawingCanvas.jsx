// src/components/DrawingCanvas.jsx
import { useRef, useState, useEffect } from "react";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [strokes, setStrokes] = useState([]);
  const [currentStroke, setCurrentStroke] = useState([]);
  
  // Estados para personalización
  const [currentColor, setCurrentColor] = useState("#333333");
  const [vibrationLevel, setVibrationLevel] = useState(1); // 1: suave, 2: medio, 3: intenso
  
  // Colores disponibles
  const colors = [
    { value: "#333333", name: "Negro" },
    { value: "#e63946", name: "Rojo" },
    { value: "#4361ee", name: "Azul" },
    { value: "#2a9d8f", name: "Verde" },
    { value: "#f4a261", name: "Naranja" },
    { value: "#9d4edd", name: "Púrpura" }
  ];
  
  // Niveles de vibración
  const vibrationLevels = [
    { value: 1, name: "Suave" },
    { value: 2, name: "Medio" },
    { value: 3, name: "Intenso" }
  ];
  
  // Configurar el canvas cuando el componente se monta
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Configurar el tamaño del canvas
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Obtener el contexto de dibujo
      const ctx = canvas.getContext('2d');
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = 3;
      ctx.strokeStyle = currentColor;
      setContext(ctx);
    }
    
    // Función para manejar cambios de tamaño
    const handleResize = () => {
      if (canvas) {
        // Guardar el dibujo actual
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCtx.drawImage(canvas, 0, 0);
        
        // Redimensionar el canvas
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // Restaurar el contexto y el dibujo
        const ctx = canvas.getContext('2d');
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = currentColor;
        ctx.drawImage(tempCanvas, 0, 0);
        setContext(ctx);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentColor]);
  
  // Iniciar la animación cuando hay trazos
  useEffect(() => {
    if (strokes.length > 0 && !animationRef.current) {
      startAnimation();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [strokes, vibrationLevel]);
  
  // Función para iniciar la animación de vibración
  const startAnimation = () => {
    const animate = () => {
      if (canvasRef.current && context) {
        // Limpiar el canvas
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Dibujar cada trazo con vibración según el nivel seleccionado
        strokes.forEach(stroke => {
          if (!stroke || !stroke.points || stroke.points.length < 2) return;
          
          // Aplicar el color del trazo
          context.strokeStyle = stroke.color || "#333333";
          
          context.beginPath();
          
          // Calcular la intensidad de vibración según el nivel
          const vibrationIntensity = stroke.vibrationLevel || 1;
          const maxOffset = vibrationIntensity * 1.5; // 1.5px, 3px, o 4.5px de vibración máxima
          
          // Mover al primer punto
          const firstPoint = stroke.points[0];
          context.moveTo(
            firstPoint.x + (Math.random() * maxOffset * 2 - maxOffset), 
            firstPoint.y + (Math.random() * maxOffset * 2 - maxOffset)
          );
          
          // Dibujar líneas a los puntos restantes con vibración
          for (let i = 1; i < stroke.points.length; i++) {
            const point = stroke.points[i];
            context.lineTo(
              point.x + (Math.random() * maxOffset * 2 - maxOffset), 
              point.y + (Math.random() * maxOffset * 2 - maxOffset)
            );
          }
          
          context.stroke();
        });
      }
      
      // Continuar la animación
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
  };
  
  // Funciones para manejar el dibujo
  const getCanvasPoint = (clientX, clientY) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };
  
  const startDrawing = (clientX, clientY) => {
    if (!context) return;
    
    const point = getCanvasPoint(clientX, clientY);
    setCurrentStroke([point]);
    setIsDrawing(true);
    
    // Actualizar el color del contexto
    context.strokeStyle = currentColor;
  };
  
  const continueDrawing = (clientX, clientY) => {
    if (!isDrawing || !context) return;
    
    const point = getCanvasPoint(clientX, clientY);
    
    // Añadir el nuevo punto al trazo actual
    setCurrentStroke(prev => [...prev, point]);
    
    // Dibujar el trazo actual para feedback visual inmediato
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Redibujar todos los trazos anteriores
    strokes.forEach(stroke => {
      if (!stroke || !stroke.points || stroke.points.length < 2) return;
      
      context.strokeStyle = stroke.color;
      context.beginPath();
      context.moveTo(stroke.points[0].x, stroke.points[0].y);
      
      for (let i = 1; i < stroke.points.length; i++) {
        context.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      
      context.stroke();
    });
    
    // Dibujar el trazo actual
    context.strokeStyle = currentColor;
    context.beginPath();
    context.moveTo(currentStroke[0].x, currentStroke[0].y);
    
    for (let i = 1; i < currentStroke.length; i++) {
      context.lineTo(currentStroke[i].x, currentStroke[i].y);
    }
    
    context.stroke();
  };
  
  const finishDrawing = () => {
    if (isDrawing && currentStroke.length > 1) {
      // Añadir el trazo actual a la lista de trazos con sus propiedades
      const newStroke = {
        points: [...currentStroke],
        color: currentColor,
        vibrationLevel: vibrationLevel
      };
      
      setStrokes(prev => [...prev, newStroke]);
      setCurrentStroke([]);
    }
    
    setIsDrawing(false);
  };
  
  const clearCanvas = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      setStrokes([]);
      setCurrentStroke([]);
      
      // Detener la animación si está en curso
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    }
  };
  
  // Event handlers para mouse
  const handleMouseDown = (e) => {
    startDrawing(e.clientX, e.clientY);
  };
  
  const handleMouseMove = (e) => {
    continueDrawing(e.clientX, e.clientY);
  };
  
  const handleMouseUp = () => {
    finishDrawing();
  };
  
  const handleMouseLeave = () => {
    finishDrawing();
  };
  
  // Configurar eventos táctiles una vez que el componente está montado
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Handlers para eventos táctiles
    const touchStartHandler = (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        startDrawing(touch.clientX, touch.clientY);
      }
    };
    
    const touchMoveHandler = (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        continueDrawing(touch.clientX, touch.clientY);
      }
    };
    
    const touchEndHandler = () => {
      finishDrawing();
    };
    
    // Agregar listeners al canvas
    canvas.addEventListener('touchstart', touchStartHandler);
    canvas.addEventListener('touchmove', touchMoveHandler);
    canvas.addEventListener('touchend', touchEndHandler);
    
    // Prevenir el scroll en el contenedor cuando se toca el canvas
    const container = containerRef.current;
    if (container) {
      const preventScroll = (e) => {
        if (isDrawing) {
          e.preventDefault();
        }
      };
      
      container.addEventListener('touchmove', preventScroll, { passive: false });
      
      return () => {
        canvas.removeEventListener('touchstart', touchStartHandler);
        canvas.removeEventListener('touchmove', touchMoveHandler);
        canvas.removeEventListener('touchend', touchEndHandler);
        container.removeEventListener('touchmove', preventScroll);
      };
    }
    
    return () => {
      canvas.removeEventListener('touchstart', touchStartHandler);
      canvas.removeEventListener('touchmove', touchMoveHandler);
      canvas.removeEventListener('touchend', touchEndHandler);
    };
  }, [isDrawing, context, currentColor, vibrationLevel]); // Dependencias actualizadas
  
  return (
    <div 
      ref={containerRef}
      className="border-2 border-gray-300 rounded-lg p-2 bg-white shadow-md w-full flex flex-col"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-700">Dibujo vibrante</h3>
        <button 
          onClick={clearCanvas}
          className="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 transition"
        >
          Limpiar
        </button>
      </div>
      
      {/* Canvas de dibujo */}
      <canvas
        ref={canvasRef}
        className="w-full h-48 border border-gray-200 rounded cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        // Los eventos táctiles se manejan con addEventListener
      />
      
      {/* Controles de personalización */}
      <div className="mt-3 flex flex-col space-y-2">
        {/* Selector de colores */}
        <div className="flex items-center">
          <span className="text-xs font-medium text-gray-700 mr-2 w-16">Color:</span>
          <div className="flex space-x-2 flex-wrap">
            {colors.map(color => (
              <button
                key={color.value}
                className={`w-6 h-6 rounded-full border ${currentColor === color.value ? 'border-black border-2' : 'border-gray-300'}`}
                style={{ backgroundColor: color.value }}
                title={color.name}
                onClick={() => setCurrentColor(color.value)}
                aria-label={`Color ${color.name}`}
              />
            ))}
          </div>
        </div>
        
        {/* Selector de intensidad de vibración */}
        <div className="flex items-center">
          <span className="text-xs font-medium text-gray-700 mr-2 w-16">Vibración:</span>
          <div className="flex space-x-2">
            {vibrationLevels.map(level => (
              <button
                key={level.value}
                className={`px-2 py-1 text-xs rounded ${vibrationLevel === level.value ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setVibrationLevel(level.value)}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingCanvas;
import { useRef, useEffect } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradient = context.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.2, "yellow");
    gradient.addColorStop(0.3, "green");
    gradient.addColorStop(0.4, "cyan");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(0.6, "magenta");

    class Symbol {
      x: number;
      y: number;
      fontSize: number;
      characters: string;
      text: string;
      canvasHeight: number;
      constructor(
        x: number,
        y: number,
        fontSize: number,
        canvasHeight: number
      ) {
        this.characters =
          "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = "";
        this.canvasHeight = canvasHeight;
      }
      draw(context: CanvasRenderingContext2D) {
        this.text = this.characters.charAt(
          Math.floor(Math.random() * this.characters.length)
        );
        context.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        );
        if (
          this.y * this.fontSize > this.canvasHeight &&
          Math.random() > 0.98
        ) {
          this.y = 0;
        } else {
          this.y += 1;
        }
      }
    }
    class Effect {
      canvasHeight: number;
      canvasWidth: number;
      fontSize: number;
      columns: number;
      symbols: Symbol[];
      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.fontSize = 25;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
      }
      initialize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(
            i,
            0,
            this.fontSize,
            canvas?.height || 0
          );
        }
      }
      resize(width: number, height: number) {
        this.canvasHeight = height;
        this.canvasWidth = width;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
      }
    }
    const effect = new Effect(canvas.width, canvas.height);
    let lastTime = 0;
    const fps = 15;
    const nextFrame = 1000 / fps;
    let timer = 0;

    function animate(timestamp: number) {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      if (timer > nextFrame) {
        context.fillStyle = "rgba(255,255,255,0.06)";
        context.textAlign = "center";
        context.fillRect(0, 0, canvas?.width || 0, canvas?.height || 0);
        context.fillStyle = "#000000";
        context.font = effect.fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(context));
        timer = 0;
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animate);
    }

    animate(0);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
    });
  });

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default CanvasAnimation;

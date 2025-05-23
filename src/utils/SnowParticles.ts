export const SnowParticles = () => {

    interface Snowflake {
        x: number;
        y: number;
        radius: number;
        color: string;
        speed: number;
        sway: number;
    }

    const NUMBER_OF_SNOWFLAKES = 200;
    const MAX_SNOWFLAKE_SIZE = 5;
    const MAX_SNOWFLAKE_SPEED = 2;
    
    const snowflakes: Snowflake[] = [];


    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.pointerEvents = 'none';
    canvas.style.top = '0px';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

    
    if (!ctx) {
        throw new Error("No se pudo obtener el contexto de dibujo del canvas.");
    }

    const getRandomPastelColor = (): string => {
        const hue = Math.floor(Math.random() * 360); // Cualquier color en el círculo cromático
        return `hsl(${hue}, 100%, 80%)`;
    };

    const createSnowflake = (): Snowflake => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -100,
        radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
        color: getRandomPastelColor(),
        speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
        sway: Math.random() - 0.5
    });

    const drawSnowflake = (snowflake: Snowflake): void => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = snowflake.color;
        ctx.fill();
        ctx.closePath();
    };

    const updateSnowflake = (snowflake: Snowflake, buttonRect: DOMRect | null): void => {
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.sway;

        // Si toca el suelo, invertir velocidad para que suba
        if (snowflake.y >= canvas.height - snowflake.radius) {
            snowflake.y = canvas.height - snowflake.radius; // Evitar que traspase el suelo

        }

        // Si la velocidad es muy baja, regenerar la bolita arriba
        if (Math.abs(snowflake.speed) < 0.5) {
            Object.assign(snowflake, createSnowflake());
            snowflake.y = 0; // Volver a la parte superior
            snowflake.sway = 0;
        }

        if (buttonRect) {
            const bottomY = snowflake.y + snowflake.radius;
            
            const isColliding =
              snowflake.x > buttonRect.left &&
              snowflake.x < buttonRect.right &&
              bottomY > buttonRect.top &&
              snowflake.y < buttonRect.bottom;
          
            if (isColliding) {
              snowflake.y = buttonRect.top - snowflake.radius;
              snowflake.y -= 0;
              return;
            }
          }
          
    };

    let animationId: number;

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const buttonElement = document.getElementById("magic-button");
        let buttonRect: DOMRect | null = null;

        if (buttonElement) {
            buttonRect = buttonElement.getBoundingClientRect();
        }

        snowflakes.forEach(snowflake => {
            updateSnowflake(snowflake, buttonRect);
            drawSnowflake(snowflake);
        });
        animationId = requestAnimationFrame(animate);
    };

    for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
        snowflakes.push(createSnowflake());
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('scroll', () => {
        canvas.style.top = `${window.scrollY}px`;
    });

    let intervalId: ReturnType<typeof setInterval> | null = null;

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            // Limpiar las pelotitas acumuladas
            snowflakes.length = 0;
    
            // Agregar nuevas pelotitas lentamente
            let count = 0;
            const maxFlakes = 30;
            const interval = setInterval(() => {
                if (count >= maxFlakes) {
                    clearInterval(interval);
                    return;
                }
                snowflakes.push(createSnowflake());
                count++;
            }, 150);
        }
    });
    
    function stopSnowballs(): void {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");

    if (startButton && stopButton) {
        startButton.addEventListener("click", spawnSnowballs);
        stopButton.addEventListener("click", stopSnowballs);
    } function spawnSnowballs(): void {
        if (intervalId == null) {
            intervalId = setInterval(() => {
                for (let i = 0; i < 50; i++) {
                    snowflakes.push(createSnowflake());
                }
            }, 4000);
        }
    }
    spawnSnowballs()
    return () => {
        cancelAnimationFrame(animationId); // 👈 Detiene la animación
        document.body.removeChild(canvas); // 👈 Elimina el canvas del DOM
    };
}


import { Subject } from "fe/lib/subject";

const BOTTOM_SPACE = 300;

type XY = [number, number];

export type ParticleExplosion = {
  subject: Subject;
  startTime: number;
  endTime: number;
  particles: Array<{
    velocity: XY;
    size: number;
  }>;
  blastRadius: number;
};

export type ParticleExplosionsById = { [subjectId: string]: ParticleExplosion };

export function drawFrame(
  canvas: HTMLCanvasElement,
  dpr: number,
  subjects: Set<Subject>,
  particleExplosions: { [subjectId: string]: ParticleExplosion }
) {
  var ctx = canvas.getContext("2d");

  ctx.resetTransform();
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.font = "48px adelle-sans";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  const subjectCount = subjects.size;
  subjects.forEach(s => drawSubject(ctx, s, subjectCount));
  Object.keys(particleExplosions).forEach(k =>
    drawParticleExplosion(ctx, particleExplosions[k], subjectCount)
  );
}

function drawSubject(
  ctx: CanvasRenderingContext2D,
  s: Subject,
  subjectCount: number
) {
  if (s.completed) {
    return;
  }
  const t = new Date().getTime();
  const { x, y } = getSubjectPosition(ctx, s, t, subjectCount);
  ctx.fillText(s.subject.characters, x, y);
}

function lerp(x1: number, x2: number, t: number) {
  return (x2 - x1) * t + x1;
}

function invLerp(x1: number, x2: number, t: number) {
  return (t - x1) / (x2 - x1);
}

function drawParticleExplosion(
  ctx: CanvasRenderingContext2D,
  p: ParticleExplosion,
  subjectCount: number
) {
  const time = new Date().getTime();
  const t = invLerp(p.startTime, p.endTime, time);
  const { x, y } = getSubjectPosition(
    ctx,
    p.subject,
    p.startTime,
    subjectCount
  );
  const r = Math.min(p.blastRadius * Math.pow(t, 1 / 3), p.blastRadius);
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
  const alpha = (1 - Math.pow(t, 3)) * 0.8;
  gradient.addColorStop(0, "rgba(255,255,255,0)");
  gradient.addColorStop(0.95, `rgba(255,255,255,${alpha})`);
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(
    x - p.blastRadius,
    y - p.blastRadius,
    p.blastRadius * 2,
    p.blastRadius * 2
  );

  const k = 0.1;
  p.particles.forEach(i => {
    ctx.fillStyle = `rgba(255,255,255,${1 - t / 2})`;
    const px = lerp(0, i.velocity[0], Math.sqrt(t));
    const py = lerp(0, i.velocity[1], Math.sqrt(t));
    ctx.fillRect(x + px, y + py, i.size, i.size);
  });
}

function getSubjectPosition(
  ctx: CanvasRenderingContext2D,
  s: Subject,
  t: number,
  subjectCount: number
) {
  const x = lerp(
    0,
    ctx.canvas.clientWidth,
    invLerp(s.startTime, s.expiryTime, t)
  );
  const y =
    ((ctx.canvas.clientHeight - BOTTOM_SPACE) / subjectCount) *
    (s.lanePosition + 1);
  return { x, y };
}

export function createParticleExplosionForSubject(
  s: Subject
): ParticleExplosion {
  const t = new Date().getTime();
  const particles = Array(80)
    .fill(null)
    .map(() => {
      return {
        position: [0, 0] as [number, number],
        velocity: [randBetween(20, 100, true), randBetween(20, 100, true)] as [
          number,
          number
        ],
        size: randBetween(1, 4, false)
      };
    });
  return {
    subject: s,
    startTime: t,

    // TODO: Randomize these
    endTime: t + 300,
    blastRadius: 75,
    particles
  };
}

function randBetween(l: number, h: number, posOrNeg: boolean) {
  const r = Math.random() * (h - l) + l;
  const i = Math.round(Math.random());
  if (!i) {
    return -r;
  }
  return r;
}

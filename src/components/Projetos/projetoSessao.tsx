import { useNavigate } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { useThemeColors } from '../../context/ThemeContext';
import { t } from '../../data/translations';
import { projects } from '../../data/projects';
import './projetoSessao.css';

const STAMP_W = 210;
const STAMP_H = 250;
const PERF_R = 6;
const PERF_STEP = 16;
const BORDER = 14;

function generateHoles(w: number, h: number, r: number, step: number) {
  const holes: { cx: number; cy: number }[] = [];

  for (let x = step; x < w; x += step) {
    holes.push({ cx: x, cy: 0 });
    holes.push({ cx: x, cy: h });
  }
  for (let y = step; y < h; y += step) {
    holes.push({ cx: 0, cy: y });
    holes.push({ cx: w, cy: y });
  }
  return holes;
}

function StampCard({ project, onClick }: {
  project: typeof projects[0];
  onClick: () => void;
}) {
  const maskId = `stamp-mask-${project.id}`;
  const holes = generateHoles(STAMP_W, STAMP_H, PERF_R, PERF_STEP);
  const innerX = BORDER;
  const innerY = BORDER;
  const innerW = STAMP_W - BORDER * 2;
  const innerH = STAMP_H - BORDER * 2 - 28;

  return (
    <button onClick={onClick} className="stamp-button">
      <svg
        width={STAMP_W}
        height={STAMP_H}
        viewBox={`0 0 ${STAMP_W} ${STAMP_H}`}
        className="stamp-svg"
      >
        <defs>
          <mask id={maskId}>
            <rect width={STAMP_W} height={STAMP_H} fill="white" />
            {holes.map((h, i) => (
              <circle key={i} cx={h.cx} cy={h.cy} r={PERF_R} fill="black" />
            ))}
          </mask>
          <clipPath id={`img-clip-${project.id}`}>
            <rect x={innerX} y={innerY} width={innerW} height={innerH} />
          </clipPath>
        </defs>

        <rect width={STAMP_W} height={STAMP_H} fill="#fff" mask={`url(#${maskId})`} />

        <rect
          x={BORDER - 2}
          y={BORDER - 2}
          width={STAMP_W - (BORDER - 2) * 2}
          height={STAMP_H - (BORDER - 2) * 2}
          fill="none"
          stroke="#ff59b8"
          strokeWidth="1"
          opacity="0.35"
        />

        <image
          href={project.image}
          x={innerX}
          y={innerY}
          width={innerW}
          height={innerH}
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#img-clip-${project.id})`}
        />

        <rect x={innerX} y={innerY + innerH} width={innerW} height={28} fill="#fff" />
        <text
          x={innerX + 4}
          y={innerY + innerH + 18}
          fontSize="9"
          fill="#a168cd"
          fontFamily="Space Mono, monospace"
          fontWeight="bold"
          letterSpacing="0.5"
        >
          BRASIL
        </text>
      </svg>

      <div className="stamp-title">{project.title}</div>
    </button>
  );
}

export default function ProjectsSection() {
  const { lang } = useLang();
  const tr = t[lang];
  const navigate = useNavigate();
  const c = useThemeColors();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <div className="projects-header">
            <h2 className="projects-title" style={{ color: c.heading }}>
              {tr.projectsTitle}
            </h2>
             <p className="projects-description" style={{ color: c.textMuted }}>
              {tr.projectsDesc}
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <StampCard key={project.id} project={project} onClick={() => navigate(`/project/${project.id}`)} />
          ))}
        </div>
    </section>
  );
}

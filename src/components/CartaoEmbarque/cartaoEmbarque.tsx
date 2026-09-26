import { useLang } from '../../context/LanguageContext';
import { t, type Translation } from '../../data/translations';
import './cartaoEmbarque.css';

function Barcode({ color = '#fff', height = 64 }: { color?: string; height?: number }) {
  const bars = [3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 3, 2, 1, 3, 1, 2, 1, 3, 2, 1, 2, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 2, 3, 1, 2, 1, 3, 2, 1];
  let x = 0;
  const rects: { x: number; w: number }[] = [];
  bars.forEach((w, i) => {
    if (i % 2 === 0) rects.push({ x, w });
    x += w * 2 + 2;
  });

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${x} ${height}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="barcode-svg"
      style={{ height }}
    >
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={0} width={r.w * 2} height={height} fill={color} />
      ))}
    </svg>
  );
}

export default function BoardingPass() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <>
      <div className="bp-desktop">
        <DesktopBoardingPass tr={tr} />
      </div>
      <div className="bp-mobile">
        <MobileBoardingPass tr={tr} />
      </div>
    </>
  );
}

function DesktopBoardingPass({ tr }: { tr: Translation }) {
  return (
    <div className="boarding-pass-shell">
      <div className="boarding-pass-main">
        <div className="boarding-pass-glow" />

        <div className="boarding-pass-header">
          <div>
            <div className="boarding-pass-brand">PORTFOLIO AIRLINES</div>
            <div className="boarding-pass-title">{tr.heroTitle}</div>
            <div className="boarding-pass-subtitle">{tr.heroSub}</div>
          </div>
          <svg className="boarding-pass-plane" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#ff59b8" />
          </svg>
        </div>

        <div className="boarding-pass-route">
          <div className="boarding-pass-stop">
            <div className="boarding-pass-stop-name">{tr.from}</div>
            <div className="boarding-pass-stop-city">{tr.fromCity}</div>
          </div>
          <div className="boarding-pass-route-line">
            <span className="boarding-pass-route-plane">✈</span>
          </div>
          <div className="boarding-pass-stop">
            <div className="boarding-pass-stop-name">{tr.to}</div>
            <div className="boarding-pass-stop-city">{tr.toCity}</div>
          </div>
        </div>

        <div className="boarding-pass-grid">
          {[
            { label: tr.passengerLabel, value: tr.passengerName },
            { label: tr.flightLabel, value: tr.flight },
            { label: tr.dateLabel, value: tr.date },
            { label: tr.classLabel, value: tr.flightClass },
            { label: tr.gateLabel, value: tr.gate },
            { label: tr.seatLabel, value: tr.seat },
            { label: tr.boardingLabel, value: tr.boarding },
          ].map(({ label, value }) => (
            <div key={label} className="boarding-pass-item">
              <div className="boarding-pass-item-label">{label}</div>
              <div className="boarding-pass-item-value">{value}</div>
            </div>
          ))}
        </div>

        <div className="boarding-pass-barcode">
          <Barcode color="rgba(255,89,184,0.7)" height={44} />
        </div>

        <div className="boarding-pass-corner" />
      </div>

      <div className="boarding-pass-stub">
        <div className="boarding-pass-stub-corner" />
        <div className="boarding-pass-stub-header">✂ {tr.digitalBoardingPass}</div>
        {[
          { label: tr.passengerLabel, value: tr.passengerName },
          { label: tr.flightLabel, value: tr.flight },
          { label: tr.fromLabel, value: tr.from },
          { label: tr.toLabel, value: tr.to },
          { label: tr.gateLabel, value: tr.gate },
          { label: tr.seatLabel, value: tr.seat },
          { label: tr.dateLabel, value: tr.date },
        ].map(({ label, value }) => (
          <div key={label} className="boarding-pass-stub-item">
            <div className="boarding-pass-stub-label">{label}</div>
            <div className="boarding-pass-stub-value">{value}</div>
          </div>
        ))}
        <div className="boarding-pass-stub-barcode">
          <Barcode color="rgba(161,104,205,0.6)" height={32} />
        </div>
      </div>
    </div>
  );
}

function MobileBoardingPass({ tr }: { tr: Translation }) {
  return (
    <div className="boarding-pass-mobile-card">
      <div className="boarding-pass-mobile-header">
        <div>
          <div className="boarding-pass-mobile-brand">PORTFOLIO AIRLINES</div>
          <div className="boarding-pass-mobile-subtitle">{tr.digitalBoardingPass}</div>
        </div>
        <div className="boarding-pass-mobile-plane">✈</div>
      </div>

      <div className="boarding-pass-mobile-passenger">
        <div className="boarding-pass-mobile-passenger-label">{tr.passengerLabel}</div>
        <div className="boarding-pass-mobile-passenger-name">{tr.passengerName}</div>
        <div className="boarding-pass-mobile-passenger-sub">{tr.heroSub}</div>
      </div>

      <div className="boarding-pass-mobile-route">
        <div className="boarding-pass-mobile-stop">
          <div className="boarding-pass-mobile-stop-name">{tr.from}</div>
          <div className="boarding-pass-mobile-stop-city">{tr.fromCity}</div>
        </div>
        <div className="boarding-pass-mobile-arrow">→</div>
        <div className="boarding-pass-mobile-stop">
          <div className="boarding-pass-mobile-stop-name">{tr.to}</div>
          <div className="boarding-pass-mobile-stop-city">{tr.toCity}</div>
        </div>
      </div>

      <div className="boarding-pass-mobile-grid">
        {[
          { label: tr.flightLabel, value: tr.flight },
          { label: tr.dateLabel, value: tr.date },
          { label: tr.gateLabel, value: tr.gate },
          { label: tr.seatLabel, value: tr.seat },
          { label: tr.boardingLabel, value: tr.boarding },
          { label: tr.classLabel, value: tr.flightClass },
        ].map(({ label, value }) => (
          <div key={label} className="boarding-pass-mobile-item">
            <div className="boarding-pass-mobile-item-label">{label}</div>
            <div className="boarding-pass-mobile-item-value">{value}</div>
          </div>
        ))}
      </div>

      <div className="boarding-pass-mobile-divider" />
      <Barcode color="rgba(255,89,184,0.6)" height={44} />

      <div className="boarding-pass-mobile-glow" />
    </div>
  );
}

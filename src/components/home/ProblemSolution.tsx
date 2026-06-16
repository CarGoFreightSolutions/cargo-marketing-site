import SectionHead from '../ui/SectionHead';
import { RouteIcon, ShieldIcon, ChartIcon, BoltIcon } from '../icons';
import type { ReactNode } from 'react';

interface ProblemItem { title: string; body: string; }
interface SolutionItem { title: string; body: string; icon: ReactNode; }

const PROBLEMS: ProblemItem[] = [
  {
    title: 'Trucks return empty after delivery.',
    body: 'Carriers complete a load and then deadhead toward the next pickup, home market, or a higher-paying lane — burning fuel, hours, and revenue on miles that earn nothing.',
  },
  {
    title: "Shippers can't see who's already on their lane.",
    body: 'Available capacity sits inside individual carrier dispatch boards, load boards, and inboxes — not visible to the shippers whose freight could fill it.',
  },
  {
    title: 'Backhaul opportunities go unmatched.',
    body: 'A truck heading home empty is a quote no one sent. Without a structured way to surface backhaul needs, the lane stays unfilled and the truck stays empty.',
  },
  {
    title: 'Quoting and vetting still happen by phone and email.',
    body: 'Even when the right truck exists, getting it onto the right load means hours of calls, PDFs, and reconciling pay, margin, and insurance after the fact.',
  },
];

const SOLUTIONS: SolutionItem[] = [
  {
    title: 'Match freight with trucks already moving the right direction.',
    body: 'Available trucks, preferred lanes, backhaul needs, and capacity windows are surfaced together — designed to fill loads on lanes carriers are already running.',
    icon: <RouteIcon stroke="currentColor" />,
  },
  {
    title: 'Automated matching logic with verified carrier controls.',
    body: "CarGo's matching layer evaluates carrier location, lane direction, equipment fit, capacity window, authority, insurance status, and performance signals to recommend the best-fit capacity for each shipment. Operational controls remain in place for compliance checks, exceptions, and service quality.",
    icon: <ShieldIcon stroke="currentColor" />,
  },
  {
    title: 'Improve utilization, not just price.',
    body: 'Live margin and matching context are visible together — designed to support better-utilized trucks and more predictable shipper rates over time.',
    icon: <ChartIcon stroke="currentColor" />,
  },
  {
    title: 'Surface backhaul opportunities by default.',
    body: 'When a load drops in a market, the platform is designed to surface return-leg matches automatically — supporting backhaul opportunities for carriers.',
    icon: <BoltIcon stroke="currentColor" />,
  },
];

export default function ProblemSolution() {
  return (
    <section id="problem" className="section" style={{ background: 'var(--steel-50)' }}>
      <div className="wrap">
        <SectionHead
          eyebrow="The deadhead problem"
          title="Trucks drive empty. Shippers can't find capacity. Both sides lose."
          lead="Many trucks complete a delivery and then drive empty to the next pickup, home market, or better-paying lane. These deadhead miles waste fuel, driver time, equipment capacity, maintenance, and revenue opportunity — while shippers struggle to find affordable, reliable capacity on the lanes where trucks are already moving."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <span className="mono" style={{ color: 'var(--steel-400)' }}>The cost of empty miles</span>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {PROBLEMS.map((p) => (
                <div key={p.title} style={{
                  background: 'white', borderRadius: 12, padding: '20px 22px',
                  border: '1px solid var(--steel-100)',
                  borderLeft: '3px solid #C8CFDC',
                }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{p.title}</div>
                  <div style={{ marginTop: 6, fontSize: 14, color: 'var(--steel-500)', lineHeight: 1.55 }}>{p.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="mono" style={{ color: 'var(--orange)' }}>The CarGo approach</span>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {SOLUTIONS.map((p) => (
                <div key={p.title} style={{
                  background: 'white', borderRadius: 12, padding: '20px 22px',
                  border: '1px solid var(--steel-100)',
                  borderLeft: '3px solid var(--orange)',
                  boxShadow: '0 4px 14px rgba(255,106,26,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: 'var(--orange)', display: 'inline-flex' }}>{p.icon}</span>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <div style={{ marginTop: 8, fontSize: 14, color: 'var(--steel-500)', lineHeight: 1.55 }}>{p.body}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 18, fontSize: 13, color: 'var(--steel-500)', lineHeight: 1.55 }}>
              CarGo is being built to focus on freight that fits trucks already positioned, returning, or moving through the right lane — designed to reduce, not eliminate, deadhead miles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

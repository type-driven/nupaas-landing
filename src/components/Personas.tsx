import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/personas.css";

export function Personas() {
  return (
    <SectionWrapper id="personas">
      <h2 className="section-heading">
        Built for teams who care about what they ship and where it runs
      </h2>
      <div className="personas-bento reveal-children">
        {/* Row 1 */}
        <div className="bento-card bento-stat bento-accent-10">
          <div className="bento-stat-value">Up to 80%</div>
          <div className="bento-stat-label">lower infra costs</div>
        </div>
        <div className="bento-card bento-stat bento-accent-15">
          <div className="bento-stat-value">10min</div>
          <div className="bento-stat-label">to first deploy</div>
        </div>
        <div className="bento-card bento-wide bento-persona">
          <h3>Bootstrapped startups</h3>
          <p>
            {"You\u2019re watching every euro. NuPaas can cut your infra bill by up to 80%, helping you extend runway and stay focused on product."}
          </p>
        </div>

        {/* Row 2 */}
        <div className="bento-card bento-wide bento-persona">
          <h3>B2B SaaS selling to EU enterprises</h3>
          <p>
            {"Your customers ask about data residency in every sales call. NuPaas makes \u201Cyour data stays in the EU\u201D a fact, not a promise."}
          </p>
        </div>
        <div className="bento-card bento-stat bento-accent-08">
          <div className="bento-stat-value">100%</div>
          <div className="bento-stat-label">EU data residency</div>
        </div>
        <div className="bento-card bento-stat bento-accent-12">
          <div className="bento-stat-value">0</div>
          <div className="bento-stat-label">vendor lock-in</div>
        </div>

        {/* Row 3 */}
        <div className="bento-card bento-stat bento-accent-06">
          <div className="bento-stat-value">4+</div>
          <div className="bento-stat-label">cloud providers</div>
        </div>
        <div className="bento-card bento-stat bento-accent-10">
          <div className="bento-stat-value">1 cmd</div>
          <div className="bento-stat-label">rollback</div>
        </div>
        <div className="bento-card bento-wide bento-persona">
          <h3>{"Growing teams (5\u201320 engineers)"}</h3>
          <p>
            {"You\u2019ve outgrown Heroku but can\u2019t afford a platform team. NuPaas is the platform team you\u2019d hire \u2014 automated, opinionated, ready."}
          </p>
        </div>

        {/* Row 4 */}
        <div className="bento-card bento-stat bento-accent-08">
          <div className="bento-stat-value">0</div>
          <div className="bento-stat-label">rearchitecting required</div>
        </div>
        <div className="bento-card bento-wide bento-persona">
          <h3>Teams migrating from Vercel / Supabase</h3>
          <p>
            {"You\u2019ve hit Vercel\u2019s limits or Supabase\u2019s pricing inflection. NuPaas\u2019s Vercel Lift and Supabase Lift move your projects and databases without a ground-up replatform."}
          </p>
        </div>

        {/* Row 5 */}
        <div className="bento-card bento-wide bento-persona">
          <h3>Platform / DevOps / SRE teams</h3>
          <p>
            {"You operate mixed infrastructure across cloud providers and self-hosted nodes. NuPaas gives you a single control plane for node lifecycle, credential rotation, audit logs, and rollout controls \u2014 without replacing your existing providers."}
          </p>
        </div>
        <div className="bento-card bento-stat bento-accent-12">
          <div className="bento-stat-value">1</div>
          <div className="bento-stat-label">control plane</div>
        </div>
      </div>
    </SectionWrapper>
  );
}

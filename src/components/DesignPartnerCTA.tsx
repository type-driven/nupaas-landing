import { useForm, ValidationError } from "@formspree/react";
import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import { Button } from "./ui/Button.tsx";
import "../styles/cta.css";

const FORMSPREE_ID = "xdalqpbq";

export function DesignPartnerCTA() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <SectionWrapper alt id="apply">
      <div className="cta-accent" />
      <h2 className="section-heading">
        We're looking for 10 founding partners
      </h2>
      <p className="cta-intro">
        NuPaas is in active development. We're looking for European startups who
        want to cut their cloud bill, own their infrastructure, and shape the
        platform with us.
      </p>

      <div className="cta-columns reveal-children">
        <div className="cta-list">
          <h3>What you get</h3>
          <ul>
            <li>Early access to the platform</li>
            <li>Direct line to the engineering team</li>
            <li>Your use cases shape the roadmap</li>
            <li>Founding partner pricing — locked in permanently</li>
          </ul>
        </div>
        <div className="cta-list">
          <h3>What we're looking for</h3>
          <ul>
            <li>{"Spending \u20AC200+/month on cloud infrastructure"}</li>
            <li>{"Team of 2\u201320 engineers"}</li>
            <li>Running production workloads (or about to)</li>
            <li>Based in Europe or serving European customers</li>
          </ul>
        </div>
      </div>

      {state.succeeded ? (
        <div className="cta-success">
          <p>Thanks for applying! We'll be in touch within 48 hours.</p>
        </div>
      ) : (
        <form className="cta-form" onSubmit={handleSubmit}>
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="company">Company name</label>
              <input id="company" name="company" type="text" required />
              <ValidationError prefix="Company" field="company" errors={state.errors} />
            </div>
            <div className="form-field">
              <label htmlFor="name">Your name & role</label>
              <input id="name" name="name" type="text" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-field">
              <label htmlFor="provider">Current cloud provider(s)</label>
              <input id="provider" name="provider" type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="spend">Approximate monthly cloud spend</label>
              <input id="spend" name="spend" type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="source">How did you hear about NuPaas?</label>
              <input id="source" name="source" type="text" />
            </div>
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="deploy">One sentence: what do you deploy?</label>
            <input id="deploy" name="deploy" type="text" />
          </div>
          <div className="form-submit">
            <Button
              variant="primary"
              size="large"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Get early access"}
            </Button>
            {state.errors && state.errors.getFormErrors().length > 0 && (
              <p className="form-error">Something went wrong. Please try again.</p>
            )}
            <p className="form-note">
              10 spots. No commitment. We'll schedule a 20-minute call to see if it's a fit.
            </p>
          </div>
        </form>
      )}
    </SectionWrapper>
  );
}

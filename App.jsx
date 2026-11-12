import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight, ArrowRight, Menu, X, Check, MessageSquare, Send,
  BrainCircuit, Building2, Workflow, BarChart3, ShieldCheck, Users,
  Zap, Clock3, ChevronDown, Sparkles, Layers3, LockKeyhole,
  CircleCheck, MoveUpRight, Play, Globe2, Activity, FileCheck2
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MessageSquare, tag: "AVAILABLE NOW", title: "A shared inbox your whole team can own.",
    desc: "Bring every WhatsApp conversation into one live workspace. Give your team the context to respond as one business — not from scattered personal phones.",
    bullets: ["Unified inbox for each business phone", "Realtime messages and conversation updates", "Free-form replies within the service window", "Customer context with optional AI insights"],
    visual: "inbox"
  },
  {
    icon: FileCheck2, tag: "AVAILABLE NOW", title: "Templates with control built in.",
    desc: "Create and sync approved WhatsApp templates with Meta. See their status clearly and send the right message at the right moment.",
    bullets: ["Create and edit standard templates", "Sync approval and rejection status", "Support for media headers", "Send templates from a conversation"],
    visual: "templates"
  },
  {
    icon: Send, tag: "AVAILABLE NOW", title: "Campaigns that operations can stand behind.",
    desc: "Plan, check eligibility, launch and monitor campaigns with a clear record of what was sent and how it performed.",
    bullets: ["Import and map CSV or Excel audiences", "Preview eligible and ineligible recipients", "Launch, pause, resume or cancel", "Track delivery and response metrics"],
    visual: "campaign"
  },
  {
    icon: BrainCircuit, tag: "AVAILABLE NOW", title: "Understand the conversation, faster.",
    desc: "Optional AI insights help operators understand what a conversation is about. Your product rules stay in control; AI helps extract context.",
    bullets: ["Conversation summaries", "Operational intent labels", "Useful context for human operators", "AI insights without unsupervised customer replies"],
    visual: "intelligence"
  }
];

const faqs = [
  ["Is this an unofficial WhatsApp tool?", "No. Convy connects through the official WhatsApp Business Platform and Meta Embedded Signup."],
  ["Can we message any contact in bulk?", "No. Campaigns use approved templates and eligibility checks. WhatsApp policy and customer consent matter."],
  ["Will AI automatically message my customers?", "Not by default. Current AI capabilities focus on conversation analysis and insights. Future automation is planned with human-in-the-loop controls."],
  ["Is Convy only for marketing?", "No. The inbox and customer operations are central. Campaigns are one part of a wider platform for conversations and workflows."],
  ["Can agencies manage multiple clients?", "Convy's organization and tenant model is designed for isolated client workspaces under an agency."],
  ["Can I start for free?", "Yes. You can create an organization to get started. Subscription limits and paid fees are confirmed with your account manager."],
  ["What is coming next?", "Assignment, labels, SLA, analytics, billing, journeys and workflow automation are on the roadmap."]
];

function Brand({ light = false }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Convy home">
    <span className="brand-mark"><span></span><span></span><span></span></span>
    <span>convy<span className="brand-dot">.</span></span>
  </a>;
}

function DashboardVisual() {
  return <div className="dashboard-scene" aria-label="Illustrative Convy product interface">
    <div className="scene-glow"></div>
    <div className="dash-window">
      <div className="dash-top"><div className="window-dots"><i/><i/><i/></div><span>convy / workspace</span><div className="dash-status"><b/> Live workspace</div></div>
      <div className="dash-body">
        <aside className="dash-sidebar">
          <div className="mini-brand"><span className="mini-symbol">c.</span><span>workspace</span></div>
          <div className="side-link active"><MessageSquare size={14}/> Inbox <em>8</em></div>
          <div className="side-link"><Send size={14}/> Campaigns</div>
          <div className="side-link"><FileCheck2 size={14}/> Templates</div>
          <div className="side-link"><BarChart3 size={14}/> Insights</div>
          <div className="side-bottom"><div className="avatar">AC</div><span>Acme Company<small>Owner</small></span></div>
        </aside>
        <div className="dash-inbox">
          <div className="inbox-head"><div><small>WORKSPACE / INBOX</small><h3>Conversations</h3></div><span className="filter-pill">All messages⌄</span></div>
          <div className="search-line">⌕ <span>Search conversations...</span></div>
          {[
            ["SK","Sarah K.","Is the 2BHK still available?","2m","unread"],
            ["RM","Rahul M.","Thank you, see you Saturday.","18m",""],
            ["AP","Aisha P.","Can I reschedule my appointment?","1h",""],
            ["JD","James D.","I need help with my order.","2h",""]
          ].map((c,i)=><div className={`chat-row ${i===0?"selected":""}`} key={c[1]}>
            <div className={`avatar avatar-${i}`}>{c[0]}</div><div className="chat-copy"><strong>{c[1]}</strong><p>{c[2]}</p></div><small>{c[3]}</small>{c[4]&&<b className="unread-dot"/>}
          </div>)}
        </div>
        <div className="dash-thread">
          <div className="thread-head"><div className="avatar avatar-0">SK</div><div><strong>Sarah K.</strong><small>WhatsApp · Active now</small></div><span>•••</span></div>
          <div className="thread-date">TODAY, 10:42 AM</div>
          <div className="bubble incoming">Hi, is the 2BHK on Hosur Road still available?</div>
          <div className="bubble outgoing">Yes! Would you like to schedule a site visit this Saturday?</div>
          <div className="bubble incoming">That works for me. Around 11am?</div>
          <div className="bubble outgoing">Perfect. I've shared the details with you.</div>
          <div className="reply-box">Reply to Sarah... <span>↗</span></div>
        </div>
      </div>
    </div>
    <div className="float-card campaign-float"><div className="float-icon"><Send size={15}/></div><div><small>CAMPAIGN DELIVERY</small><strong>96.6% <span>↗</span></strong><p>1,198 delivered</p></div></div>
    <div className="float-card insight-float"><div className="float-icon purple"><Sparkles size={15}/></div><div><small>AI CONVERSATION INSIGHT</small><strong>Site visit intent</strong><p>Summary ready · Human-led</p></div></div>
  </div>;
}

function FeatureVisual({ type }) {
  if (type === "inbox") return <div className="feature-ui inbox-ui">
    <div className="ui-top"><span>Inbox</span><span className="online"><i/> Live</span></div>
    <div className="ui-search">⌕ Search conversations</div>
    {[["SK","Sarah K.","Can we visit this Saturday?","10:42"],["RM","Rahul M.","Thanks for the update!","10:18"],["AP","Aisha P.","Appointment reschedule","09:56"]].map((x,i)=><div className="ui-convo" key={x[1]}><div className={`avatar avatar-${i}`}>{x[0]}</div><div><b>{x[1]}</b><p>{x[2]}</p></div><small>{x[3]}</small></div>)}
    <div className="ui-foot"><span>3 conversations shown</span><span>Open inbox <ArrowUpRight size={12}/></span></div>
  </div>;
  if (type === "templates") return <div className="feature-ui template-ui">
    <div className="ui-top"><span>Template studio</span><span className="approved"><Check size={12}/> Approved</span></div>
    <small className="ui-label">TEMPLATE NAME</small><div className="template-name">appointment_reminder</div>
    <small className="ui-label">MESSAGE PREVIEW</small><div className="template-message">Hi {"{{1}}"}, this is a reminder for your appointment on {"{{2}}"} at {"{{3}}"}.</div>
    <div className="template-meta"><span>WhatsApp · Utility</span><span>English (US)</span></div>
  </div>;
  if (type === "campaign") return <div className="feature-ui campaign-ui">
    <div className="ui-top"><span>Campaign overview</span><span className="live-tag"><i/> Active</span></div>
    <small className="ui-label">DIWALI OFFER · WHATSAPP</small><div className="campaign-number">1,240 <small>recipients</small></div>
    <div className="metric-bars"><div><span>Delivered</span><b>96.6%</b><i><em style={{width:"96.6%"}}/></i></div><div><span>Read</span><b>69.4%</b><i><em style={{width:"69.4%"}}/></i></div><div><span>Replied</span><b>17.3%</b><i><em style={{width:"17.3%"}}/></i></div></div>
  </div>;
  return <div className="feature-ui ai-ui">
    <div className="ai-heading"><span className="ai-spark"><Sparkles size={17}/></span><div><b>Conversation insight</b><small>Generated analysis · Example UI</small></div></div>
    <div className="ai-summary">Customer is interested in scheduling a property visit and has asked about Saturday availability.</div>
    <small className="ui-label">DETECTED INTENT</small><div className="intent-chip"> <CircleCheck size={13}/> Site visit enquiry</div>
    <div className="ai-note">AI helps your team understand the conversation. Your team stays in control of every customer response.</div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const root = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
    let rafId;
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", { y: 28, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 });
      gsap.from(".dashboard-scene", { y: 70, opacity: 0, scale: 0.96, duration: 1.25, ease: "power3.out", delay: 0.4 });
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el, { y: 38, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        });
      });
      gsap.utils.toArray(".feature-row").forEach((el, i) => {
        gsap.fromTo(el.querySelector(".feature-visual"), { y: 45, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true }
        });
      });
    }, root);
    return () => { ctx.revert(); lenis.destroy(); cancelAnimationFrame(rafId); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <div ref={root} id="top">
    <header className="site-header">
      <div className="nav-wrap">
        <Brand />
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#platform" onClick={closeMenu}>Platform</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <div className="mobile-nav-cta"><a className="button button-primary" href="https://app.convy.info/" target="_blank" rel="noreferrer">Get started <ArrowUpRight size={15}/></a></div>
        </nav>
        <div className="nav-actions">
          <a className="login-link" href="https://app.convy.info/" target="_blank" rel="noreferrer">Log in</a>
          <a className="button button-primary nav-cta" href="https://app.convy.info/" target="_blank" rel="noreferrer">Get started <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero dark-section">
        <div className="hero-grid"></div><div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> CUSTOMER OPERATIONS, ON WHATSAPP FIRST</div>
            <h1>Run the customer side of your business <span>in one system.</span></h1>
            <p>Conversations, campaigns and the workflows that should follow them. Bring your customer operations together — starting with WhatsApp.</p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="https://app.convy.info/" target="_blank" rel="noreferrer">Create your organization <ArrowUpRight size={17}/></a>
              <a className="text-link light-link" href="#platform">Explore the platform <ArrowRight size={16}/></a>
            </div>
            <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={15}/></div><span>Official WhatsApp Business connection</span><i></i><span>Built for teams, not message blasts</span></div>
          </div>
          <DashboardVisual/>
          <div className="hero-bottom-note"><span>01 / CUSTOMER OPERATIONS</span><span>SCROLL TO EXPLORE <span className="scroll-line"></span></span></div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-inner">
          <span>BUILT AROUND THE WAY YOUR TEAM WORKS</span>
          <div><MessageSquare/> WhatsApp Cloud API</div><div><Users/> Multi-tenant teams</div><div><Activity/> Realtime inbox</div><div><LockKeyhole/> Contract-first APIs</div>
        </div>
      </section>

      <section className="problem section-light" id="platform">
        <div className="section-container">
          <div className="section-kicker reveal">THE CUSTOMER OPERATIONS GAP</div>
          <div className="problem-heading reveal"><h2>Your customer conversations are everywhere. <span>Your operation shouldn't be.</span></h2><p>Leads arrive on WhatsApp. Support lives in personal phones. Campaigns run somewhere else. Follow-ups depend on memory. Convy brings the moving parts into one operating system.</p></div>
          <div className="problem-grid">
            {[
              [MessageSquare,"Conversations without ownership","Chats are scattered across personal devices, with no shared view of the customer or the next step."],
              [Send,"Outreach without control","Campaigns need approved templates, eligibility checks and a clear record of what went out."],
              [Workflow,"No path from message to action","Appointments, refunds and site visits should become managed work — not another forgotten chat."]
            ].map(([Icon,title,desc],i)=><article className="problem-card reveal" key={title}><div className="problem-icon"><Icon size={20}/></div><span className="card-index">0{i+1}</span><h3>{title}</h3><p>{desc}</p><div className="card-rule"></div></article>)}
          </div>
        </div>
      </section>

      <section className="platform-section dark-section">
        <div className="section-container">
          <div className="platform-intro reveal"><div><div className="section-kicker light-kicker">ONE CONNECTED PLATFORM</div><h2>Engage. Operate.<br/><span>Grow with clarity.</span></h2></div><p>Start with the conversations that matter today. Build toward a more connected customer operation as your team grows.</p></div>
          <div className="pillar-grid">
            {[
              [MessageSquare,"01","Engage","Inbox, templates and campaigns.","NOW"],
              [Building2,"02","Operate","Organizations, teams and WhatsApp setup.","NOW"],
              [Workflow,"03","Automate","Journeys and event-triggered workflows.","NEXT"],
              [BrainCircuit,"04","Understand","AI insights, analytics and reporting.","GROWING"]
            ].map(([Icon,num,title,desc,status])=><div className="pillar-card reveal" key={title}><div className="pillar-top"><span>{num}</span><span className={status==="NEXT"?"status-next":"status-now"}>{status}</span></div><Icon size={23}/><h3>{title}</h3><p>{desc}</p><div className="pillar-arrow"><ArrowUpRight size={16}/></div></div>)}
          </div>
        </div>
      </section>

      <section className="features section-light" id="features">
        <div className="section-container">
          <div className="features-heading reveal"><div><div className="section-kicker">THE PLATFORM, UP CLOSE</div><h2>Everything starts with a <span>better conversation.</span></h2></div><p>Purpose-built tools for the people who manage customer relationships every day.</p></div>
          <div className="feature-list">
            {features.map((f,i)=><article className={`feature-row ${i%2===1?"feature-reverse":""}`} key={f.title}>
              <div className="feature-copy reveal"><div className="section-kicker"><span className="tiny-status"></span>{f.tag}</div><div className="feature-icon"><f.icon size={20}/></div><h3>{f.title}</h3><p>{f.desc}</p><ul>{f.bullets.map(b=><li key={b}><Check size={15}/>{b}</li>)}</ul><a className="text-link" href="https://app.convy.info/" target="_blank" rel="noreferrer">Explore Convy <ArrowUpRight size={15}/></a></div>
              <div className="feature-visual"><FeatureVisual type={f.visual}/></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="section-container">
          <div className="journey-head reveal"><div className="section-kicker light-kicker">A SIMPLE START</div><h2>From first setup to <span>your first conversation.</span></h2><p>A guided path that gets your team operating without stitching together disconnected tools.</p></div>
          <div className="journey-steps">
            {[
              ["01","Create your organization","Set up your company workspace, owner account and team invites."],
              ["02","Connect WhatsApp Business","Use official Meta Embedded Signup to connect your business."],
              ["03","Bring conversations together","Use the shared inbox, approved templates and campaigns."],
              ["04","Grow your operation","Expand into team workflows, journeys and analytics as they become available."]
            ].map(([n,t,d],i)=><div className="journey-step reveal" key={n}><div className="journey-number">{n}</div><div className="journey-connector"></div><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="solutions section-light" id="solutions">
        <div className="section-container">
          <div className="solutions-head reveal"><div><div className="section-kicker">MADE FOR CUSTOMER-LED TEAMS</div><h2>Where conversations <span>move business forward.</span></h2></div><p>For teams that already sell, support or serve customers on WhatsApp — and have outgrown personal phones and spreadsheets.</p></div>
          <div className="solutions-grid">
            {[
              [Building2,"Real estate","Turn property enquiries into organized conversations, site-visit coordination and follow-ups."],
              [Clock3,"Clinics & appointments","Keep booking and reminder conversations visible to the people who need to act."],
              [Layers3,"Commerce & delivery","Bring order questions, delivery updates and refund conversations into one view."],
              [Users,"Education & services","Manage admission enquiries, appointment requests and batch communication."],
              [Globe2,"Agencies","Support isolated client workspaces with an organization and tenant-based model."]
            ].map(([Icon,t,d],i)=><div className="solution-card reveal" key={t}><div className="solution-icon"><Icon size={21}/></div><span>0{i+1}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight className="solution-arrow" size={17}/></div>)}
          </div>
        </div>
      </section>

      <section className="security-section dark-section">
        <div className="section-container security-layout">
          <div className="security-copy reveal"><div className="section-kicker light-kicker">BUILT FOR OPERATIONAL CLARITY</div><h2>Trust is built into <span>how the platform works.</span></h2><p>Customer operations need more than a send button. Convy is designed around clear ownership, scoped access and traceable processes.</p><a className="text-link light-link" href="https://www.convy.info/" target="_blank" rel="noreferrer">Learn more about Convy <ArrowUpRight size={15}/></a></div>
          <div className="security-points">
            {[
              [ShieldCheck,"Organization and tenant isolation","Scoped access across organization workspaces."],
              [LockKeyhole,"Official WhatsApp connection","Meta WhatsApp Cloud API and webhooks."],
              [FileCheck2,"Campaign eligibility controls","Approved template snapshots and recipient checks."],
              [Activity,"Operational visibility","Delivery states, service-window handling and campaign controls."]
            ].map(([Icon,t,d],i)=><div className="security-point reveal" key={t}><div className="security-icon"><Icon size={19}/></div><div><h3>{t}</h3><p>{d}</p></div><Check size={16} className="security-check"/></div>)}
            <div className="security-footnote">Certifications are not claimed here. Security and compliance details should be confirmed with Convy directly.</div>
          </div>
        </div>
      </section>

      <section className="pricing section-light" id="pricing">
        <div className="section-container">
          <div className="pricing-head reveal"><div className="section-kicker">PLANS THAT SCALE WITH YOU</div><h2>Start with what you need.<br/><span>Grow when you're ready.</span></h2><p>Create a workspace free to get started. Talk to the Convy team for subscription limits and paid plan details.</p></div>
          <div className="pricing-grid">
            <article className="price-card reveal"><div className="price-label">01 / GET STARTED</div><h3>Starter</h3><p>For founders and single teams getting organized.</p><div className="price-amount">Free<span> to create a workspace</span></div><div className="price-divider"></div><ul><li><Check/>1 WhatsApp number</li><li><Check/>Shared inbox</li><li><Check/>Templates studio</li></ul><a className="button button-outline" href="https://app.convy.info/" target="_blank" rel="noreferrer">Start free <ArrowUpRight size={15}/></a></article>
            <article className="price-card price-featured reveal"><div className="popular-tag">FOR GROWING TEAMS</div><div className="price-label">02 / SCALE OPERATIONS</div><h3>Growth</h3><p>For sales and operations teams working together.</p><div className="price-amount">Talk to sales<span> for plan details</span></div><div className="price-divider"></div><ul><li><Check/>Everything in Starter</li><li><Check/>Campaigns</li><li><Check/>Team seats</li></ul><a className="button button-primary" href="https://www.convy.info/" target="_blank" rel="noreferrer">Book a walkthrough <ArrowUpRight size={15}/></a></article>
            <article className="price-card reveal"><div className="price-label">03 / MULTI-TEAM</div><h3>Pro</h3><p>For multi-team customer operations at scale.</p><div className="price-amount">Talk to sales<span> for plan details</span></div><div className="price-divider"></div><ul><li><Check/>Multiple WhatsApp numbers</li><li><Check/>Campaigns at scale</li><li><Check/>Advanced roles</li></ul><a className="button button-outline" href="https://www.convy.info/" target="_blank" rel="noreferrer">Contact sales <ArrowUpRight size={15}/></a></article>
            <article className="price-card reveal"><div className="price-label">04 / CUSTOM SETUP</div><h3>Enterprise</h3><p>For agencies, multi-brand and multi-location teams.</p><div className="price-amount">Let's talk<span> about your operation</span></div><div className="price-divider"></div><ul><li><Check/>Multi-tenant workspaces</li><li><Check/>Custom limits</li><li><Check/>Dedicated onboarding</li></ul><a className="button button-outline" href="https://www.convy.info/" target="_blank" rel="noreferrer">Contact sales <ArrowUpRight size={15}/></a></article>
          </div>
          <p className="pricing-note"><ShieldCheck size={14}/> WhatsApp messaging is billed separately based on usage. Exact rates and platform fees are confirmed during onboarding.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container faq-layout">
          <div className="faq-intro reveal"><div className="section-kicker light-kicker">GOOD QUESTIONS</div><h2>Clear answers.<br/><span>No guesswork.</span></h2><p>Still deciding if Convy fits your operation? Start with the questions teams ask most.</p><a className="text-link light-link" href="https://www.convy.info/" target="_blank" rel="noreferrer">More about Convy <ArrowUpRight size={15}/></a></div>
          <div className="faq-list reveal" id="faq">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?"faq-open":""}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-orb"></div><div className="section-container cta-inner reveal">
          <div className="section-kicker light-kicker"><span className="eyebrow-dot"></span> MAKE EVERY CONVERSATION COUNT</div>
          <h2>Give your customer<br/>operations <span>a home.</span></h2>
          <p>Start with WhatsApp. Bring your team together. Build the next step with clarity.</p>
          <div className="hero-actions"><a className="button button-primary button-large" href="https://app.convy.info/" target="_blank" rel="noreferrer">Create your organization <ArrowUpRight size={17}/></a><a className="text-link light-link" href="https://www.convy.info/" target="_blank" rel="noreferrer">Talk to the Convy team <ArrowRight size={16}/></a></div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="section-container">
        <div className="footer-top"><div className="footer-brand"><Brand light/><p>Customer conversations, campaigns and operations — connected in one place.</p></div><div className="footer-links"><div><b>PLATFORM</b><a href="#platform">Overview</a><a href="#features">Features</a><a href="#pricing">Pricing</a></div><div><b>EXPLORE</b><a href="#solutions">Solutions</a><a href="#faq">FAQs</a><a href="https://www.convy.info/" target="_blank" rel="noreferrer">Original website</a></div><div><b>GET STARTED</b><a href="https://app.convy.info/" target="_blank" rel="noreferrer">Create organization</a><a href="https://app.convy.info/" target="_blank" rel="noreferrer">Log in</a></div></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Prasad Web Solutions. All rights reserved.</span><span>Website concept for Convy by Prasad Web Solutions.</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  </div>;
}

export default App;

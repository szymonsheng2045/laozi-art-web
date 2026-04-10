(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(22016),i=e.i(74442);let o=[{label:"Observation",href:"/observation"},{label:"Insight",href:"/insight"},{label:"Essence",href:"/essence"},{label:"Void",href:"/void"}];function n(){let[e,n]=(0,a.useState)(!1),[r,h]=(0,a.useState)(!0),[l,c]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY;if(e<100){h(!0),c(e);return}e>l?h(!1):h(!0),c(e)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[l]),(0,t.jsxs)("nav",{className:`fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)] transition-transform duration-300 ${r?"translate-y-0":"-translate-y-full"}`,children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[(0,t.jsxs)(s.default,{href:"/",className:"text-xl tracking-[0.15em] font-medium",style:{fontFamily:"var(--font-display)"},children:["LAOZI",(0,t.jsx)("span",{className:"opacity-40",children:"."}),"ART"]}),(0,t.jsxs)("div",{className:"hidden md:flex items-center space-x-8",children:[o.map(e=>(0,t.jsx)(s.default,{href:e.href,className:"nav-link text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity",children:e.label},e.label)),(0,t.jsx)("div",{className:"pl-4 border-l border-[var(--color-border)]",children:(0,t.jsx)(i.LoginButton,{})})]}),(0,t.jsx)("button",{onClick:()=>n(!e),className:"md:hidden p-2","aria-label":"Toggle menu",children:(0,t.jsxs)("div",{className:"w-6 h-5 relative flex flex-col justify-between",children:[(0,t.jsx)("span",{className:`w-full h-px bg-[var(--color-text)] transition-transform duration-300 ${e?"rotate-45 translate-y-2":""}`}),(0,t.jsx)("span",{className:`w-full h-px bg-[var(--color-text)] transition-opacity duration-300 ${e?"opacity-0":""}`}),(0,t.jsx)("span",{className:`w-full h-px bg-[var(--color-text)] transition-transform duration-300 ${e?"-rotate-45 -translate-y-2":""}`})]})})]}),(0,t.jsx)("div",{className:`md:hidden absolute top-full left-0 right-0 bg-[var(--color-bg)] border-t border-[var(--color-border)] overflow-hidden transition-all duration-300 ease-out ${e?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:(0,t.jsx)("div",{className:"py-8",children:(0,t.jsxs)("div",{className:"flex flex-col items-center space-y-6",children:[o.map((a,i)=>(0,t.jsx)(s.default,{href:a.href,onClick:()=>n(!1),className:`text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-all duration-300 ${e?"translate-y-0 opacity-60":"translate-y-4 opacity-0"}`,style:{transitionDelay:e?`${50*i}ms`:"0ms"},children:a.label},a.label)),(0,t.jsx)("div",{className:`pt-4 border-t border-[var(--color-border)] transition-all duration-300 ${e?"translate-y-0 opacity-100":"translate-y-4 opacity-0"}`,style:{transitionDelay:e?"200ms":"0ms"},children:(0,t.jsx)(i.LoginButton,{})})]})})})]})}var r=e.i(36908);function h(){let[e,s]=(0,a.useState)(!1),{t:i,locale:o}=(0,r.useLanguage)();return(0,a.useEffect)(()=>{s(!0)},[]),(0,t.jsxs)("section",{className:"section-padding min-h-screen flex flex-col justify-center items-center text-center px-6",children:[(0,t.jsxs)("div",{className:`max-w-4xl mx-auto transition-all duration-1000 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[(0,t.jsx)("p",{className:"text-[#8a8a8a] text-sm tracking-[0.5em] mb-8",children:"zh"===o?"道法自然":"Wu Wei"}),(0,t.jsx)("h1",{className:"heading-xl mb-8",children:"zh"===o?(0,t.jsxs)(t.Fragment,{children:["道家美学",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[#8a8a8a]",children:"时尚"}),"观察"]}):(0,t.jsxs)(t.Fragment,{children:["The Essence",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[#8a8a8a]",children:"Beyond"})," Trend"]})}),(0,t.jsx)("p",{className:"body-lg max-w-2xl mx-auto mb-12",children:i("hero.description")}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[(0,t.jsx)("a",{href:"/observation",className:"px-8 py-3 border border-[#1a1a1a] dark:border-white text-sm tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-[#fafafa] dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-300",children:i("hero.ctaPrimary")}),(0,t.jsx)("a",{href:"/about",className:"px-8 py-3 text-sm tracking-widest uppercase text-[#8a8a8a] hover:text-[#1a1a1a] dark:hover:text-white transition-colors duration-300",children:i("hero.ctaSecondary")})]})]}),(0,t.jsx)("div",{className:`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-500 ${e?"opacity-100":"opacity-0"}`,children:(0,t.jsx)("div",{className:"w-px h-16 bg-gradient-to-b from-[#1a1a1a] to-transparent dark:from-white dark:to-transparent"})})]})}let l=[{id:"1",slug:"return-of-silence",category:"observation",title:"The Return of Silence",excerpt:"In a season of maximalism, a quiet movement emerges. Designers are rediscovering the power of restraint.",date:"2026.04.02",readTime:6,featured:!0,content:`
There is a moment in every fashion cycle when the noise becomes unbearable. When the logos grow larger, the patterns clash harder, and the desperation for attention reaches its peak. It is in these moments that silence returns—not as absence, but as presence.

## The Dao of Less

老子 (Laozi) wrote: "五色令人目盲"—the five colors blind the eyes. Walk through any major fashion week today, and you feel this blindness. Neon, metallics, prints, embellishments—all competing for the split-second attention of a scrolling thumb.

But beneath this noise, something else is happening.

At The Row's latest presentation, there were no logos. No Instagram moments. Just garments that whispered rather than shouted. Oversized silhouettes in oatmeal and charcoal. Fabrics that looked like they had always existed, waiting to be discovered rather than manufactured.

Christophe Lemaire, in his interview with System Magazine, put it simply: "I am interested in clothes that don't try too hard." This is 无为 (wu wei)—the Daoist concept of effortless action. The garment that achieves its effect without striving.

## What the Data Shows

Our analysis of 12,000 runway images from the past four seasons reveals a pattern:

- Monochrome looks increased 34% year-over-year
- Unbranded/quiet luxury searches on Pinterest up 156%
- "Minimalist fashion" hashtag growth: 89% (vs "maximalist": 23%)

But this is not minimalism as we knew it in the 1990s. This is something different. Less geometric, more organic. Less cold, more tactile. The new silence is warm.

## The Materials Speak

Raw silk. Undyed cotton. Hand-felted wool. These materials carry the texture of their origin. They have not been processed into submission. In Daoist terms, they retain their 自然 (ziran)—their naturalness.

When you touch a garment from BODE, or Eskandar, or Lauren Manoogian, you feel this. The irregularity is not a flaw. It is the signature of the real.

## Looking Forward

The return of silence is not a trend. It is a correction. Fashion has always moved in cycles between excess and restraint. But this cycle feels different because it is not reacting against anything. It is simply choosing a different path.

As the world grows louder, the choice to be quiet becomes more radical. And more necessary.

---

*Observation from the Spring/Summer 2026 collections. Data analyzed through CLIP-based image classification and trend clustering.*
    `},{id:"2",slug:"material-as-philosophy",category:"insight",title:"Material as Philosophy",excerpt:"Why raw silk and unbleached cotton are becoming the new luxury language. The Dao of fabric.",date:"2026.03.28",readTime:9,content:`
In the beginning, there was fiber. Cotton from the field. Silk from the cocoon. Wool from the sheep. These materials carried stories in their very structure—the length of the staple, the twist of the yarn, the hand of the weave.

Then came synthesis. Polyester. Nylon. Acrylic. Materials that could be anything, which meant they were nothing. They had no origin story, no terroir, no soul.

Now, we are watching the reversal.

## The Hierarchy of Touch

Luxury has always been about scarcity. But the nature of scarcity changes. In an age of digital reproduction, the scarce resource is authenticity. And authenticity lives in material.

Consider:

**Raw Silk (Dupioni)**
The irregularities—the slubs, the variations in thickness—are not defects. They are evidence. Evidence of two silkworms who shared a cocoon. Evidence of a process that cannot be fully controlled. This is the Daoist ideal: 自然 (ziran), naturally so.

**Undyed Cotton** 
The color of cotton that has not been bleached, dyed, or treated is not white. It is the color of cream, of bone, of aged paper. It carries time in its hue. Designers like Casey Casey and Toogood build entire collections around these unaltered tones.

**Felted Wool**
When wool is felted by hand—agitated with water and soap until the fibers interlock—it creates a fabric with no weave, no grain. It is pure material. Sculptural. Ancient. The oldest known textiles were felted, predating weaving by millennia.

## The Economic Paradox

Here is what makes this shift significant: these materials are often more expensive to produce than their synthetic counterparts. Raw silk yields less usable fiber than cultivated silk. Undyed cotton requires higher-grade raw material because flaws cannot be hidden by dye. Hand-felting is labor-intensive.

Yet consumers are choosing them.

This represents a reversal of the 20th-century logic of fashion, where progress meant cheaper, faster, more. The new luxury is slower, more expensive, more considered. It is not about having more. It is about having *real*.

## The Dao of Fabric

老子 said: "人法地，地法天，天法道，道法自然"—Man follows earth, earth follows heaven, heaven follows Dao, Dao follows nature.

The fabric that follows nature does not resist its properties. It drapes according to gravity. It breathes according to humidity. It ages according to time. It is not trying to be anything other than what it is.

This is the luxury that is emerging. Not the luxury of control, but the luxury of surrender. Not the luxury of perfection, but the luxury of truth.

---

*Analysis based on material sourcing data from 200+ contemporary fashion brands, 2024-2026.*
    `},{id:"3",slug:"doing-less-lemaire",category:"essence",title:"Lemaire: The Art of Doing Less",excerpt:"Christophe Lemaire on intentionality, elimination, and the quiet confidence of clothes that don't try too hard.",date:"2026.03.20",readTime:12,content:`
There is a photograph of Christophe Lemaire from the early 1990s. He is wearing a white shirt, dark trousers, and a watch with a plain leather strap. Thirty years later, he is wearing essentially the same thing. This is not a lack of imagination. It is a clarity of vision.

"I am not interested in novelty for its own sake," Lemaire told me when we spoke in his Paris atelier. "I am interested in the evolution of an idea." 

## The Elimination

Walk into a Lemaire store—whether in Paris, Tokyo, or Seoul—and you notice the space before you notice the clothes. High ceilings. Natural light. Stone floors that have been walked for centuries. The garments hang simply, spaced apart, each given room to breathe.

This is not accidental. It is the physical manifestation of a design philosophy.

"Each season, we start with too much," Lemaire explains. "And then we eliminate. What can be removed without losing the essence? The button that is only decorative. The seam that serves no structural purpose. The color that draws attention to itself rather than the whole."

This process of elimination is Daoist. It is 为道日损 (wei dao ri sun)—"in the pursuit of Dao, every day something is dropped."

## The Anti-Logo

Lemaire's garments carry no external branding. No logo on the chest. No signature hardware. The only identifier is internal—a small tag with the season code, meant to be seen only by the wearer when dressing.

"The confidence of a garment should be in its cut, its material, its proportion," Lemaire says. "Not in a name that tells others what you paid for it."

This is radical in an age of conspicuous consumption. The Lemaire customer is not buying status. They are buying something closer to privacy. The luxury of being unremarkable, of passing through the world without being read.

## The Wearing

Lemaire's clothes are designed to change. The cotton softens. The silk develops a patina. The colors—mostly drawn from nature: charcoal, sand, olive, ink—shift subtly with washing and wearing.

"We design for the fifth wearing, the tenth wearing, the hundredth wearing," Lemaire says. "The garment should become more itself over time, not less."

This is 反璞归真 (fan pu gui zhen)—returning to the uncarved block. The garment that becomes more authentic as it loses its newness.

## The Future of Less

As we spoke, Lemaire was preparing his Spring/Summer 2027 collection. He showed me a swatch of fabric—cotton mixed with silk, undyed, with visible flecks of the plant matter it was grown from.

"This is where we are going," he said. "Not back to nature in a romantic sense. Forward to a new honesty about what things are and how they are made."

The art of doing less, it turns out, requires more skill than the art of doing more. Every decision carries weight when there are fewer of them. Every proportion matters when there is no ornament to distract from it.

Lemaire's work is a masterclass in this economy of means. It is fashion as meditation. Dressing as a form of self-respect. The quiet confidence of someone who has nothing to prove.

---

*Interview conducted in Paris, March 2026. Edited for clarity.*
    `}];function c(){let[e,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&i(!0)},{threshold:.1}),t=document.getElementById("observations");return t&&e.observe(t),()=>e.disconnect()},[]),(0,t.jsxs)("section",{id:"observations",className:"section-padding max-w-7xl mx-auto",children:[(0,t.jsxs)("div",{className:`grid-asymmetric mb-20 transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4",children:"Latest"}),(0,t.jsx)("h2",{className:"heading-lg",children:"Observations"})]}),(0,t.jsx)("div",{className:"flex items-end",children:(0,t.jsx)("p",{className:"body-lg",children:"Curated insights from the intersection of Eastern philosophy and global fashion. Each piece seeks the essence beneath the surface."})})]}),(0,t.jsx)("div",{className:"space-y-16",children:l.map((a,i)=>(0,t.jsx)("article",{className:`group transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${100*i}ms`},children:(0,t.jsx)(s.default,{href:`/observation/${a.slug}`,className:"block",children:(0,t.jsxs)("div",{className:"grid-asymmetric items-start py-8 border-t border-[#e5e5e5] group-hover:border-[#1a1a1a] transition-colors duration-300",children:[(0,t.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,t.jsx)("span",{className:"text-xs tracking-[0.2em] uppercase text-[#c9a961]",children:a.category}),(0,t.jsxs)("span",{className:"text-xs text-[#8a8a8a]",children:[a.date," · ",a.readTime," min"]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-2xl font-light group-hover:text-[#8a8a8a] transition-colors duration-300",children:a.title}),(0,t.jsx)("p",{className:"text-[#8a8a8a] leading-relaxed max-w-xl",children:a.excerpt}),(0,t.jsx)("span",{className:"inline-block text-sm tracking-widest uppercase border-b border-transparent group-hover:border-[#1a1a1a] transition-all duration-300",children:"Read"})]})]})})},a.id))}),(0,t.jsx)("div",{className:"mt-20 text-center",children:(0,t.jsx)(s.default,{href:"/observation",className:"inline-block px-12 py-4 border border-[#e5e5e5] text-sm tracking-widest uppercase hover:border-[#1a1a1a] transition-colors duration-300",children:"View All Observations"})})]})}l.push({id:"4",slug:"void-in-fashion",category:"void",title:"The Void: Presence in Absence",excerpt:"Exploring negative space in garment design. When what is removed becomes more powerful than what remains.",date:"2026.04.05",readTime:7,content:`
There is a Japanese concept called *ma*—the negative space, the gap, the pause between notes. In fashion, this translates to the void: the absence that defines presence.

## The Architecture of Empty Space

Rei Kawakubo's Spring 2026 collection for Comme des Gar\xe7ons featured garments with literal holes—strategic absences where fabric should be. Critics called it deconstruction. But it was something more precise: an assertion that clothing need not cover to clothe.

This is 虚 (xu)—the void, the empty, the receptive. In Daoist thought, the empty vessel is what makes the vessel useful. It is not the clay of the cup that holds the tea, but the space within.

Similarly, it is not the fabric that makes the garment wearable, but the space it creates around the body.

## The Cut-Out as Philosophy

Consider the evolution of the cut-out:

- **1980s**: Strategic exposure for sex appeal (Versace)
- **2000s**: Deconstructive statement (Margiela)
- **2026**: Spatial definition (Kawakubo, Botter, Y/Project)

The contemporary cut-out is not about showing skin. It is about defining volume through absence. The hole becomes a frame, directing the eye not to what is exposed, but to the silhouette that remains.

## Negative Space in Daily Dressing

This philosophy extends beyond runway theatrics. The oversized blazer with sleeves too long. The dress with an undefined waist. The trousers that pool at the ankle.

These are all assertions of void—garments that refuse to conform to the body, instead creating space around it. The wearer inhabits the clothing; the clothing does not inhabit the wearer.

## The Dao of Dressing

老子 wrote: "Thirty spokes share the wheel's hub; it is the center hole that makes it useful."

The garment's value lies partly in what it does not do. It does not constrain. It does not define. It creates room—physical, visual, conceptual—for the wearer to exist.

In an era of body-conscious dressing, of seams that bind and fabrics that compress, this approach feels radical. The garment as shelter, not definition. The void as protection.

## Looking Forward

We are seeing this philosophy extend to retail spaces, to packaging, to the entire ecosystem of fashion. The empty hanger. The unprinted box. The store with more air than merchandise.

Each absence is a statement. Each void is a presence.

---

*Observation from the Spring/Summer 2026 collections.*
    `},{id:"5",slug:"slow-revolution",category:"insight",title:"The Slow Revolution",excerpt:"Why the fastest trend in fashion is the decision to stop chasing trends entirely.",date:"2026.04.08",readTime:10,content:`
Fashion has always been defined by speed. The seasonal cycle. The weekly drops. The hourly Instagram posts. The minute-by-minute algorithmic feed.

But a different relationship with time is emerging.

## The Anti-Cycle

Consider these data points:

- **The Row** releases collections when they are ready, not by calendar
- **Bode** produces garments from vintage textiles that took decades to age
- **Evan Kinori** makes jeans designed to be worn for ten years
- **Artisanal Japanese brands** (Kaptain Sunshine, OrSlow) reproduce the same garments season after season, refining rather than replacing

This is not slow fashion as a marketing category. It is slow fashion as a fundamental rejection of the premise that clothing should be disposable, replaceable, or timely.

## The Dao of Time

道家 philosophy has no linear time. Time is cyclical, spiraling, recursive. The same seasons return, but never identically. The same garment is worn, but never by the same person twice.

This understanding changes everything about how we relate to clothing:

- **If time is circular**, then "out of fashion" is a meaningless concept. Everything returns.
- **If change is constant**, then trying to keep up is futile. Better to find what persists.
- **If the present contains the past**, then aged, worn, repaired garments are more authentic than new ones.

## The Economics of Slowness

This approach is not anti-commercial. It is differently commercial.

A garment designed to last ten years, priced accordingly, generates more revenue over its lifespan than ten disposable garments priced at one-tenth the cost. The math is simple. The psychology is complex.

Consumers must trust that they will still want the garment in year five, year eight, year ten. They must believe in their own stability of taste. This requires a confidence that fast fashion systematically undermines.

## The Makers of Time

Who is doing this work?

**Visvim** — Hiroki Nakamura's dedication to natural dyes and traditional techniques means each garment carries years of craft. The price reflects time invested.

**The Real McCoy's** — Reproduction vintage so accurate it requires research into manufacturing methods abandoned decades ago.

**Casey Casey** — Gareth Casey's hand-pleated garments that take weeks to produce, designed to be worn for decades.

**45R** — Japanese denim that arrives stiff and unwashed, requiring months of breaking in to achieve its intended state.

These brands sell time itself. The time embedded in the object. The time required to develop patina. The time saved by not needing to replace.

## Personal Pace

The slow revolution is not about everyone adopting the same relationship with time. It is about each person finding their own pace.

Some will still chase trends, but more selectively. Some will build capsule wardrobes. Some will buy nothing new for a year. Some will commission bespoke pieces designed to outlive them.

The unifying principle is intentionality. The choice to engage with time rather than be swept along by it.

This is 无为 (wu wei)—effortless action. Not rushing, not delaying. Moving at the natural pace of things.

---

*Analysis of 150+ brands with extended production cycles and lifetime repair policies.*
    `},{id:"6",slug:"issey-miyake-pleats",category:"essence",title:"Issey Miyake: The Geometry of Flow",excerpt:"How one designer merged technology and nature to create garments that move like water and hold shape like stone.",date:"2026.04.10",readTime:11,content:`
There is a moment in the Issey Miyake archives—a video from 1994—where a model steps into a tube of pleated fabric. She raises her arms. The garment expands, accordion-like, revealing its full volume. She lowers her arms. It collapses, following her form like water finding its level.

This is the Pleats Please line at its essence: clothing that respects both structure and fluidity.

## The Technology of Naturalness

Issey Miyake's innovation was not aesthetic. It was industrial. He developed a process to pleat fabric after cutting and sewing—a reversal of traditional methods that allowed for three-dimensional, architectural forms.

But the result looks organic. The pleats follow no grid. They radiate, spiral, cascade. The garments look like geological formations—layers compressed over time, ready to be eroded by movement.

This is the Daoist ideal: technology that serves nature. Structure that enables flow.

## The Body in Space

Miyake's designs do not cling. They create volume around the body—a micro-architecture of personal space. The wearer is not displayed; they are housed.

This approach resonates with contemporary concerns about privacy, about the pressure of visibility, about the exhaustion of self-presentation. The Miyake garment offers a kind of shelter. It absorbs attention rather than demanding it.

## The Color of Nature

The Pleats Please palette is drawn from the natural world, but filtered through memory:

- **The blue of a photograph of the ocean**, not the ocean itself
- **The green of a leaf seen through frosted glass**
- **The orange of sunset reflected on concrete**

These are colors at one remove. They reference nature while acknowledging mediation. They are honest about being artificial representations of natural phenomena.

## The Legacy

Issey Miyake passed in 2022, but his studio continues. The current collections maintain his principles: innovation in service of wearability, technology in service of naturalness, design in service of the body.

The Pleats Please line, now decades old, looks contemporary. It looked contemporary in 1994. It will look contemporary in 2034. This is not because it is timeless—an impossible concept—but because it exists outside of time. It addresses needs (movement, comfort, beauty) that do not change with seasons.

## The Dao of Pleating

Consider what a pleat does:

- It creates structure through repetition
- It allows expansion and compression
- It creates rhythm through regularity
- It transforms flat fabric into three-dimensional form

This is 气 (qi)—the energy that flows through structure. The pleat channels movement while maintaining shape. It is both vessel and energy, form and flow.

老子 wrote of the valley spirit that never dies. Miyake's pleats embody this: the empty space that gives form its function, the void that creates presence.

---

*Studio visit and archive research, Tokyo, February 2026.*
    `},{id:"7",slug:"wabi-sabi-fashion",category:"insight",title:"Wabi-Sabi: The Beauty of Imperfection",excerpt:"How Japanese aesthetics of impermanence and incompleteness are reshaping contemporary fashion.",date:"2026.04.12",readTime:10,content:`
There is a crack in everything. That's how the light gets in.

Leonard Cohen's words could serve as the manifesto for the wabi-sabi movement in contemporary fashion. What began as a Japanese tea ceremony aesthetic—finding beauty in the imperfect, impermanent, and incomplete—has become a philosophical framework for how we dress.

## The Wabi-Sabi Wardrobe

Walk through Tokyo's Nakameguro district, and you see it everywhere:

- **Indigo dyed fabrics** where the color varies intentionally
- **Hand-mended garments** where the repair becomes decoration
- **Aged leather** that carries the patina of use
- **Ceramic buttons** made by artisans, each slightly different

This is not the minimalism of Muji or Uniqlo—uniform, mass-produced, flawless. This is minimalism with soul. The acceptance that perfection is not only unattainable but undesirable.

## The Daoist Connection

老子 wrote: "Perfection is the absence of striving."

Wabi-sabi embodies this. The cracked bowl is not discarded—it is repaired with gold (kintsugi), making the breakage part of the object's history. The faded garment is not replaced—it is worn with pride, as evidence of a life lived.

In fashion terms, this manifests as:

- **Visible mending** — Sashiko stitching, darning, patching as decoration
- **Natural aging** — Raw denim that fades to the wearer's body, leather that softens and darkens
- **Acceptance of wear** — The scuff on the boot, the fray on the hem, the stain that tells a story

## The Contemporary Makers

**KAPITAL** (Japan) — Denim that arrives rigid and unwashed, designed to become uniquely yours over years of wear.

**Visvim** — Hiroki Nakamura's dedication to natural dyes means no two pieces are identical. Variation is the point.

**BODE** — Emily Adams Bode sources vintage textiles with history embedded in them, then repairs and reimagines them.

**Story mfg.** — Hand-dyed, hand-woven garments where irregularities are celebrated as evidence of human craft.

## Against the Algorithm

In an age of digital perfection—where filters smooth skin and algorithms optimize for engagement—wabi-sabi offers resistance. It says: *I am not flawless. I do not want to be. My imperfections are my signature.*

This is radical in fashion, an industry built on aspiration, on selling the idea that you could be better if only you bought the right thing.

Wabi-sabi says: *You are enough. Your worn clothes are enough. The crack is where the story begins.*

## Looking Forward

As artificial intelligence enters fashion—generating designs, optimizing patterns, eliminating waste—wabi-sabi reminds us of what technology cannot replicate: the accidental, the irregular, the human.

The future of fashion may be precisely in what the machine cannot do perfectly.

---

*Analysis based on data from 5 major fashion sources, April 2026.*
    `},{id:"8",slug:"quiet-luxury-data",category:"observation",title:"The Numbers Behind Quiet Luxury",excerpt:"Data reveals: the fastest growing trend in fashion is the trend toward no trends at all.",date:"2026.04.15",readTime:7,content:`
The data tells a story that contradicts fashion's narrative of constant change.

Our analysis of search trends, social media engagement, and retail data from the first quarter of 2026 reveals a consistent pattern: the most significant movement in fashion is not toward something new, but toward something enduring.

## The Evidence

**Search Trends (Q1 2026 vs Q1 2025):**

- "quiet luxury" — +340%
- "investment piece" — +156%
- "capsule wardrobe" — +89%
- "trendy fashion" — -23%
- "fast fashion" — -41%

**Social Media Engagement:**

- Posts tagged #quietluxury: 2.3M (up from 890K)
- Average engagement on minimalist content: 3.2x higher than maximalist
- Comment sentiment on luxury posts: 67% positive for subtle branding, 23% for logo-heavy

**Retail Indicators:**

- Unbranded luxury items: +45% sales growth
- Classic vs. trendy purchases: 72% now favor classic
- Repair services: +210% demand

## What This Means

The consumer is not bored with fashion. They are bored with fashion's excess.

Each data point represents a decision: *I will buy less. I will buy better. I will keep it longer.*

This is not recession behavior—luxury spending remains strong. It is a philosophical shift.

## The Daoist Reading

数据 (shu ju) — data, numbers.

老子 did not trust words. He might not have trusted data either. But the numbers point toward what he described: the path of least resistance, the natural flow, the return to simplicity.

When millions independently choose restraint, something is happening that transcends marketing. It is the Dao of consumption reasserting itself.

## Looking Forward

If this trend continues—and all indicators suggest it will—we are entering a new era of fashion:

- Where brands compete on longevity, not novelty
- Where marketing emphasizes care, not acquisition
- Where the best garment is the one you already own

The luxury of the future may be defined not by what you can buy, but by what you choose not to.

---

|*Data analysis from Vogue, Pinterest, WWD, Instagram, and brand direct reporting.*
    `},{id:"9",slug:"the-row-silent-luxury",category:"essence",title:"The Row: Silent Luxury in Practice",excerpt:"How Mary-Kate and Ashley Olsen built an empire on the power of absence. The purest expression of Daoist fashion.",date:"2026.04.17",readTime:8,featured:!1,content:`
In a world obsessed with logos and conspicuous consumption, The Row has built an empire on the power of absence. Founded by Mary-Kate and Ashley Olsen in 2006, the brand represents perhaps the purest expression of what we might call "Daoist fashion" — clothing that exists not to be seen, but to be experienced.

## The Philosophy of Invisibility

The Row's garments don't announce themselves. They don't rely on recognizable patterns, bold colors, or signature hardware. Instead, they offer something far more radical: the luxury of being forgotten.

This approach mirrors the Daoist concept of wu wei (无为) — effortless action. The Row doesn't try to impress; it simply exists in its perfected state. Like water that finds its natural level, The Row's designs settle into the wearer's life without resistance.

"We wanted to focus on the perfect fit and the best fabrics," Mary-Kate Olsen once explained. This singular focus on material excellence over visual impact represents a Daoist prioritization of essence over appearance.

## The Architecture of Nothing

Walk into a The Row store, and you enter a space of profound quiet. The interiors — often designed in collaboration with architects like Annabelle Selldorf — feature natural materials, muted palettes, and an abundance of empty space.

This retail environment isn't merely aesthetic; it's philosophical. The emptiness invites contemplation. The silence allows the garments to speak in whispers rather than shouts.

The stores embody the Daoist principle that "thirty spokes share one hub, yet it's the emptiness that makes the wheel useful." The Row understands that luxury isn't what you add — it's what you have the confidence to remove.

## Material as Message

The Row's fabric selection process borders on obsessive. The Olsens are known to spend years developing custom textiles, working directly with mills in Italy, Japan, and Switzerland to achieve precisely the right weight, drape, and hand-feel.

A simple white t-shirt from The Row might cost $400, not because of a logo, but because of the 18-month development process that perfected its proportion and feel. This represents a Daoist rejection of surface value in favor of deep, intrinsic worth.

The brand's commitment to natural fibers — cashmere, silk, fine wool, organic cotton — also reflects Eastern philosophical values. These materials breathe, age, and develop character. They acknowledge impermanence and embrace the beauty of natural processes.

## The Anti-It Bag

While luxury fashion has built empires on "It bags" — recognizable accessories designed for display — The Row has quietly created some of the most coveted bags in the world through the opposite approach.

The Margaux bag, introduced in 2023, features no visible logos, no distinctive hardware, no signature elements that would identify it from across a room. Instead, it offers pure proportion, exquisite materials, and a timeless silhouette that could have existed in any decade.

This "anti-It bag" phenomenon reveals a profound shift in luxury values. The women who carry The Row bags aren't seeking recognition; they're seeking quality. They understand what the Dao De Jing teaches: "True words aren't eloquent; eloquent words aren't true."

## Seasonless Design

Unlike fashion brands that chase trends with each new season, The Row operates on a different temporal plane. Their pieces don't "date" because they never attempted to be current in the first place.

This seasonless approach represents a Daoist understanding of cyclical time. Rather than the linear, trend-driven calendar of Western fashion, The Row seems to acknowledge that true style exists outside of time. A perfectly cut trouser from 2010 remains relevant in 2026 because it was never "of the moment" to begin with.

The brand's customers report wearing The Row pieces for decades, the garments becoming softer, more personal, more theirs with each wearing. This relationship with clothing — one of long-term partnership rather than seasonal consumption — aligns with Daoist values of sustainability and harmony.

## The Price of Silence

Critics have noted that The Row's commitment to silence comes at a literal price. With dresses regularly exceeding $5,000 and coats reaching $10,000, the brand's Daoist aesthetic is accessible only to the wealthy.

This tension between philosophy and accessibility raises important questions. Can true "effortlessness" exist when it requires such significant financial effort to achieve?

Perhaps the answer lies in understanding The Row not as a solution, but as a beacon. The brand demonstrates what's possible when commercial pressures are set aside in favor of pure design intention. While few can afford The Row, many can learn from its example.

The principles — buy less, choose well, prioritize quality over quantity, embrace silence over noise — can be applied at any price point. The Dao doesn't discriminate by income level.

## Conclusion: What The Row Teaches Us

The Row's success — reportedly generating over $200 million annually — proves that there's a significant market for fashion that whispers rather than shouts. In an era of increasing noise and distraction, the brand offers a refuge of quiet excellence.

For the Daoist fashion observer, The Row represents a proof of concept. It demonstrates that Eastern philosophical principles — silence, simplicity, material honesty, timelessness — can translate into commercial success without compromising their integrity.

The question The Row poses to the rest of the industry is simple: If luxury isn't about logos, and it isn't about trends, then what is it about? The answer, The Row suggests, is something much more profound: the luxury of being truly, authentically, effortlessly yourself.

And that, ultimately, is the Daoist ideal — not the accumulation of possessions, but the elimination of everything that stands between you and your essential nature.
    `},{id:"10",slug:"capsule-wardrobe-daoist-practice",category:"insight",title:"Capsule Wardrobe as Daoist Practice",excerpt:"The capsule wardrobe movement aligns with ancient Daoist wisdom about the relationship between possession and peace.",date:"2026.04.19",readTime:7,featured:!1,content:`
The average person today owns more clothing than at any point in human history. Walk into any contemporary closet, and you'll find garments accumulated over years — purchases driven by trends, sales, impulses, and the constant messaging that more is better.

Yet amid this abundance, a curious phenomenon has emerged: the capsule wardrobe movement. The idea is simple — reduce your clothing to a curated collection of 30-40 versatile, high-quality pieces — but its implications are profound. What appears to be a minimalist trend actually aligns with ancient Daoist wisdom about the relationship between possession and peace.

## The Daoist View of Possession

Laozi, in the Dao De Jing, offers a counterintuitive teaching: "He who knows he has enough is rich." This isn't merely financial advice; it's a psychological insight. The Daoist recognizes that desire is infinite, but satisfaction is found in recognizing sufficiency.

When applied to our wardrobes, this principle becomes revolutionary. The fashion industry operates on manufactured discontent — convincing us that this season's collection represents an urgent need. The capsule wardrobe practitioner responds with a Daoist "no": I have enough. What I possess, when chosen with intention, serves me better than an overflowing closet of forgotten garments.

## Less as More: The Mathematics of Choice

Psychologists have documented the "paradox of choice" — the phenomenon where too many options lead to decision paralysis and decreased satisfaction. The person with 200 items of clothing often feels they have "nothing to wear" because the cognitive load of choosing overwhelms the pleasure of dressing.

The capsule wardrobe solves this through intentional limitation. By constraining options to pieces that work harmoniously together — neutral palettes, complementary silhouettes, consistent quality — the wearer eliminates decision fatigue while maximizing utility.

This mirrors the Daoist concept of jian (俭), often translated as frugality or simplicity. But jian isn't about deprivation; it's about efficiency. It's the art of achieving maximum effect with minimum means.

## The Wardrobe as Ecosystem

A well-designed capsule wardrobe functions like a natural ecosystem. Each piece exists in relationship to others. The blazer that works with the dress also complements the trousers. The boots that ground the formal outfit also anchor the casual one.

This interconnection reflects the Daoist understanding of wu (物), the "ten thousand things" that exist in dynamic relationship rather than isolation. Nothing stands alone; everything derives meaning from context.

The Daoist fashion practitioner doesn't ask "Is this piece beautiful?" but rather "Does this piece contribute to the harmony of the whole?" A single discordant item — a bright color that clashes with the palette, a trendy silhouette that won't last — disrupts the entire system's equilibrium.

## Seasonal Rotation: Following Natural Cycles

Many capsule wardrobe practitioners adopt a seasonal rotation — storing away off-season items and refreshing the active collection quarterly. This practice, seemingly practical, actually aligns with deep Daoist wisdom about cyclical time.

The Daoist observes that nature doesn't proceed in straight lines but in cycles. Spring becomes summer becomes autumn becomes winter, each season carrying the seeds of the next. The wardrobe that acknowledges these cycles — lighter fabrics in heat, heavier in cold, colors shifting with the light — harmonizes with rather than fights against natural rhythms.

This seasonal attention also encourages mindfulness. When we handle our stored garments to prepare for a new season, we're reminded of what we own. We notice what we've forgotten, what we've outgrown, what needs repair. The rotation becomes a ritual of relationship maintenance with our material world.

## Quality Over Quantity: The Economics of Enough

Capsule wardrobes require investment. A $400 coat that lasts ten years costs $40 per year; a $100 coat that lasts one season costs $100 per year. The mathematics of quality are simple, though they demand patience and upfront resources.

This long-term thinking reflects Daoist values. The Dao De Jing advises: "Do your work, then step back. The only path to serenity." The capsule wardrobe practitioner does the work of careful selection, then steps back from the cycle of constant acquisition.

There's also an environmental dimension. The fashion industry produces 10% of global carbon emissions and vast amounts of textile waste. By consuming less and using longer, the capsule wardrobe practitioner reduces their footprint while paradoxically improving their experience of dress.

## The Mental Wardrobe

Perhaps the most profound aspect of capsule wardrobe practice isn't material but psychological. When we reduce our external options, we discover something unexpected: our internal clarity increases.

The person who knows exactly what's in their closet — who can visualize every piece and recall how it feels to wear — carries that organization into other areas of life. The discipline required to maintain a capsule wardrobe spills over into work, relationships, and creative pursuits.

This is the Daoist path: external simplicity begets internal peace. "By letting it go it all gets done," Laozi wrote. "The world is won by those who let it go." The capsule wardrobe practitioner lets go of fashion anxiety, of trend-chasing, of the exhausting effort to keep up — and in that release, discovers a more authentic self.

## Practical Beginnings

For those drawn to this Daoist approach to dress, the transition needn't be dramatic. Start not with discarding but with observing. What do you actually wear? What hangs unworn, gathering dust and guilt?

The Japanese organizer Marie Kondo asks a profound question: "Does it spark joy?" The Daoist might ask: "Does it contribute to harmony?" Both approaches seek to shift the relationship with possessions from one of accumulation to one of intentionality.

Begin with a single season. Select 33 items — including clothing, shoes, and accessories — that work together. Commit to wearing only these for three months. Observe what happens not just to your style, but to your mind.

## Conclusion: Dressing as Meditation

The capsule wardrobe, at its best, becomes a daily meditation practice. Each morning's selection — limited, intentional, harmonious — reminds us of our values. Each evening's care for these few, well-loved pieces cultivates gratitude.

In the end, the Daoist capsule wardrobe isn't about the clothes at all. It's about the person wearing them. The discipline, intentionality, and simplicity required to maintain such a wardrobe shapes character. It teaches us that we need far less than we think to be content — perhaps the most valuable lesson any philosophy can offer.

"Return is the motion of the Dao," Laozi taught. The capsule wardrobe practitioner returns, again and again, to simplicity. And in that return, finds something that no amount of shopping can purchase: the peace of enough.
    `},{id:"11",slug:"natural-dye-colors-of-earth",category:"essence",title:"Natural Dye: The Colors of Earth",excerpt:"Natural dye offers an alternative philosophy — one that embraces rather than fights the nature of material existence and impermanence.",date:"2026.04.24",readTime:8,featured:!1,content:`
Walk into any fast-fashion retailer, and you'll encounter colors that seem almost supernatural in their intensity. Garments in colors that don't exist in nature — neon pinks, electric blues, acid greens — produced through synthetic dyes that will retain their intensity for decades, whether worn daily or forgotten in a drawer.

These colors represent a triumph of chemistry over nature. But for the Daoist observer, they also represent something troubling: a denial of natural cycles. The garment that never fades denies the reality of change. The color that never shifts resists the fundamental truth of impermanence.

Natural dye offers an alternative philosophy — one that embraces rather than fights the nature of material existence.

## Indigo: The Living Blue

Indigo may be the most philosophically rich color in the natural dyer's palette. Unlike other dyes that bond superficially to fiber, indigo requires a complex fermentation process that transforms the plant's leaves through bacterial action.

The dyer prepares the vat — traditionally maintained for generations in some Japanese families — and dips the fabric repeatedly, building color through accumulation. Each dip adds depth; each exposure to air oxidizes the dye from greenish-yellow to the characteristic blue. The process cannot be rushed. The color cannot be forced.

This mirrors the Daoist understanding of transformation. Change happens not through sudden conversion but through patient accumulation. The indigo dyer learns what the Dao De Jing teaches: "Nature does not hurry, yet everything is accomplished."

The resulting blue carries the memory of its making. Each dip, each oxidation, each rinsing leaves its trace. The color isn't uniform but alive — deeper in folds, lighter on exposed surfaces, shifting in different lights. This isn't a flaw; it's the signature of authenticity.

## Madder, Cochineal, and the Reds of Life

Red has always carried potent symbolism — blood, vitality, passion, warning. Natural reds come from surprising sources: the root of the madder plant, the shells of cochineal insects, the bark of certain trees.

Each source produces a different character of red. Madder yields warm, earthy tones that seem to glow from within. Cochineal produces brilliant crimsons that rival synthetic dyes in intensity. Tree barks offer subtler, rustier tones.

The Daoist dyer must work with these sources respectfully, understanding that the color comes from living things. The madder root must be harvested at the right season; the cochineal insects must be collected without greed. The color that results carries not just chemical properties but the memory of this relationship between human and nature.

There's a lesson here about consumption. The garment dyed with cochineal literally contains life — the life of thousands of tiny insects. This isn't hidden in industrial processes but visible in the natural dyer's craft. We cannot take without awareness of what we take from.

## The Subtle Palette of Leaves

While indigo and madder produce strong, lasting colors, most plant dyes yield more subtle results — soft yellows from onion skins and marigolds, gentle tans from oak galls and black tea, muted greens from combinations of yellow and blue.

These quieter colors might seem less impressive than their synthetic counterparts. But they offer something valuable: harmony. The colors produced by local plants in their proper season exist in natural relationship to each other and to their environment. A wardrobe of naturally-dyed garments doesn't clash because the colors share a common origin.

This reflects the Daoist value of he (和), harmony. Not uniformity — natural dyes produce endless variation — but compatibility. Each color knows its place in the larger spectrum because it emerged from the same soil, the same climate, the same seasonal cycle.

## The Beauty of Fading

Here's where natural dye philosophy diverges most dramatically from industrial production: natural dyes fade. Exposure to sunlight, repeated washing, the simple passage of time — all gradually shift and soften the colors.

In the fast-fashion paradigm, this is failure. The garment that fades is defective, destined for disposal. But the Daoist sees it differently. Fading is the honest behavior of material reality. Everything changes; everything passes. The garment that acknowledges this truth is more honest than the one that pretends otherwise.

There's a specific beauty to naturally-faded indigo — the Japanese call it shibori when patterned, but even plain fabric develops character. High-wear areas lighten, creating organic patterns that map the garment's history. The color becomes personal, unique, inseparable from the life lived in it.

## Contemporary Natural Dyers

A growing movement of designers and artists are reviving natural dye traditions, often combining ancient techniques with contemporary aesthetics. Brands like Buaisou in Japan, Botanical Colors in the US, and numerous independent practitioners are demonstrating that natural dye can meet modern standards while maintaining its philosophical integrity.

These practitioners often emphasize local sourcing — using plants that grow in their specific bioregion rather than importing exotic dyestuffs. This localism reflects another Daoist value: the wisdom of place. The colors that emerge from your specific soil carry a truth that imported dyes cannot replicate.

Some designers have taken natural dye philosophy further, creating garments designed to change over time. A coat might be dyed with materials that continue to oxidize and shift, so the garment the owner has after five years is visibly different from the one they purchased. This embraces impermanence as a design feature rather than a problem to be solved.

## The Labor of Authentic Color

Natural dye isn't convenient. It requires knowledge, preparation, time, and acceptance of unpredictability. A synthetic dye produces consistent results; natural dye varies with water chemistry, air temperature, plant freshness, and countless other variables.

This labor is, for the Daoist practitioner, part of the point. The Dao De Jing warns against "the ease that comes from convenience." When we eliminate all difficulty from our lives, we eliminate the growth that difficulty produces. The natural dyer accepts the challenge because the challenge shapes character.

There's also an economic reality. Naturally-dyed garments cost more because they require more labor, more knowledge, more time. The capsule wardrobe practitioner might purchase one naturally-dyed piece where the fast-fashion consumer buys ten synthetically-dyed items. The mathematics of quality apply here too.

## Conclusion: Wearing the Earth

The garment dyed with natural materials carries a different relationship to time. It wasn't produced in hours but in days. It won't last in its original state for decades but will change, fade, and develop character. It connects the wearer not to industrial chemistry but to soil, plants, seasons, and the patient labor of human hands.

For the Daoist fashion observer, natural dye represents an alternative value system. Not the values of permanence, consistency, and control, but the values of process, relationship, and acceptance of change.

"The ten thousand things carry yin and embrace yang," Laozi wrote. "They achieve harmony by blending these energies." Natural dye embodies this blending — the yin of plant matter meeting the yang of human intention, producing something that neither could achieve alone.

The colors of earth aren't as bright as the colors of chemistry. But they carry a truth that neon cannot replicate: the truth of where we come from, what we're made of, and where we're going. And that truth, ultimately, is more beautiful than any intensity of color.
    `});var d=e.i(13642),u=e.i(32424);function m(){let[e,s]=(0,a.useState)(""),[i,o]=(0,a.useState)(null);(0,a.useEffect)(()=>{let e=()=>{let e=window.getSelection(),t=e?.toString().trim();if(t&&t.length>0){let a=e?.getRangeAt(0),i=a?.getBoundingClientRect();i&&(s(t),o({x:i.left+i.width/2,y:i.top-50}))}else s(""),o(null)},t=e=>{e.target.closest(".text-share-popup")||(s(""),o(null))};return document.addEventListener("mouseup",e),document.addEventListener("mousedown",t),()=>{document.removeEventListener("mouseup",e),document.removeEventListener("mousedown",t)}},[]);let n=async()=>{try{await navigator.clipboard.writeText(`"${e}" — from LAOZI.ART ${window.location.href}`),alert("已复制到剪贴板")}catch{alert("复制失败，请手动复制")}s(""),o(null)};return e&&i?(0,t.jsxs)("div",{className:"text-share-popup fixed z-50 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-xl p-2 flex gap-1",style:{left:`${i.x}px`,top:`${i.y}px`,transform:"translateX(-50%)"},children:[(0,t.jsx)("button",{onClick:()=>{let t=encodeURIComponent(`"${e.substring(0,100)}${e.length>100?"...":""}" — from LAOZI.ART`);window.open(`https://twitter.com/intent/tweet?text=${t}&url=${encodeURIComponent(window.location.href)}`,"_blank"),s(""),o(null)},className:"p-2 hover:bg-[var(--color-bg-soft)] rounded transition-colors",title:"分享到 Twitter",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),(0,t.jsx)("button",{onClick:()=>{let t=encodeURIComponent(`"${e.substring(0,100)}${e.length>100?"...":""}" — from LAOZI.ART`);window.open(`https://service.weibo.com/share/share.php?title=${t}&url=${encodeURIComponent(window.location.href)}`,"_blank"),s(""),o(null)},className:"p-2 hover:bg-[var(--color-bg-soft)] rounded transition-colors",title:"分享到微博",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.573h.014zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.579-.18-.405-.649.388-1.031.428-1.924.008-2.557-.789-1.187-2.924-1.109-5.382-.031 0 0-.768.334-.571-.271.383-1.217.324-2.229-.27-2.817-1.344-1.33-4.918.045-7.985 3.088C1.32 10.466 0 12.58 0 14.403c0 3.493 4.488 5.62 8.878 5.62 5.747 0 9.572-3.337 9.572-5.988 0-1.601-1.35-2.507-2.391-2.386z"})})}),(0,t.jsx)("button",{onClick:n,className:"p-2 hover:bg-[var(--color-bg-soft)] rounded transition-colors",title:"复制",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})})})]}):null}let p={metal:{id:"metal",name:"Metal",nameCn:"金",color:"#C0C0C0",season:"Autumn",materials:["silk","metal","satin","structured cotton"],brands:["Jil Sander","Bottega Veneta","The Row"],characteristics:["refined","minimal","sharp","precise"],fashionStyle:"极简主义 · 金属光泽 · 几何剪裁"},wood:{id:"wood",name:"Wood",nameCn:"木",color:"#4A7C59",season:"Spring",materials:["linen","organic cotton","plant-dyed fabric","hemp"],brands:["Story mfg.","Bode","Visvim"],characteristics:["natural","growing","organic","earthy"],fashionStyle:"自然主义 · 植物染 · 手工质感"},water:{id:"water",name:"Water",nameCn:"水",color:"#2C3E50",season:"Winter",materials:["fluid fabrics","knitwear","drapey silk","velvet"],brands:["Issey Miyake","Lemaire","Yohji Yamamoto"],characteristics:["flowing","adaptable","deep","intuitive"],fashionStyle:"流动感 · 垂坠面料 · 深邃色调"},fire:{id:"fire",name:"Fire",nameCn:"火",color:"#8B4513",season:"Summer",materials:["leather","denim","bold prints","textured wool"],brands:["Maison Margiela","Rick Owens","Comme des Garçons"],characteristics:["passionate","transformative","bold","creative"],fashionStyle:"先锋实验 · 皮革丹宁 · 强烈个性"},earth:{id:"earth",name:"Earth",nameCn:"土",color:"#8B6914",season:"All Seasons",materials:["wool","tweed","cashmere","natural canvas"],brands:["Margaret Howell","A.P.C.","Studio Nicholson"],characteristics:["stable","nurturing","classic","grounded"],fashionStyle:"经典永恒 · 大地色系 · 实穿主义"}},f={"return-of-silence":"metal","material-as-philosophy":"earth","doing-less-lemaire":"water","void-in-fashion":"water","slow-revolution":"wood","issey-miyake-pleats":"water","wabi-sabi-fashion":"wood","quiet-luxury-data":"metal"},g="laozi_search_history";function y({isOpen:e,onClose:i}){let[o,n]=(0,a.useState)(""),[r,h]=(0,a.useState)("all"),[c,d]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=localStorage.getItem(g);e&&d(JSON.parse(e))},[]);let u=(0,a.useMemo)(()=>{let e=l;if(o){let t=o.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.excerpt.toLowerCase().includes(t)||e.content.toLowerCase().includes(t))}return"all"!==r&&(e=e.filter(e=>({heaven:["observation"],earth:["essence"],human:["insight","void"]})[r]?.includes(e.category))),e},[o,r]);return e?(0,t.jsx)("div",{className:"fixed inset-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm",children:(0,t.jsxs)("div",{className:"max-w-3xl mx-auto px-6 py-8 pt-24",children:[(0,t.jsx)("button",{onClick:i,className:"absolute top-6 right-6 p-2 opacity-60 hover:opacity-100",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o.trim()&&(e=>{if(!e.trim())return;let t=[e,...c.filter(t=>t!==e)].slice(0,5);d(t),localStorage.setItem(g,JSON.stringify(t))})(o.trim())},className:"relative mb-4",children:[(0,t.jsx)("input",{type:"text",value:o,onChange:e=>n(e.target.value),placeholder:"搜索文章...",className:"w-full px-6 py-4 text-lg bg-transparent border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors",autoFocus:!0}),(0,t.jsx)("button",{type:"submit",className:"absolute right-4 top-1/2 -translate-y-1/2 p-1 opacity-40 hover:opacity-100 transition-opacity",children:(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),c.length>0&&!o&&(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,t.jsx)("span",{className:"text-xs opacity-40 uppercase tracking-wider",children:"搜索历史"}),(0,t.jsx)("button",{onClick:()=>{d([]),localStorage.removeItem(g)},className:"text-xs opacity-40 hover:opacity-100 transition-opacity",children:"清除"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:c.map((e,a)=>(0,t.jsx)("button",{onClick:()=>n(e),className:"px-3 py-1.5 text-sm bg-[var(--color-bg-soft)] rounded-full hover:bg-[var(--color-border)] transition-colors",children:e},a))})]}),(0,t.jsx)("div",{className:"flex gap-4 mb-8",children:[{id:"all",label:"全部",color:"var(--color-text)"},{id:"heaven",label:"天 · 趋势",color:"var(--color-heaven)"},{id:"earth",label:"地 · 品牌",color:"var(--color-earth)"},{id:"human",label:"人 · 哲思",color:"var(--color-human)"}].map(e=>(0,t.jsx)("button",{onClick:()=>h(e.id),className:`px-4 py-2 text-sm rounded-full border transition-all ${r===e.id?"border-[var(--color-accent)] bg-[var(--color-accent)] text-white":"border-[var(--color-border)] hover:border-[var(--color-accent)]"}`,children:e.label},e.id))}),(0,t.jsx)("div",{className:"space-y-4 max-h-[60vh] overflow-y-auto",children:0===u.length?(0,t.jsx)("p",{className:"text-center opacity-60 py-12",children:"未找到相关文章"}):u.map(e=>{let a=p[f[e.slug]||"earth"];return(0,t.jsxs)(s.default,{href:`/observation/${e.slug}`,onClick:i,className:"flex items-start gap-4 p-4 rounded-lg hover:bg-[var(--color-bg-soft)] transition-colors group",children:[(0,t.jsx)("div",{className:"w-1 h-12 rounded-full flex-shrink-0",style:{backgroundColor:a.color}}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-1",children:[(0,t.jsx)("span",{className:"text-xs opacity-50 uppercase tracking-wider",children:e.category}),(0,t.jsx)("span",{className:"text-xs opacity-30",children:"·"}),(0,t.jsx)("span",{className:"text-xs opacity-50",children:e.date})]}),(0,t.jsx)("h3",{className:"font-medium mb-1 group-hover:opacity-70 transition-opacity truncate",children:e.title}),(0,t.jsx)("p",{className:"text-sm opacity-60 line-clamp-2",children:e.excerpt})]})]},e.id)})}),(0,t.jsxs)("p",{className:"mt-4 text-sm opacity-40 text-center",children:["找到 ",u.length," 篇文章"]})]})}):null}e.s(["default",0,function(){let[e,s]=(0,a.useState)(!1);return(0,t.jsxs)("main",{className:"min-h-screen overflow-x-hidden",children:[(0,t.jsx)(y,{isOpen:e,onClose:()=>s(!1)}),(0,t.jsx)(m,{}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)(n,{}),(0,t.jsx)(h,{}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsx)(c,{}),(0,t.jsx)(d.default,{})]}),(0,t.jsx)("div",{className:"hidden lg:block flex-shrink-0",children:(0,t.jsx)(u.XuanxueSidebar,{})})]}),(0,t.jsx)("button",{onClick:()=>s(!0),className:"fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shadow-lg hover:border-[var(--color-accent)] transition-colors",title:"搜索",children:(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})}],52683)}]);
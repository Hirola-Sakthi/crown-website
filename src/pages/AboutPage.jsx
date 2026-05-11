import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Testimonials from '../components/Testimonials'

/**
 * About C page — exact replica of https://lovio.webflow.io/about/about-c
 *
 * Structure (from the scraped HTML, in order):
 *   1. .section-hero.page  →  border-top + subtitle.png + "who we are" + "About Lovio" h1 + paragraph + border-down margin
 *   2. .section.first      →  3-col image grid (about_2/1/3)
 *                              .text-about (extra.png + "Who we are" + paragraph)
 *                              2-col image grid (about_5/6) using `.grid-2-columns.about`
 *                              .text-about (extra.png + "Our process" + paragraph)
 *                              "Featured in" subtitle on a horizontal divider line
 *                              6-logo .grid-press.margin
 *                              3-col image grid (about_7/8/9)
 *   3. .section            →  Testimonials slider (reused from homepage)
 *
 * The h3 + p inside .text-about are bare (no class names) — Webflow's base
 * typography (Marcellus h3, paragraphs color, etc.) handles them via the
 * global element selectors in webflow.css.
 */
export default function AboutPage() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref}>
      {/* ============ 1. HERO ============ */}
      <div className="section-hero page">
        <div className="content">
          <div className="hero-top">
            <div className="border-top" data-hero-reveal></div>
            <img
              src="/images/subtitle.png"
              loading="lazy"
              alt=""
              width="62"
              className="image-subtitle"
              data-hero-reveal
            />
            <div className="subtitle" data-hero-reveal>
              who we are<br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>About Lovio</h1>
            <p className="paragraph margin" data-hero-reveal>
              Metus ultricies ut at faucibus. Fames eget imperdiet sit ipsum
              pellentesque pretium. Adipiscing egestas tellus eu imperdiet pellentesque
              orci.
            </p>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div>

      {/* ============ 2. MAIN ABOUT CONTENT ============ */}
      <div className="section first">
        <div className="content">
          {/* 3-col image strip: about_2 / about_1 / about_3 */}
          <div className="w-layout-grid grid-3-columns">
            <div className="overflow-image" data-reveal>
              <img src="/images/about_2.jpg" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img src="/images/about_1.jpg" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.3">
              <img src="/images/about_3.jpg" loading="lazy" alt="" className="image about" />
            </div>
          </div>

          {/* "Who we are" text block */}
          <div className="text-about" data-reveal>
            <img
              src="/images/extra.png"
              loading="lazy"
              alt=""
              width="70"
              className="image-extra"
            />
            <h3>Who we are</h3>
            <p>
              Gravida accumsan cras arcu hac vestibulum viverra. Ridiculus ut tincidunt
              accumsan id etiam sed posuere. Cursus tortor imperdiet urna ipsum. Lacus
              at cras enim arcu feugiat ac felis orci nunc. Ac purus ut auctor faucibus.
              Egestas scelerisque ornare posuere sed adipiscing mauris congue viverra
              sit.
              <br /><br />
              Ac quisque quis id amet, odio mauris faucibus fames. Sagittis semper
              laoreet fusce ac velit vulputate est. Urna tempus in vitae risus sed
              nascetur aliquet. Faucibus nascetur nibh. Cursus purus ut auctor faucibus
              ornare posuere.
            </p>
          </div>

          {/* 2-col image strip: about_5 / about_6 */}
          <div className="w-layout-grid grid-2-columns about">
            <div className="overflow-image" data-reveal>
              <img className="image about" src="/images/about_5.jpg" loading="lazy" alt="" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img className="image about" src="/images/about_6.jpg" loading="lazy" alt="" />
            </div>
          </div>

          {/* "Our process" text block */}
          <div className="text-about" data-reveal>
            <img
              src="/images/extra.png"
              loading="lazy"
              alt=""
              width="70"
              className="image-extra"
            />
            <h3>Our process</h3>
            <p>
              Feugiat massa in consectetur ac, quis amet nulla. Ac purus massa quis
              massa et. Amet, nisi, neque augue habitasse semper tempor ultricies. Massa
              sed in elit, commodo. Scelerisque turpis aliquam, urna aenean.
              <br /><br />
              At vel dui egestas eget et sodales. Dis nisl adipiscing pulvinar sit dolor
              diam sit gravida leo. Ut sed eu, felis sed odio. Scelerisque fringilla sed
              viverra consectetur sagittis, nisl id nunc vestibulum. In viverra diam
              quis ut nibh lorem aliquet sagittis, vehicula. Gravida suscipit malesuada
              elementum pharetra pharetra. Ut et auctor ultrices non.
            </p>
          </div>

          {/* "Featured in" — text on a horizontal gradient line */}
          <div className="block-subtitle-border" data-reveal>
            <div className="subtitle-border">
              Featured in<br />
            </div>
          </div>

          {/* 6 press logos — class .press.logo-N controls border-left/right behaviour */}
          <div className="w-layout-grid grid-press margin" data-reveal-group>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className={`press logo-${n}`} data-reveal-child>
                <img
                  src={`/images/sample_logo_${n}.svg`}
                  loading="lazy"
                  alt=""
                  className="press-logo"
                />
              </div>
            ))}
          </div>

          {/* 3-col image strip: about_7 / about_8 / about_9 */}
          <div className="w-layout-grid grid-3-columns" style={{ marginTop: '76px' }}>
            <div className="overflow-image" data-reveal>
              <img src="/images/about_7.jpg" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img src="/images/about_8.jpg" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.3">
              <img src="/images/about_9.jpg" loading="lazy" alt="" className="image about" />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 3. TESTIMONIALS ============ */}
      <Testimonials />
    </div>
  )
}

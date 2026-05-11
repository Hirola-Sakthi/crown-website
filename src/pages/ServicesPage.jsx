import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Testimonials from '../components/Testimonials'

/**
 * Services A page — exact replica of https://lovio.webflow.io/services/services-a
 *
 * Structure (from the scraped HTML, in order):
 *   1. .section-hero.page  →  border-top + subtitle img + "Services" + h1 + border-down margin
 *   2. .section.first      →  Weddings: text LEFT, image RIGHT (flower_5 as flower---a)
 *   3. .section            →  Event Design: image LEFT, text RIGHT (flower_2 as flower---b)
 *   4. .section            →  Branding: text LEFT, image RIGHT (flower_4 as flower---a variant)
 *   5. .section            →  Testimonials slider (reused from homepage)
 *
 * Each block uses `.w-layout-grid.grid-2-columns` (1fr 1fr), NOT grid-services---c.
 * Decorative flowers live INSIDE .block-image with .flower---a / .flower---b classes,
 * which the Webflow CSS positions absolutely at the bottom corners of the image.
 *
 * Mobile (≤767px) reorders blocks 1 and 3 so the image appears above the text — this
 * is handled by Webflow's CSS via the node-IDs on the .block-image divs.
 */
export default function ServicesPage() {
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
              Services<br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>Our Services</h1>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div>

      {/* ============ 2. WEDDINGS — text left, image right ============ */}
      <div className="section first">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <img
                src="/images/service_icon_1.png"
                loading="lazy"
                width="69"
                alt=""
                className="icon-flower"
              />
              <h3 className="heading">Weddings</h3>
              <p className="paragraph">
                Purus quam elit, ligula morbi facilisis. Nisl id nisi, mattis eget elit etiam risus commodo, congue. Vitae placerat tincidunt adipiscing id porta sed. Gravida nulla mi felis gravida odio.
                <br /><br />
                Aliquam morbi in euismod aliquet pretium.<br />
                Augue bibendum proin tempus non, massa aliquet. Egestas nisi ultrices curabitur.
              </p>
            </div>
            <div
              id="w-node-bb127e2e-cfb0-af59-52fb-e7ade1277139-a31abeb8"
              className="block-image"
              data-reveal
            >
              <div className="overflow-image">
                <img
                  className="image"
                  src="/images/img_1.jpg"
                  alt="Weddings"
                  loading="lazy"
                />
              </div>
              <img
                src="/images/flower_5.png"
                loading="eager"
                alt=""
                className="flower---a"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 3. EVENT DESIGN — image left, text right ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-image" data-reveal>
              <div className="overflow-image">
                <img
                  className="image"
                  src="/images/img_3.jpg"
                  alt="Event Design"
                  loading="lazy"
                />
              </div>
              <img
                src="/images/flower_2.png"
                loading="eager"
                alt=""
                className="flower---b"
              />
            </div>
            <div className="block-text" data-reveal>
              <img
                src="/images/service_icon_2.png"
                loading="lazy"
                width="69"
                alt=""
                className="icon-flower"
              />
              <h3 className="heading">Event Design</h3>
              <p className="paragraph">
                Tincidunt lacus, adipiscing sed dictum turpis gravida arcu. Odio scelerisque commodo eu tincidunt odio pulvinar ullamcorper sit gravida. Nunc dui nunc, nulla sed convallis sed. Dictum venenatis facilisis ac adipiscing
                <br /><br />
                Aliquam suspendisse condimentum lobortis in. Augue vulputate egestas in porta fermentum nunc id arcu ultricies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ 4. BRANDING — text left, image right ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <img
                src="/images/service_icon_3.png"
                loading="lazy"
                width="69"
                alt=""
                className="icon-flower"
              />
              <h3 className="heading">Branding</h3>
              <p className="paragraph">
                Viverra commodo eget amet ut. Nisl velit scelerisque malesuada commodo ullamcorper integer. Et vestibulum morbi.
                <br /><br />
                Lobortis faucibus tortor sed amet, cras. Fringilla orci cras eget consequat, ut viverra sed. Ornare faucibus nibh eget id euismod viverra ut porttitor. Augue consectetur elit consectetur nisl, et vel. Libero tellus dolor nibh diam.
              </p>
            </div>
            <div
              id="w-node-_67dae5bd-5d11-3d93-0d20-a10fcf8b3987-a31abeb8"
              className="block-image"
              data-reveal
            >
              <div className="overflow-image">
                <img
                  className="image"
                  src="/images/img_1.jpg"
                  alt="Branding"
                  loading="lazy"
                />
              </div>
              <img
                src="/images/flower_4.png"
                loading="eager"
                alt=""
                className="flower---a variant"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 5. TESTIMONIALS ============ */}
      <Testimonials />
    </div>
  )
}

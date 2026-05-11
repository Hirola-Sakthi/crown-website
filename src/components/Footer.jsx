import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { instagramImages } from '../data/content'

export default function Footer() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} className="section-footer">
      <div className="content">
        <div className="border-footer"></div>
        <div className="block-heading" data-reveal>
          <h3 className="heading">Instagram</h3>
        </div>
        <div className="w-layout-grid grid-instagram" data-reveal-group>
          {instagramImages.map((src, i) => (
            <a
              href="https://www.instagram.com/webflow/"
              target="_blank"
              rel="noopener noreferrer"
              className={`overflow-instagram ${i % 2 === 0 ? 'margin' : ''} w-inline-block`}
              key={src}
              data-reveal-child
            >
              <img src={src} loading="lazy" alt="" className="image-instagram" />
            </a>
          ))}
        </div>
        <div className="w-layout-grid grid-footer">
          <div className="block-footer">
            <h5 className="heading-footer">Social</h5>
            <a
              href="https://www.instagram.com/webflow/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-footer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/webflow/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-footer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/webflow/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-footer"
            >
              Twitter
            </a>
          </div>
          <div className="block-footer border">
            <h5 className="heading-footer">Quick Links</h5>
            <a
              href="/template-info/licensing"
              className="link-footer"
              onClick={(e) => e.preventDefault()}
            >
              Licensing
            </a>
            <a
              href="/template-info/style-guide"
              className="link-footer"
              onClick={(e) => e.preventDefault()}
            >
              Style Guide
            </a>
            <a
              href="/template-info/changelog"
              className="link-footer"
              onClick={(e) => e.preventDefault()}
            >
              Changelog
            </a>
          </div>
        </div>
        <div className="block-footer">
          <img src="/images/logo.svg" loading="lazy" alt="Lovio" className="logo-footer" />
          <a
            href="https://webflow.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-footer"
          >
            Powered by Webflow
          </a>
          <a
            href="https://webflow.com/templates/designers/maxim-white"
            target="_blank"
            rel="noopener noreferrer"
            className="link-footer"
          >
            Made by Maxim W.
          </a>
        </div>
      </div>
    </div>
  )
}

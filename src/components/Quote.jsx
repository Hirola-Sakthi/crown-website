import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Quote() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} className="section">
      <div className="content">
        <div className="block-extra" data-reveal>
          <img
            src="/images/extra.png"
            loading="lazy"
            alt=""
            width="70"
            className="image-extra"
          />
          <h4 className="heading-extra">
            Your wedding should be utterly unforgettable, deeply romantic, exquisitely beautiful and entirely "you".
          </h4>
          <p className="paragraph">
            Lectus sit turpis iaculis eu non sed turpis suscipit facilisi. Lorem morbi non morbi id aliquam. Urna adipiscing odio.
          </p>
          <div className="signature">Lynn Goodman</div>
        </div>
      </div>
    </div>
  )
}

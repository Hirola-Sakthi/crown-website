import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function PostcardAbout() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} className="section">
      <div className="content">
        <div className="w-layout-grid grid-postcard">
          <div
            id="w-node-a38a8908-1dc6-e0b5-39a4-e35f06688720-6c01f26c"
            className="postcard---block-right"
            data-reveal
          >
            <div className="postcard-text">
              <img
                src="/images/subtitle.png"
                loading="lazy"
                alt=""
                width="62"
                className="image-subtitle"
              />
              <div className="subtitle">
                who we are
                <br />
              </div>
              <h2 className="heading">Weave story into every thread of your event</h2>
              <p className="paragraph">
                Cras urna sed purus magna morbi morbi congue suspendisse. Est faucibus hendrerit donec nisi, feugiat suscipit eu, sit. Orci euismod nibh.
              </p>
              <a
                href="/about/about-a"
                className="button w-button"
                onClick={(e) => e.preventDefault()}
              >
                more about us
              </a>
            </div>
          </div>

          <div
            id="w-node-d2924451-e09a-bd31-2cf5-d17c83bb6e82-6c01f26c"
            className="postcard---image"
          >
            <div className="overflow-image">
              <img
                className="image"
                src="/images/img_4.jpg"
                alt=""
                loading="lazy"
                data-reveal
                data-reveal-distance="50"
              />
            </div>
            <img
              src="/images/flower_1.png"
              loading="eager"
              alt=""
              className="flower-postcard---a"
              data-reveal
              data-reveal-distance="0"
              data-reveal-delay="0.3"
            />
            <img
              src="/images/flower_3.png"
              loading="eager"
              alt=""
              className="flower-postcard---b"
              data-reveal
              data-reveal-distance="0"
              data-reveal-delay="0.5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

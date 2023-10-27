import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Spacing from "./assets/spacing.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
import Dont_2 from "./assets/don't_2.svg"
import Do_2 from "./assets/do_2.svg"
import Size from "./assets/size.svg"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo">
        <div>
          <p>coming soon</p>
        </div>
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <p>
        Accordions can be used to group and hide content to keep an interface
        clean and reduce clutter. Accordions can be used to display only one or
        multiple panels at a time, depending on the use case.
      </p>

      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Page title and link</li>
            <li>Chevron separator</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Breadcrumb has seven states available for breadcrumb items — enabled,
        hover, active, focus, visited, disabled and read-only.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
      <p>
        If a breadcrumb bar will exceed the content width one option is to wrap
        the full breadcrumb trail to allow overflow to the next line.
      </p>
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-3">
        Rich text editor size varies based on the tab where it is used. The size
        can relatively vary depending on the context.
      </p>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Use only when the navigation has more than two levels of depth.
          </li>
          <li>
            Use only when it’s necessary to inform users of their location.
          </li>
          <li>
            Place breadcrumbs in the top left corner, typically above the page
            title.
          </li>
          <li>
            Breadcrumbs are especially useful when users are likely to have
            landed on the page from an outside source.
          </li>
          <li>
            Show progress from the highest navigation level to the lowest,
            without skipping a step.
          </li>
          <li>
            Use the exact section names. For example, don’t shorten My
            Applications to Applications.
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img src={Do_1} className="mt-2 mb-2 placeholder_img" />

          <p>
            Button styles should reflect the priority of actions required in the
            interface.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>Same view must not have more than one primary button.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Content
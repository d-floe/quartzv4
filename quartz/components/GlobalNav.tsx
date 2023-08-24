import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/GlobalNav.scss"

// @ts-ignore
import script from "./scripts/nav-btn.inline"


export default (() => {
    function GlobalNav() { 
    return (
        <div class="gb-nav">
          <button type="button" id="nav-btn">
            <h3>Navigation</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fold"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <nav>
            <ul class="overflow-nav">
                <ul>
                <li>📁 <a href="/" class="internal">index</a> <ul>
                    <li>📂 <a href="/art" class="internal">art</a>
                        <ul>
                            <li>📄 <a href="/art/color-precision" class="internal">Achieving Color Precision</a></li>
                            <li>📄 <a href="/art/clothing-and-folds" class="internal">Clothing and Folds</a></li>
                            <li>📄 <a href="/art/commission-sheet" class="internal">Commission Info</a></li>
                        </ul>
                    </li>
                    <li>📁 <a href="/keyboard-index" class="internal">keyboards</a>
                        <ul>
                            <li>📂 <a href="/tags/keycaps" class="internal">keycaps</a></li>
                            <li>📂 <a href="/tags/switches" class="internal">switches</a></li>
                            <li>📂 <a href="/tags/stabilizers" class="internal">stabilizers</a></li>
                            <li>📂 <a href="/tags/misc" class="internal">misc</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>
                </ul>
            </ul>
          </nav>
        </div>
      )
    }
    
    GlobalNav.css = style
    GlobalNav.afterDOMLoaded = script

    return GlobalNav
}) satisfies QuartzComponentConstructor
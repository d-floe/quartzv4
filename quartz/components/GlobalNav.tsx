import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/GlobalNav.scss"

export default (() => {
    function GlobalNav() {
        return <div class="global-nav">
        <ul>
        <li>📁 <a href="." class="internal">_index</a> <ul>
            <li>📂 <a href="./art" class="internal">art</a>
                <ul>
                <li>📄 <a href="./art/color-precision" class="internal">Achieving Color Precision</a>
                </li>
                <li>📄 <a href="./art/clothing-and-folds" class="internal">Clothing and Folds</a>
                </li>
                <li>📄 <a href="./art/commission-sheet" class="internal">Commission Info</a>
                </li>
                </ul>
            </li>
            <li>📁 <a href="./keyboard-index" class="internal">keyboards</a>
                <ul>
                <li>📂 <a href="./tags/keycaps" class="internal">keycaps</a>
                </li>
                <li>📂 <a href="./tags/switches" class="internal">switches</a>
                </li>
                <li>📂 <a href="./tags/stabilizers" class="internal">stabilizers</a>
                </li>
                <li>📂 <a href="./tags/misc" class="internal">misc</a>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </div>
    }

    GlobalNav.css = style

    return GlobalNav
}) satisfies QuartzComponentConstructor
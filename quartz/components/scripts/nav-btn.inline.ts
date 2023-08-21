
function toggleNavBtn(this: HTMLElement) {
  this.classList.toggle("collapsed")
  const content = this.nextElementSibling as HTMLElement
  content.classList.toggle("collapsed")
  content.style.maxHeight = content.style.maxHeight === "0px" ? content.scrollHeight + "px" : "0px"
}

function setupNavBtn() {
  const toc = document.getElementById("nav-btn")
  if (toc) {
    const content = toc.nextElementSibling as HTMLElement
    content.style.maxHeight = content.scrollHeight + "px"
    toc.removeEventListener("click", toggleNavBtn)
    toc.addEventListener("click", toggleNavBtn)
  }
}

window.addEventListener("resize", setupNavBtn)
document.addEventListener("nav", () => {
  setupNavBtn()
})

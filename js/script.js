const rootEl = document.querySelector(":root")
const selectEl = document.querySelector("#theme_options")


const handleChange = (e) => {
  rootEl.className = e.target.value  
}

selectEl.addEventListener('change', handleChange)
import { setStyleType } from "./TransientState.js"

const handleStyleType = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        setStyleType(parseInt(changeEvent.target.value))

    }
}

document.addEventListener("change", handleStyleType)




export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let optionsHTML = ""

    let divStringArray = styles.map(
        (style) => {
            return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
        }
    )
    optionsHTML += divStringArray.join(" ")

    return optionsHTML
}
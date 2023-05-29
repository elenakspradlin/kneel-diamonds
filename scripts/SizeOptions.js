import { setSize } from "./TransientState.js"

const handleSize = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        setSize(parseInt(changeEvent.target.value))

    }
}

document.addEventListener("change", handleSize)


export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()


    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = sizes.map(
        (size) => {
            return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}

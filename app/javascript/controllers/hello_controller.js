import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hello"
export default class extends Controller {
  // static targets = ["output"]
  // static values = { number: Number }

  initialize() {
    this.nameElement.value = this.name
  }

  connect() {
    // this.numberValueChanged()
  }

  clicked() {
    // this.numberValue++
  }

  numberValueChanged() {
    this.outputTarget.textContent = this.numberValue
  }

  log() {
    console.log(this.nameElement.value)
  }

  paste(event) {
    event.preventDefault();
    console.log("Pastes are not allowed")
  }

  get name() {
    if (this.data.has("name")) {
      return this.data.get("name")
    } else {
      return "Default User"
    }
  }

  get nameElement() {
    return this.targets.find("name")
  }
}

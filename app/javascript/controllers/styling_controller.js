import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="styling"
export default class extends Controller {
  static targets = ["button"]
  static classes = ["primary"]
  
  connect() {
    this.buttonTarget.classList.add(this.primaryClass)
  }

  clicked() {
    this.buttonTarget.classList.toggle(this.primaryClass)
  }
}
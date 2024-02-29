import { Controller } from "@hotwired/stimulus";
import $ from "jquery";

export default class extends Controller {
  connect() {
    console.log("logon controller connected");
    // this.element.textContent = "Hello World!"

    this.element.addEventListener("submit", (event) => {
      console.log("Form submitted!");

      const email = $("#email").val();
      console.log("email", email);
      const password = $("#password").val();
      const authenticity_token = $("#authenticity_token").val();

      const formData = new FormData();
      formData.append("user[email]", email);
      formData.append("user[password]", password);
      formData.append("authenticity_token", authenticity_token);
      console.log("3333");

      $.ajax({
        url: "/users/sign_in",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
          console.log(response);
        },
        error: function (error) {
          console.log("error", error);
        },
      });

      // Add your validation logic here

      // Prevent default form submission if validation fails
      // Example: if (!isValid) { event.preventDefault(); }
    });
  }
}

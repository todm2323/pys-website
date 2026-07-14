document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = contactForm.name.value.trim();
      var phone = contactForm.phone.value.trim();
      var email = contactForm.email.value.trim();
      var topic = contactForm.topic.value;
      var message = contactForm.message.value.trim();

      var subject = "網站洽詢：" + topic;
      var body =
        "姓名：" + name + "\n" +
        "聯絡電話：" + phone + "\n" +
        "Email：" + (email || "未提供") + "\n" +
        "洽詢項目：" + topic + "\n" +
        "需求說明：\n" + message;

      var mailtoUrl =
        "mailto:pys.fb@msa.hinet.net?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = mailtoUrl;
    });
  }
});

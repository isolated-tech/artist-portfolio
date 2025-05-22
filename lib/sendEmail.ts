import { Resend } from "resend";

const resend = new Resend("re_35pUoK92_53gF3Di6jFDaT2ix32MwJ5KU");

export function sendEmail() {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "daniela.gbarron@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
}

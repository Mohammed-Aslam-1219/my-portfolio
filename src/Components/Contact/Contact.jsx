import React from "react";
import "./Contact.css";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "78c36a75-b213-4ed9-9303-c6fb47d00af8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      window.alert("Thank you for getting in touch!");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="contactSection" id="contact">
      <div className="contactLeft">
        <h3 className="contactTitle">Let's Talk!</h3>
        <p className="contactDescription">
        Let's connect! I’m eager to bring my technical and leadership skills to your team. Reach out to discuss how we can work together to drive innovation and achieve success.
        </p>
        <div className="contactDetailContainer">
          <div className="contactDetail">
            <img src={mail_icon} alt="" className="contactLogo" />
            <p>
              mohammedaslam1219<span>@gmail.com</span>
            </p>
          </div>
          <div className="contactDetail">
            <img src={linkedin_icon} alt="" className="contactLogo" />
            <p>www.linkedin.com/in/<span>mohammedaslam1219</span></p>
          </div>
          <div className="contactDetail">
            <img src={github_icon} alt="" className="contactLogo" />
            <p>https://github.com/Mohammed-Aslam-1219</p>
          </div>
        </div>
      </div>
      <form className="contactRight" onSubmit={onSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label htmlFor="mail">Your Email</label>
        <input
          type="email"
          name="mail"
          placeholder="Enter your mail"
          required
        />
        <label htmlFor="message">Write your message here</label>
        <textarea
          name="message"
          rows="8"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

import { useEffect } from "react";
import kwesforms from "kwesforms";
import { Button } from "~/components/Form/Button";

export default function Contact() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div>
      <div className="heading-with-horizontal-lines">
        <h1>Contact Us</h1>
      </div>

      <form
        method="post"
        className="form kwes-form"
        action="https://kwes.io/api/foreign/forms/XZx7xaYdws6HQLePBoFC"
      >
        <div className="half">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder=" "
            rules="required"
          />
          <label htmlFor="firstName">First Name*</label>
        </div>
        <div className="half">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder=" "
            rules="required"
          />
          <label htmlFor="lastName">Last Name*</label>
        </div>
        <div className="full">
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            rules="required"
          />
          <label htmlFor="email">Email Address*</label>
        </div>
        <div className="full">
          <select name="subject" id="subject">
            <option value="Grab Bag Question">Grab Bag Question</option>
            <option value="Just saying Hi">Just saying Hi</option>
            <option value="Sponsorships">Sponsorships</option>
          </select>
          <label htmlFor="Subject">Subject*</label>
        </div>
        <div className="full">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            rules="required"
          />
          <label htmlFor="message">Message*</label>
        </div>
        <div className="full action-buttons">
          <Button label="submit" />
        </div>
      </form>
    </div>
  );
}

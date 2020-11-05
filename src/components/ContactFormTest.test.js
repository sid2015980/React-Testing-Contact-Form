import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("test form label", () => {
  const { getByText } = render(<ContactForm />);

  getByText(/first name/i);
  getByText(/last name/i);
  getByText(/email/i);
});

test("form submission", () => {

    const { getByLabelText } = render(<ContactForm />);

    const inputfirstName = getByLabelText(/first name/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(inputfirstName, {
      target: { value: "Bob" },
    });

    fireEvent.change(messageInput, {
      target: { value: "Hello, from test message!" },
    });

    expect(inputfirstName.value).toBe("Bob");
    expect(messageInput.value).toBe("Hello, from test message!");


});



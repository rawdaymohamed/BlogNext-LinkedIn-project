import React from 'react';

export default function Page() {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto natus,
        cumque laborum, error consequuntur eaque expedita numquam eveniet quas sunt
        possimus eligendi minus omnis sapiente sequi cum magni distinctio?
      </p>
      <div>
        <h3>Get in Touch</h3>
        <ul style={{ listStyleType: "square" }}>
          <li>
            <span>Email: <a href="mailto:contact@example.com">contact@example.com</a></span>
          </li>
          <li>
            <span>Website: <a href="https://www.example.com">www.example.com</a></span>
          </li>
        </ul>

      </div>
    </div>
  );
}
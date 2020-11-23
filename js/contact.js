// Contact us Check to Fill
const checkToFillForm = () => {
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let phoneformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let notFilled = false;

  Array.from(document.getElementsByTagName("input")).forEach((input) => {
    if (input.value === "") {
      //   input.style.borderColor = "red";
      //   input.style.borderStyle = "solid";
      notFilled = true;
    }
    if (input.type === "email" && !input.value.match(mailformat)) {
      notFilled = true;
    }
  });

  if (!document.getElementById("phone").value.match(phoneformat)) {
    notFilled = true;
  }

  if (notFilled) {
    alert(
      "You should fill all inputs \nYou should enter a valid email and phone number"
    );
  } else {
    document.getElementById("form").submit();
  }
};

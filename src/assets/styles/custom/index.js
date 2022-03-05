const fields = {
  borderRadius: "30px",
  width: "80%",
  margin: "5px auto",
  height: "45px",
  fontStyle: "italic",
  fontWeight: "300",
  fontSize: "15px",
  letterSpacing: "1px",
};

const adjustMargin = {
  exceptRight: { margin: "15px 0 15px 5px" },
  exceptLeft: { margin: "15px 5px 15px 0" },
  left: { marginLeft: "5px" },
  right: { marginRight: "5px" },
  topBottom: { margin: "15px 0" },
};

const inline = {
  display: "inline-flex",
  width: "100%",
};

const adjustWidth = {
  width1: { width: "94%" },
  width2: { width: "100%" },
  width3: { width: "82%" },
  width4: { width: "85%" },
};

const dateField = {
  margin: "10px 0 10px 0",
  borderRadius: "100px",
  cursor: "pointer",
};

const toggle = {
  justifyContent: "flex-start",
  color: "#fff",
  borderRadius: 0,
  border: "none",
};

const invisible = {
  display: "none",
};

const location_button = {
  color: "#fff",
  fontWeight: "bold",
  letterSpacing: "1px",
  padding: "10px",
  width: "150px",
};

export { fields, invisible };
export { adjustMargin, inline, location_button };
export { dateField, toggle, adjustWidth };

const Button = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setSwitch(true);
        }}
        style={{
          backgroundColor: props.switch === true ? "#5c48d3" : "white",
          color: props.switch === true ? "white" : "#5c48d3",
          border:
            props.switch === true ? "#5c48d3 solid 1px" : "grey solid 1px",
        }}
      >
        ON
      </button>
      <button
        onClick={() => {
          props.setSwitch(false);
        }}
        style={{
          backgroundColor: props.switch === false ? "#5c48d3" : "white",
          color: props.switch === true ? "#5c48d3" : "white",
          border:
            props.switch === true ? "grey solid 1px" : "#5c48d3 solid 1px",
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Button;

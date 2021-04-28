const Reset = (props) => {
  return (
    <button
      className="reset"
      onClick={() => {
        props.setSwitch1(false);
        props.setSwitch2(false);
        props.setSwitch3(false);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;

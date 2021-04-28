const Announcement = (props) => {
  return (
    <div
      className={props.announcementStyle}
      style={{
        backgroundColor:
          props.switch1 === true &&
          props.switch2 === true &&
          props.switch3 === true
            ? "#46AC4A"
            : "#D34848",
      }}
    >
      {props.switch1 === true &&
      props.switch2 === true &&
      props.switch3 === true ? (
        <h1>Go !</h1>
      ) : (
        <h1>No way !</h1>
      )}
    </div>
  );
};

export default Announcement;

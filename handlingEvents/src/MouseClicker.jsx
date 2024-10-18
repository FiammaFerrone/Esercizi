/** @format */

function MouseClicker() {
  const eventHandler = (event) => {
    console.log(event.target.name);
  };
  const imageHandler = (event) => {
    console.log(event.target.src);
    event.stopPropagation();
  };
  return (
    <div>
      <button name="one" onClick={eventHandler}>
        Click!
      </button>
      <button name="two" onClick={imageHandler}>
        <img
          src="https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg"
          id="image"
        />
        Click!
      </button>
    </div>
  );
}
export default MouseClicker;

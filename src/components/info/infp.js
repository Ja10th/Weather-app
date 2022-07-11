import "./info.css";
import Infotwo from "./info2";

const Info = () => {
  return (
    <>
      <section className="container info__container">
        <div>
          <h2>Get Detail Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            temporibus quos quam magnam pariatur atque. Quod tempore, voluptates
            ad possimus sapiente voluptas!
          </p>
        </div>
        <div className="buttons">
          <button className="btn btn-primary">Download for Desktop</button>
          <button className="btn btn-tertiary">Download Mobile version</button>
        </div>
      </section>
      <Infotwo />
    </>
  );
};

export default Info;

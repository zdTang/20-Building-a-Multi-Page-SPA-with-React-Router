import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Welcome;

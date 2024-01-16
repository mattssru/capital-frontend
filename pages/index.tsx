import React from "react";
import Router from "next/router";

export default function Index() {
  React.useEffect(() => {
    Router.push("/login");
  }, []);

  return <div />;
}
// import React from "react";

// const IndexPage = () => {
//   return <div>Home</div>;
// };

// export default IndexPage;

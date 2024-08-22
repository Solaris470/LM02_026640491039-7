import type { MetaFunction } from "@remix-run/node";
import Navigation from "./template/header";
import Footer from "./template/footer";
import MyHomePage from "./MyHomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Atit Sontirak" },
    { name: "description", content: "Welcome to Atit Sontirak Website!" },
  ];
};

export default function Index() {
  return (
   <>
   <Navigation />
<MyHomePage />
<Footer />
   </>
  );
}

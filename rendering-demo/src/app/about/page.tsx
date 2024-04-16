import { cookies } from "next/headers";

export default function AboutPage() {

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);


    console.log("About server componenrt" );
  return (
    <div>About Page { new Date().toLocaleTimeString()}</div>
  )
}

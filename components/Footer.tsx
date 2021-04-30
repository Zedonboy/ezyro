import React from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiWhatsapp } from "@mdi/js";
const Footer = () => {
  return (
    <div className="" style={{ backgroundColor: "#f8faff", color: "black" }}>
      <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
          <ul className="flex mx-auto text-black text-center">
            <li className="p-2 cursor-pointer">Terms & Conditions</li>
            <li className="p-2 cursor-pointer ">Privacy</li>
          </ul>
          <ul className="flex mx-auto text-black text-center">
            <li className="p-2 mx-3 cursor-pointer">
              <Link href="https://twitter.com/kingdavidmiles">
                <Icon path={mdiTwitter} size={1.5} color="skyblue" />
              </Link>
            </li>

            <li className="p-2 mx-3 cursor-pointer">
              <Link href="https://www.instagram.com/kingdavidmiles">
                <Icon path={mdiInstagram} size={1.5} color="red" />
              </Link>
            </li>

            <li className="p-2 mx-3 cursor-pointer">
              <Link href="https://www.facebook.com/david.olukwu">
                <Icon path={mdiFacebook} size={1.5} color="blue" />
              </Link>
            </li>

            <li className="p-2 mx-3 cursor-pointer">
              <Link href="https://wa.link/xrdruw">
                <Icon path={mdiWhatsapp} size={1.5} color="green" />
              </Link>
            </li>
          </ul>
          <small className="flex mx-auto text-black text-center">Copyright Click © 2021</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

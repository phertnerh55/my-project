import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className=" bg-green-100">
      <div className="flex justify-between container mx-auto p-2">
        <h2 className="text-4xl font-bold text-green-500 ">
          Sick <span className="text-black">2</span> Strong
        </h2>
        <div>
          <h3 className="font-bold">Quick links</h3>
          <ul>
            <li className="hover:text-green-600">Home</li>
            <li className="hover:text-green-600">AboutUs</li>
            <li className="hover:text-green-600">Search</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow us</h3>
          <div className="flex items-center gap-5">
            <BsFacebook size={35} />
            <BsInstagram size={35} />
            <BsYoutube size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

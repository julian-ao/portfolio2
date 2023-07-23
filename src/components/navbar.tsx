/* import { Github } from "../assets/icons/github";
import { Linkedin } from "../assets/icons/linkedin";
import { Resume } from "../assets/icons/resume";
import UnderlineHover from "./underlineHover"; */
// hover:underline underline-offset-[5px] decoration-1

const aClassName = "flex place-content-center cursor-pointer duration-200 overflow-hidden relative underlineAnimation";

//const iconClassName = "w-7 cursor-pointer duration-200 fill-[#595959]";

const openResume = () => {
    window.open("path/to/your/pdf_file.pdf", "_blank");
};

export const Navbar = () => {
  return (
    <div className="flex place-content-center">
      <div className="flex w-full justify-between p-8 text-xl items-center">
        <div className="tracking-wide font-normal">
          Julian Ammouche Ottosen
        </div>

        {/* <div className="flex gap-12">
          <a href="https://www.linkedin.com/in/julian-ao/" target="_blank" className={aClassName}>
            <Linkedin className={iconClassName} />
          </a>
          <a href="https://github.com/Jotto2" target="_blank" className={aClassName}>
            <Github  className={iconClassName} />
          </a>
          <a href="" className={aClassName}>
            <Resume className="w-5 cursor-pointer duration-200 fill-[#595959] hover:fill-[#fefefe]" />
          </a>
        </div> */}

        <div className="flex gap-7 select-none">
          <a href="https://www.linkedin.com/in/julian-ao/" target="_blank" className={aClassName}>
            LinkedIn
          </a>
          <div>
            /
          </div>
          <a href="https://github.com/Jotto2" target="_blank" className={aClassName}>
            Github
          </a>
          <div>
            /
          </div>
          <div onClick={openResume} className={aClassName}>
            Resume
          </div>
        </div>
      </div>
    </div>
  );
};
/* import { Github } from "../assets/icons/github";
import { Linkedin } from "../assets/icons/linkedin";
import { Resume } from "../assets/icons/resume";
import UnderlineHover from "./underlineHover"; */
// hover:underline underline-offset-[5px] decoration-1

const aClassName =
  "flex place-content-center cursor-pointer duration-200 overflow-hidden relative underlineAnimation";

//const iconClassName = "w-7 cursor-pointer duration-200 fill-[#595959]";

export const Navbar = () => {
  return (
    <div className="flex place-content-center">
      <div
        className="flex w-full items-center
        justify-end md:justify-between p-4 md:p-8 text-lg sm:text-xl "
      >
        <div
          className="tracking-wide font-normal
          hidden md:block"
        >
          Julian Ammouche Ottosen
        </div>
        <div
          className="flex
          gap-3 md:gap-5"
        >
          <a
            href="https://www.linkedin.com/in/julian-ao/"
            target="_blank"
            className={aClassName}
          >
            LinkedIn
          </a>
          <div>/</div>
          <a
            href="https://github.com/julian-ao"
            target="_blank"
            className={aClassName}
          >
            Github
          </a>
          <div>/</div>
          <a
            href="/julian_ammouche_ottosen_resume.pdf"
            target="_blank"
            className={aClassName}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

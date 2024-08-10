import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import doodle1 from "../images/doodle-6 1.png";
import doodle2 from "../images/doodle-7 1.png";
import Saly from "../images/Saly-26.png";
import ProgressBar from "./ProgressBar";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const SkillOne = () => {
    return (
        <div>
            <Nav />
            <ProgressBar />

            <div className="flex items-start flex-col ml-[35vh] z-50 ">
                <h1 className="text-[40px] mb-5 mt-[10vh] font-bold">
                    Complete Your Profile
                </h1>
                <div className="flex items-center gap-[10vh]">
                    <div className="flex items-start justify-center flex-col text-xl gap-8 mt-3 font-normal relative">
                        <img
                            src={doodle1}
                            className="absolute z-10 top-[30vh] left-[12vw]"
                        />
                        <img
                            src={doodle2}
                            className="absolute z-10 top-[30vh] left-[50vw]"
                        />
                        <img
                            src={Saly}
                            className="absolute z-10 top-[-15vh] left-[56vw]"
                        />
                    <div className="flex items-start justify-center flex-col text-xl gap-8 mt-3 font-normal">
                        {window.location.pathname === "/skill1" ? (
                            <span className="font-semibold">Personal Information</span>
                            ) : (
                            <Link to="/skill1"><span>Personal Information</span></Link>
                        )}
                        {window.location.pathname === "/skill2" ? (
                            <span className="font-semibold">Contact Information</span>
                            ) : (
                            <Link to="/skill2"><span>Contact Information</span></Link>
                        )}
                        {window.location.pathname === "/skill3" ? (
                            <span className="font-semibold">Skills/Interests</span>
                        ) : (
                            <Link to="/skill3"><span>Skills/Interests</span></Link>
                        )}
                        {window.location.pathname === "/skill4" ? (
                            <span className="font-semibold">Education Information</span>
                        ) : (
                            <Link to="/skill4"><span>Education Information</span></Link>
                        )}
                        {window.location.pathname === "/skill6" ? (
                            <span className="font-semibold">Cover & Profile Photos</span>
                        ) : (
                            <Link to="/skill6"><span>Cover & Profile Photos</span></Link>
                        )}
                        {window.location.pathname === "/skill7" ? (
                            <span className="font-semibold">Additional Information</span>
                        ) : (
                            <Link to="/skill7"><span>Additional Information</span></Link>
                        )}
                    </div>

                    </div>
                    <div className="flex flex-col border-[1px] px-10 py-8 w-[40vw] rounded-3xl z-40 bg-white bg-opacity-50 backdrop-blur-[20px] ">
                        <label className="mb-2 text-lg font-bold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border-[1px] border-[#5F5F5F] rounded-md py-3 px-4 block mb-4 "
                        />

                        <label className="mb-2 text-lg font-bold">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            className="border-[1px] border-[#5F5F5F] rounded-md py-3 px-4 block mb-4 "
                        />

                        <label className="mb-2 text-lg font-bold">
                            Select Gender
                        </label>
                        <select
                            className="border border-gray-300 rounded-md py-2 px-4 block mb-4"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                        <div className="flex justify-end">
                            {" "}
                            <div className="flex rounded-3xl border-[2px] border-black items-center justify-center px-1.5 py-1.5 gap-2">
                                <button className="font-bold ">NEXT</button>
                                <span className="rounded-full border-[2px] border-black py-1 px-1">
                                    <FaArrowRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillOne;

import React from "react";
import Image from "next/image";
import Alamgir from "../../public/assets/director/Alamgir-Kabir.png";
import Rowshan from "../../public/assets/director/Rowshan-Ara.png";
import Shadman from "../../public/assets/director/Shadman-Kabir.png";
import Sabbria from "../../public/assets/director/Sabbria-Kabir.png";
const DirectorList = [
  {
    id: 0,
    name: "ROWSHAN ARA ALAM",
    designation: "Chairperson",
    comment:
      "Our Honorable Chairperson Rowshan Ara Alam is a highly respected and passionate in the technology industry, serving as the Chairperson of Neocon Group. With her dynamic leadership, she has steered the company towards achieving its strategic goals. A true visionary, she has a keen understanding of the rapidly changing technology landscape and is always looking for new and innovative ways to drive growth and create value for the company's stakeholders.",
    comment2:
      "Hard work is the foundation of any successful organization. It is the unwavering dedication to excellence, the determination to achieve greatness, and the perseverance to overcome challenges that define us as individuals and as a company.",
    // header:
    //   "“We manage too many people to    constantly be searching for stuff",
    // subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Rowshan,
  },
  {
    id: 1,
    name: "MOHAMMED ALAMGIR KABIR",
    designation: "Chairman",
    comment:
      "Our Honorable Chairman, Mohammed Alamgir Kabir, has been the driving force behind Neocon Group’s remarkable journey from a beginning to a leading software company. With his far-sighted vision and inspiring leadership, he has led organization through numerous challenges and opportunities, ensuring that we stay ahead of the curve in a constantly evolving technological landscape.",
    comment2:
      "At Neocon Group, we are committed to providing our clients with cutting-edge technology solutions that help them achieve clients business goals. We believe that our success is directly tied to the success of our clients, and we are dedicated to building long-lasting partnerships that drive growth and innovation.",
    // header:
    //   "“We manage too many people to    constantly be searching for stuff",
    // subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Alamgir,
  },

  {
    id: 2,
    name: "MOHAMMED SHADMAN KABIR",
    designation: "Managing Director",
    comment:
      "Honorable Managing Director, Mohammed Shadman Kabir is a passionate leader who provides a modern vision to the company. He completed his graduation from the University of New South Wales, Sydney, Australia, in the field of Accounting and Marketing. He has also pursued an offshore Professional Year from Navitas Professional Australia.",
    comment2:
      "Technical innovation is the flagbearer of excellence, and at Neocon Group, we have always been at the forefront of this movement. From our humble beginnings as a dynamic start-up to our position today as a market-leading software development company, we have remained steadfast in our commitment to providing cutting-edge solutions to our clients.",
    // header:
    //   "“We manage too many people to    constantly be searching for stuff",
    // subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Shadman,
  },
  {
    id: 3,
    name: "SABBRIA KABIR",
    designation: "Director",
    comment:
      "Honorable Director Sabbria Kabir is a potential leader. She is graduating from Taylor's University, Malaysia. Besides being an ambitious individual she has a broader mindset in business.",
    comment2:
      "We firmly believe that Innovative technologies will build a productive business system for overall growth, and that it is only through the power of technology that we can truly empower people.The hard work and dedication of each and every member of the Neocon Group family that we have been able to achieve.",
    // header:
    //   "“We manage too many people to    constantly be searching for stuff",
    // subheader: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
    image: Sabbria,
  },
];

function Director() {
  return (
    <>
      <div>
        <div className="pt-20">
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            <div>
              <p className="text-41xl xsm:text-3xl sm:text-3xl font-semibold text-ngl_black">
                “Board of <span className="text-ngl_orange"> Director</span>
              </p>
              <p className="text-base font-regular text-ngl_gray_3">
                A board of directors of a neocon group is responsible for
                setting the group's strategic direction, overseeing its
                management, and ensuring that it complies with applicable laws
                and regulations.
              </p>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1">
              {DirectorList.map((director, index) => (
                <div
                  key={index}
                  className={`w-full flex  mb-10 ${
                    director.id % 2 === 0
                      ? "flex-row xsm:flex-col sm:flex-col "
                      : "flex-row-reverse xsm:flex-col sm:flex-col"
                  }`}
                >
                  <div className="my-auto w-3/5 xsm:w-full sm:w-full">
                    <div
                      className={` flex ${
                        director.id % 2 === 0
                          ? " justify-start xsm:pb-5 sm:pb-5"
                          : "justify-end xsm:pb-5 sm:pb-5"
                      }`}
                    >
                      <div className="px-5">
                        {/* <p className="text-sm text-ngl_orange font-semibold">
                          {director.subheader}
                        </p>
                        <p className="text-32xl xsm:text-xl sm:text-xl text-ngl_black font-semibold leading-tight">
                          {director.header}
                        </p> */}
                        <div className="border-l-2 border-ngl_orange">
                          <p className="text-base font-regular text-ngl_gray_3 p-2 mb-3">
                            {director.comment}
                          </p>
                          <p className="text-base font-regular text-ngl_gray_3 p-2 mb-3">
                            {director.comment2}
                          </p>
                        </div>
                        <div className="flex flex-row xsm:flex-col sm:flex-col">
                          <p className="text-base text-ngl_orange font-semibold">
                            {director.name}
                          </p>
                          <p className="text-sm font-regular text-ngl_gray_3 my-auto mx-5 xsm:mx-0 sm:mx-0  mb-0">
                            {director.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-auto w-2/5 xsm:w-full sm:w-full">
                    <Image
                      src={director.image}
                      alt="director image"
                      className="my-auto mx-auto rounded-lg w-auto h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Director;

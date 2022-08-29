import React from "react";

import { MdContentPaste, MdOutlineSick } from "react-icons/md";
import {
  FaChild,
  FaAddressCard,
  FaHeadSideVirus,
  FaHandHoldingMedical,
  FaHandsHelping,
} from "react-icons/fa";
import {
  RiParentFill,
  RiFilePaper2Line,
  RiFolderInfoLine,
} from "react-icons/ri";
import { BiHomeHeart, BiCreditCard } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GiLifeSupport, GiBackPain } from "react-icons/gi";
import { AiOutlineAreaChart, AiOutlineMedicineBox } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
export const links = [
  {
    title: "خانه",
    links: [
      {
        name: "خانه",
        icon: <BiHomeHeart />,
        route: "",
      },
      {
        name: "والدین",
        icon: <RiParentFill />,
        route: "Parents",
      },
      {
        name: "تماس با ما",
        icon: <IoMdContact />,
        route: "ContactUs",
      },
      {
        name: " درخواست یاری",
        icon: <FaHandsHelping />,
        route: "HelpReq",
      },
      {
        name: "خانه کودک",
        icon: <FaChild />,
        route: "ChildHomes",
      },
    ],
  },

  {
    title: "ذرباره ما",
    links: [
      {
        name: "معرفی",
        icon: <MdContentPaste />,
        route: "introduction",
      },
      {
        name: "حامیان",
        icon: <GiLifeSupport />,
        route: "Aboutus/Supporters",
      },
      {
        name: "سند چشم انداز",
        icon: <RiFilePaper2Line />,
        route: "Aboutus/ViewSight",
      },
      {
        name: "گزارش ها",
        icon: <HiOutlineDocumentReport />,
        route: "Aboutus/Reports",
      },
      {
        name: "نشانی ها",
        icon: <FaAddressCard />,
        route: "Aboutus/Address",
      },
      {
        name: "چارت سازمانی ",
        icon: <AiOutlineAreaChart />,
        route: "Aboutus/OrgnzChart",
      },
      {
        name: " شماره حساب ",
        icon: <BiCreditCard />,
        route: "Aboutus/AccountNumbers",
      },
    ],
  },
  {
    title: "مقالات اموزشی",
    links: [
      {
        name: "مفاهیم پایه",
        icon: <RiFolderInfoLine />,
        route: "SientificArticles/Fundamentals",
      },
      {
        name: "انواع تشنج",
        icon: <GiBackPain />,
        route: "SientificArticles/Convulsion",
      },
      {
        name: "انواع سندروم صرعی",
        icon: <MdOutlineSick />,
        route: "SientificArticles/EpilepticSyndrome",
      },
      {
        name: "درمان صرع و تشنج",
        icon: <AiOutlineMedicineBox />,
        route: "SientificArticles/CureConvulsionEpileptic",
      },
      {
        name: " محرک های تشنج",
        icon: <FaHeadSideVirus />,
        route: "SientificArticles/ConvulsionMotives",
      },
      {
        name: "درمان",
        icon: <FaHandHoldingMedical />,
        route: "SientificArticles/diagnosis",
      },
    ],
  },
];

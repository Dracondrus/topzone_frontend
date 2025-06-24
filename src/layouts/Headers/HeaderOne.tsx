"use client";

import Image from "next/image";
import React, {  useState } from "react";

import logoWhite from "../../../public/assets/topzone.png";
import logoBlack from "../../../public/assets/topzone.png";
import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";
import CartOffcanvas from "@/components/OffCanvas/CartOffcanvas";
import useGlobalContext from "@/hooks/useContext";
import UserSvg from "@/components/SVG/UserSvg";
import useSticky from "@/hooks/useSticky";
import Link from "next/link";
import LanguageSwitcher from "./Lang";

export default function HeaderOne() {
  const [openCartMini, setOpenCartMini] = useState(false);
  const { toggleOffcanvas } = useGlobalContext();
  const { sticky } = useSticky();




  const renderHeaderContent = () => (
    <div className="container container-large">
      <div className="row align-items-center">
        <div className="col-xl-2 col-lg-4 col-md-3 col-6">
          <div className="tp-header-logo" style={{ padding: 10 }}>
            <Link href="/">
              {sticky ? (
                <>
                  <Image src={logoBlack} width={40} height={40} alt="logo" />
                  <b style={{ fontSize: 22, paddingLeft: 10, color: "#000" }}>TopZone</b>
                </>
              ) : (
                <>
                  <Image src={logoWhite} width={40} height={40} alt="logo" />
                  <b style={{ fontSize: 22, paddingLeft: 10, color: "#fff" }}>TopZone</b>
                </>
              )}
            </Link>
          </div>
        </div>
        <div className="col-xl-7 col-lg-4 d-none d-lg-block">
          <div className="tp-header-1-menu">
            <div className="tp-main-menu d-none d-xl-block">
              <nav></nav>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-9 col-6">
          <div className="tp-header-main-right d-flex align-items-center justify-content-end">
            <div className="tp-header-right-user d-none d-md-flex align-items-center">
              <div className="tp-header-right-cart mr-30">

<LanguageSwitcher/>

              </div>
              <div className="tp-header-right-user-icon">
                <Link href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                  <span><UserSvg /></span>
                </Link>
              </div>
              <div className="tp-header-right-user-content"></div>
            </div>
            <div className="tp-header-hamburger d-xl-none offcanvas-open-btn">
              <button onClick={toggleOffcanvas} className="hamburger-btn">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      <header className="tp-header-1-ptb tp-header-transparent top p-relative">
        <div className="tp-header-main-sticky p-relative">
          {renderHeaderContent()}
        </div>
      </header>
      <header className={`tp-header-1-ptb p-relative tp-int-menu tp-header-sticky-cloned ${sticky ? "tp-header-pinned" : ""}`}>
        <div className="tp-header-main-sticky tp-header-1-main p-relative">
          {renderHeaderContent()}
        </div>
      </header>
      <OffcanvasArea />
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import NavMenus from "../subComponents/NavMenus";
import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";
import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import useGlobalContext from "@/hooks/useContext";
import useSticky from "@/hooks/useSticky";

export default function HeaderThree() {
    const { toggleOffcanvas } = useGlobalContext();
    const { sticky } = useSticky();

    // Header Content Component
    const renderHeaderContent = ({ toggleOffcanvas }: { toggleOffcanvas: () => void }) => (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-3 col-6">
                    <div className="tp-header-logo">
                        <Link href="/">
                            <Image src={logoBlack} alt="image" />
                        </Link>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-4 d-none d-lg-block">
                    <div className="tp-header-4-menu">
                        <div className="tp-main-menu d-none d-xl-block">
                            <nav className="tp-mobile-menu-active">
                                <NavMenus />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-9 col-6">
                    <div className="tp-header-4-main-right d-flex align-items-center justify-content-end">
                        <div className="tp-header-4-btn d-none d-md-block">
                            <Link className="tp-btn" href="/property-style-1">
                                <span className="btn-wrap">
                                    <b className="text-1">Find Property</b>
                                    <b className="text-2">Find Property</b>
                                </span>
                            </Link>
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
            {/* Offcanvas Area */}
            <OffcanvasArea />

            {/* Main Header */}
            <header className="tp-header-2-ptb p-relative">
                <div className="tp-header-main-sticky p-relative">
                    {renderHeaderContent({ toggleOffcanvas })}
                </div>
            </header>

            {/* Sticky Header */}
            <header
                className={`tp-header-2-ptb p-relative tp-int-menu tp-header-sticky-cloned ${sticky ? "tp-header-pinned" : ""}`}>
                <div className="tp-header-main-sticky tp-header-2-main p-relative">
                    {renderHeaderContent({ toggleOffcanvas })}
                </div>
            </header>
        </>
    )
}
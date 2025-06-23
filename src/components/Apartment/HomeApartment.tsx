import apartmentBg from '../../../public/assets/img/apartment/apartment-bg.jpg'
import Link from 'next/link'

export default function HomeApartmentArea() {
    return (
        <section
            className="tp-appartment-area pt-180 pb-180 include-bg"
            style={{ backgroundImage: `url(${apartmentBg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-apartment-wrapper text-center">
                            <h3 className="tp-section-title">
                                Join Bhumi and <br /> experience today
                            </h3>
                            <Link className="tp-btn" href="/property-style-2">
                                <span className="btn-wrap">
                                    <b className="text-1">Discover Apartments</b>
                                    <b className="text-2">Discover Apartments</b>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
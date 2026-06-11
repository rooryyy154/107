import { useState } from "react"


function Admin(){
    //const [state, setState] = useState(initialValue);
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");
    const [coupons, setCoupons] = useState([]);

    function saveCoupon(){
        console.log(couponCode);
        console.log(couponDiscount);

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }

        setCoupons([...coupons, newCoupon])
        setCouponCode("");
        setCouponDiscount("");
    }
    return(
        <div>
            <h1>Store Administration</h1>

            <div className="d-flex gap-4">
                <section className="bg-info w-50">
                    <h2>Add products</h2>

                </section>

                <section className="w-50">
                    <h2>Add coupons</h2>

                    <div>
                        <div className="card">
                            <div class="card-body">

                                <div className="mb-3">
                                    <label className="form-label">Code</label>
                                    <input className="form-control" 
                                        type="text" 
                                        value={couponCode} 
                                        onChange={(e) => setCouponCode(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Discount</label>
                                    <input className="form-control" 
                                    type="text" 
                                    value={couponDiscount}
                                    onChange={(e) => setCouponDiscount(e.target.value)}/>
                                </div>

                                <div className="text-center">
                                    <label className="btn btn-success" onClick={saveCoupon}>Save Coupon</label>
                                </div>

                            </div>

                        </div>

                        {/* Rendering Coupons */}
                        <h4 className="mt-4">Coupons List</h4>
                        {
                            (coupons.length < 1)
                            ? <p>There aren't coupons</p>
                            : <ul className="list-group">
                                {
                                    coupons.map(coupon => (
                                        <li key={coupon.code} className="list-group-item">{coupon.code} - {coupon.discount}%</li>
                                    ))
                                }
                            </ul>
                        }
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Admin
import { useState } from "react"

function Admin(){
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");
    const [coupons, setCoupons] = useState([]);

    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);

    function saveCoupon(){
        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }

        setCoupons([...coupons, newCoupon])
        setCouponCode("");
        setCouponDiscount("");
    }

    function saveProduct(){
        const newProduct = {
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: parseFloat(productPrice).toFixed(2)
        }

        setProducts([...products, newProduct]);
        
        setProductTitle("");
        setProductCategory("");
        setProductImage("");
        setProductPrice("");
    }

    return(
        <div className="container mt-4 mb-5">
            <div className="bg-primary text-white p-3 rounded mb-4">
                <h1 className="mb-0">Store Administration</h1>
            </div>

            <div className="d-flex gap-4">
                <section className="w-50">
                    <h2>Add Products</h2>

                    <div>
                        <div className="card border-primary">
                            <div className="card-body">

                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input className="form-control" 
                                        type="text" 
                                        value={productTitle} 
                                        onChange={(e) => setProductTitle(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <input className="form-control" 
                                        type="text" 
                                        value={productCategory} 
                                        onChange={(e) => setProductCategory(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Image (URL)</label>
                                    <input className="form-control" 
                                        type="text" 
                                        value={productImage} 
                                        onChange={(e) => setProductImage(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input className="form-control" 
                                        type="number" 
                                        value={productPrice} 
                                        onChange={(e) => setProductPrice(e.target.value)} />
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={saveProduct}>Save Product</button>
                                </div>

                            </div>
                        </div>

                        <h4 className="mt-4">Products List:</h4>
                        {
                            (products.length < 1)
                            ? <p>There aren't products</p>
                            : <div className="d-flex flex-wrap gap-3 mt-3">
                                {
                                    products.map((prod, index) => (
                                        <div key={index} className="card border-primary" style={{width: "14rem"}}>
                                            {prod.image ? (
                                                <img src={prod.image} className="card-img-top" alt={prod.title} style={{height: "150px", objectFit: "cover"}} />
                                            ) : (
                                                <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{height: "150px"}}>No Image</div>
                                            )}
                                            
                                            <div className="card-body position-relative">
                                                <span className="badge bg-light text-dark border position-absolute top-0 end-0 m-2">{prod.category}</span>
                                                <h6 className="card-title mt-3">{prod.title}</h6>
                                                <p className="card-text text-muted">${prod.price}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </section>

                <section className="w-50">
                    <h2>Add Coupons</h2>

                    <div>
                        <div className="card border-primary">
                            <div className="card-body">

                                <div className="mb-3">
                                    <label className="form-label">Code</label>
                                    <input className="form-control" 
                                        type="text" 
                                        value={couponCode} 
                                        onChange={(e) => setCouponCode(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Discount (%)</label>
                                    <input className="form-control" 
                                        type="text" 
                                        value={couponDiscount}
                                        onChange={(e) => setCouponDiscount(e.target.value)}/>
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={saveCoupon}>Save Coupon</button>
                                </div>

                            </div>

                        </div>

                        {/* Rendering Coupons */}
                        <h4 className="mt-4">Coupons List:</h4>
                        {
                            (coupons.length < 1)
                            ? <p>There aren't coupons</p>
                            : <ul className="list-group">
                                {
                                    coupons.map((coupon, index) => (
                                        <li key={index} className="list-group-item list-group-item-primary d-flex justify-content-between">
                                            <span>{coupon.code}</span> 
                                            <span>{coupon.discount}%</span>
                                        </li>
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
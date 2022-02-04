import styled from "styled-components";
import Button from "../../components/Button";

const Main = () => {
    const categories = {
        lavashlar: {
            img: "https://cdn-icons-png.flaticon.com/512/1543/1543448.png", 
            products: [
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                },
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }    ,
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }    ,
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }    ,
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }    ,
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }    ,
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }         
            ]
        },
        burgerlar: {
            img: "https://cdn-icons-png.flaticon.com/512/1543/1543448.png", 
            products: [
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }      
            ]
        },
        salatlar: {
            img: "https://cdn-icons-png.flaticon.com/512/1543/1543448.png", 
            products: [
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }      
            ]
        },
        ichimliklar: {
            products: [
                {
                    productName: "Sirli Lavash",
                    price: 20000,
                    desc: "hello world lorem ipsum dolor sit",
                    img: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
                }      
            ]
        },
    }


    return (
        <>
            <MainWrapper>
                <div className="header">
                   <div className="container  d-flex align-items-center justify-content-between">
                   <div className="logo">
                       <img src="https://oqtepalavash.uz/static/media/oqtepa_logo.10f1ede4.svg" alt="oqtepa"/>
                   </div>
                   <div className="d-flex justify-content-between align-items-center">
                       <div className="nav">
                           <a href="#">Asosiy</a>
                           <a href="#">Filyallar</a>
                           <a href="#">Biz haqimizda</a>
                           <a href="#">Bog`lanish</a>
                       </div>
                        <h5 className="phone m-0">+998 99 000 88 00</h5>
                   </div>
                   <div className="user">
                       <Button>Kirish</Button>
                   </div>
                   </div>
                </div>
                <main>
                    <ul className="categoryLinks">
                        {
                            Object.entries(categories).map((item, i) =><li key={item + i}><a href={"#" + item[0].toLowerCase()}>{item[0][0].toUpperCase() + item[0].slice(1).toLowerCase()}</a></li>)
                        }
                    </ul>

                    {/* 100 vh */}

                    <div className="categories-block">
                        {
                            Object.entries(categories).map((item, i) => {
                                const categoryName = item[0][0].toUpperCase() + item[0].slice(1).toLowerCase();
                                const img = item[1].img || "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_travelpictdinner_1484336833.png";

                                const products = item[1].products || [];
                                return (
                                    <div id={item[0].toLowerCase()} className="category-block py-4" key={item[0]}>
                                        <div className="headerCategory">
                                            <img src={img} alt={categoryName}/>
                                            <h4 className="title">{categoryName}</h4>
                                        </div>
                                        <div className="row p-3">
                                        {
                                            products.map((item, i) => 
                                                <div key={item.productName + i} className="col-sm-6 col-md-4 col-lg-3">
                                                    <ProductCard>
                                                    <div className="img-box">
                                                        <img src={item.img} className="img-fluid" alt={item.productName}/>
                                                    </div>
                                                    <div className="footer-product">
                                                        <h4 className="title-product">{item.productName}</h4>   
                                                        <p>{item.desc}</p>
                                                        <div className="price-box d-flex justify-content-between align-items-center">
                                                            <h3>{item.price} so'm</h3>
                                                            <Button className="addProductBtn">Qo'shish</Button>
                                                        </div>
                                                    </div>
                                                </ProductCard>
                                                </div>
                                            )
                                        }    
                                        </div>
                                    </div>
                                )
                            
                            })
                        }
                    </div>

                </main>

            </MainWrapper>
        </>
    )
}

export default Main;


const MainWrapper = styled.div`
    .header{
        width: 100%;
        padding: 10px;
        .logo{
            width: 150px;
            img{
                width: 100%;
            }
        }
        .d-flex{
            flex: 1;
            padding: 0 20px;
        }
        .nav{
            padding: 0 10px;
            a{
                color: #000;
                font-size: 18px;
                margin: 0 8px;
            }
        }
        border-bottom: 1px solid #c7ecee;
    }
    .categoryLinks{
        position: sticky;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        display: flex;
        padding: 20px 0;
        margin: 0 !important;
        background: #fff;
        li{
            padding: 8px 20px;
            border-radius: 15px;
            transition: all 0.5s ease;
            font-size: 18px;
            cursor: pointer;
            a{
                color: #000 !important;
            }
            &:hover{
                background: #F6F6F6;
            }
        }
    }
    .categories-block{
        background: #F6F6F6;
        .headerCategory{
            padding: 20px 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            .title{
                font-size: 32px;
            }
            img{
                width: 80px;
            }
        }
    }

`
const ProductCard = styled.div`
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    width: 100%;
    .img-box{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .footer-product{
        padding: 15px;
        background: #fff;
    }
    .addProductBtn{
        opacity: 0;
        transition: 0.3s ease;
    }
    &:hover{
        .addProductBtn{
            opacity: 1;
        }
    }
`
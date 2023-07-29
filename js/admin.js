function createId() {
    return Math.floor(Math.random() * 9999999999999 + new Date().getMilliseconds())
}


let product=JSON.parse(localStorage.getItem('product'))||[]

function renderManegerProduct(){
    let name=document.getElementById('name').value;
    let price=document.getElementById('price').value;
    let brand=document.getElementById('brand').value;
    let picture =document.getElementById('picture').value;
    let detail=document.getElementById('detail').value;
    
    let productItem={
        name:name,
        price:price,
        brand:brand,
        picture:picture,
        detail:detail,
        id:createId()
    }
    
    let checkId=localStorage.getItem('id');
    console.log(checkId);
    if(checkId){
        for(let i=0;i<product.length;i++){
            if(product[i].id==checkId){
                product.splice(i,1,{...productItem,id:checkId});
                localStorage.setItem('product',JSON.stringify(product));
                render();
                localStorage.removeItem('id');
                document.getElementsByClassName('add')[0].innerHTML='Thêm sản phẩm'
                return;
                
            }
        }
    }
        product.push(productItem);
        localStorage.setItem('product',JSON.stringify(product));
        render();
    
}

function render(){
    product = JSON.parse(localStorage.getItem('product'))||[]
    let element=''
    for(let i=0 ;i <product.length;i++){
        element+=
        `
                        <div class="render__container">
                            <div class="item">
                                <img  src="${product[i].picture}" alt="">
                                <div>${product[i].name}</div>
                                <div>${product[i].price}</div>
                                <div onclick='deleteProduct(${product[i].id})' class="btn">Xóa</div>
                                <div onclick='edit(${product[i].id})' class="edit">Sửa</div>
                            </div>
                        </div>
        `
    }
    document.getElementsByClassName('render__layout')[0].innerHTML=element;
}
render();

function deleteProduct(ID){
        for(let i=0;i<product.length;i++){
            if(product[i].id==ID){
                product.splice(i,1);
                localStorage.setItem('product',JSON.stringify(product));
                render();
            }
        }
}

function edit(ID){
    localStorage.setItem('id',ID);
    console.log(localStorage.setItem('id',ID));
    document.getElementsByClassName('add')[0].innerHTML='Save Edit';
    for(let i=0;i<product.length;i++){
        if(product[i].id==ID){
            document.getElementById('name').value=product[i].name;
            document.getElementById('price').value=product[i].price;
            document.getElementById('brand').value=product[i].brand;
            document.getElementById('picture').value=product[i].picture;
            document.getElementById('detail').value=product[i].detail;
        }
    }
}



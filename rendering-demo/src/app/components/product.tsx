import { resolve } from "path"

export const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve,2000));// burada verien değer milisn olarak tanımlanır ve ekrandan kaç sanye sonra kaybolacağını söyler 
    return <div>Product</div>
}

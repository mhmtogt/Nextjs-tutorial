import { Suspense } from "react";
import {Product} from "@/app/components/product";
import {Reviews} from "@/app/components/reviews";


export default function ProductDetailPage()  {

    return (
            <div>
                <h1>
                    Product detail page 
                </h1>
               <Suspense  fallback = {<p>Loading Product details...</p>}> {/**bu kodda component içinde verilen zaman kadar UI tarafında gösteriliyor  */}
                 <Product/>
               </Suspense>

               <Suspense fallback = {<p>Loading Reviews details...</p>}>
                 <Reviews/> 
               </Suspense> 
            </div>
    );
}